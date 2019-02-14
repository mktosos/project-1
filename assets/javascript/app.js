$(document).ready(function() {
  var res={};
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
  
 
  //grab data from database on value change or on page start to display
  database.ref().on('child_added',function(snapshot) {
    console.log(snapshot.val());
    //jqeury the values as text to ID div
    var $item = $('<div>');
    $item.append('<div>'+ snapshot.val().resultObj.items[0].title + " UPC:"+ snapshot.val().resultObj.items[0].upc+'</div>');

    $('#history').append($item);
    // $('#title').text(snapshot.val().title);
    // $('#location').text(snapshot.val().location.lat);
    // $('#upc').text(snapshot.val().upc);
    
    }, function(errorObject) {

    // In case of error this will print the error
    console.log("The read failed: " + errorObject.code);
  });

  
  //search history array
  var session =[];
  var input = document.getElementById("iBar");
  
  input.addEventListener("keyup", function(event) {
    event.preventDefault();

    //listens for return key
    if (event.keyCode === 13 && input.value!=="") {
     
      mainFunction(input.value, session);
    };
  });

function mainFunction(value, session){
  
      //UPC code validation
      if (isNaN(value) || value.length !=12) {
        text = "Input not valid";
        console.log("not valid");
        document.getElementById("iBar").value=""
        document.getElementById("iBar").value="Requires a 12-digit UPC code...try again"
        setTimeout(function(){document.getElementById("iBar").value=""}, 1750);
      } else {
        //push UPC search to history and add UPC to ajax url to be called
        //console.log(event.keyCode);
        var upc = document.getElementById("iBar").value;
        session.unshift(upc);
        var proxy = "https://cors-anywhere.herokuapp.com/";
        baseUrl = proxy + "https://api.upcitemdb.com/prod/trial/lookup?upc="+ upc;
        runAjax(baseUrl);

        //ajax function
        function runAjax(baseUrl){
          return $.ajax({
            url: baseUrl,
            method: "GET",
          }).then(function(res){
            $('.offers').text("");
            console.log(res);
            //push ajax resultObj to firebase
            setTimeout(function(){ database.ref().push({
              resultObj: res,
              location: pos
              });
            }, 5000);
            
            //clear start screen populate offers with store/link and product images
            for (let i = 0; i < res.items[0].offers.length; i++) {
              var a =res.items[0].offers[i].link
              if(res.items[0].images[i] !== undefined){
              $('.startText').text("");
              $('#startText1').text(res.items[0].offers[0].title);
              $('#startText2').text(upc);
              $('.offers').prepend("<li><a href="+a+ " target='_blank'>"+res.items[0].offers[i].merchant + res.items[0].offers[i].price+"</a></li>");  
              $('.images').prepend("<a href="+a+" target='_blank'><img src="+res.items[0].images[i]+" height='70' alt=''></a>"); 
              }
            }
            console.log("res", res.items[0].offers[0].title);
            //populate history of upc searches list/field
            //$('#history').prepend("<li class='history'><a href='#' target='_blank'>"+upc+': '+res.items[0].offers[0].title+"</a></li>");
            //clear input field after 1sec
            setTimeout(function(){document.getElementById("iBar").value=""}, 1000);
            });
        }
        console.log(session);
        console.log(pos);
      }
}
});