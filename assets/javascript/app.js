var keyG;
var res={};
var date =moment().format('MMMM Do YYYY, h:mm:ss a');

// start up firebase, set database var, call readFirbase scan history
var config = {
  apiKey: "AIzaSyAQ6ws1ASiLTtTk0u9f0K_yL03c-7xDni0",
  authDomain: "project-1-1549742048716.firebaseapp.com",
  databaseURL: "https://project-1-1549742048716.firebaseio.com",
  projectId: "project-1-1549742048716",
  storageBucket: "",
  messagingSenderId: "1001407996252"
};
firebase.initializeApp(config);
var database = firebase.database();
readFirebase(database);

$(document).ready(function() {

  var input = document.getElementById("iBar");
  
  input.addEventListener("keyup", function(event) {
    event.preventDefault();
    //listens for return key
    if (event.keyCode === 13 && input.value!=="") {
      mainFunction(input.value);
    };
  });

  function mainFunction(value){
    //UPC code validation
    if (isNaN(value) || value.length !=12) {
      //text = "Input not valid";
      document.getElementById("iBar").value=""
      document.getElementById("iBar").value="Requires a 12-digit UPC code...try again"
      setTimeout(function(){document.getElementById("iBar").value=""}, 1750);
    } else {
      //push UPC search to history and add UPC to ajax url to be called
      var upc = document.getElementById("iBar").value;
      var proxy = "https://cors-anywhere.herokuapp.com/";
      baseUrl = proxy + "https://api.upcitemdb.com/prod/trial/lookup?upc="+ upc;

      runAjax(baseUrl,database);
      
      //ajax function
      function runAjax(baseUrl,database){
        return $.ajax({
          url: baseUrl,
          method: "GET",
        }).then(function(res){
          $('.offers').text("");
          console.log(res);
        
        //clear start screen populate offers with store/link and product images
        for (let i = 0; i < res.items[0].offers.length; i++) {
          var a =res.items[0].offers[i].link
          if(res.items[0].images[i] !== undefined){
          $('.startText').text("");
          $('#startText1').text(res.items[0].offers[0].title);
          $('#startText2').text("UPC: "+upc);
          $('#startText3').text("historical price range: $"+res.items[0].highest_recorded_price+" / $"+res.items[0].lowest_recorded_price);
          $('.offers').prepend("<tr><td><a href="+a+ " target='_blank'>"+res.items[0].offers[i].merchant+"</a></td><td><a href="+a+ " target='_blank'> $"+res.items[0].offers[i].price+"</a></td></tr>");  
          $('.images').append("<a href="+a+" target='_blank'><img src="+res.items[0].images[i]+" height='70' alt=''></a>"); 
          }
        }
          console.log("res", res.items[0].offers[0].title);
           //push ajax resultObj to firebase
        setTimeout(function(){database.ref().push({
          resultObj: res,
          location: pos,
          date: date
          });
        },1000);
        
          //clear input field after 1sec
        setTimeout(function(){document.getElementById("iBar").value=""}, 1000);
          });
        }
        // console.log(session);
         console.log(pos);
      }
    }
  
});

function readFirebase(database){
  //grab data from firebase database on value change or on page start to display
  database.ref().on('child_added',function(snapshot) {
    // console.log(snapshot.val().location);
    var coordinates = snapshot.val().location;
    window.snapshot=snapshot;
    window.coordinates=coordinates;
    //$ display time/title/upc in recent searches div
    var $item = $('<div>');
    $item.append('<a href="javascript:void(0);" onclick="someFunction(); return false;" target =_blank><div>'+ snapshot.val().date + " : "+ snapshot.val().resultObj.items[0].title + " UPC:"+ snapshot.val().resultObj.items[0].upc+'</div></a>');
    $('#history').prepend($item);
    }, function(errorObject) {
    // In case of error this will print the error
    console.log("The read failed: " + errorObject.code);
    initMap(coordinates);
  });
}

function someFunction(){
  var key = Object.keys(snapshot.val());
  console.log(key);
  var rootRef = firebase.database().ref();
}

//Google Maps
function initMap(coordinates) {
  // The location of google maps pin
  var map = new google.maps.Map(
      document.getElementById('map'), {zoom: 12, center: coordinates});
  // The marker, positioned at coordinates given
  var marker = new google.maps.Marker({position: coordinates, map: map});
  console.log("maps done!");
}
// firebase reference key
function checkFirebase(){
  database.ref().on('value', function(snapshot) {
    var keys = Object.keys(snapshot.val());
    window.keys=keys; 
    console.log('Number of scans in Firebase database='+ keys.length);
    console.log(keys[keys.length-1]);
  });
}
