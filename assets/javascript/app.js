$(document).ready(function() {
  // Initialize Firebase
  var config = {
      apiKey: "AIzaSyAQ6ws1ASiLTtTk0u9f0K_yL03c-7xDni0",
      authDomain: "project-1-1549742048716.firebaseapp.com",
      databaseURL: "https://project-1-1549742048716.firebaseio.com",
      projectId: "project-1-1549742048716",
      storageBucket: "",
      messagingSenderId: "1001407996252"
  };
  firebase.initializeApp(config);
  // database reference
  var database = firebase.database();

  var session =[];
  var input = document.getElementById("iBar");
  
  input.addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13 && input.value!=="") {
      if (isNaN(input.value) || input.value.length !=12) {
        text = "Input not valid";
        console.log("not valid");
        document.getElementById("iBar").value=""
        document.getElementById("iBar").value="Requires a 12-digit UPC code...try again"
        setTimeout(function(){document.getElementById("iBar").value=""}, 1750);
      } else {
        console.log(event.keyCode);
        var upc = document.getElementById("iBar").value;
        session.unshift(upc);
        var proxy = "https://cors-anywhere.herokuapp.com/";
        baseUrl = proxy + "https://api.upcitemdb.com/prod/trial/lookup?upc="+ upc;
        runAjax(baseUrl);

        function runAjax(baseUrl){
          return $.ajax({
            url: baseUrl,
            method: "GET",
          }).then(function(res){
            $('.offers').text("");
            console.log(res);
            
            for (let i = 0; i < res.items[0].offers.length; i++) {
              var a =res.items[0].offers[i].link
              $('.offers').prepend("<li><a href="+a+ " target='_blank'>"+res.items[0].offers[i].merchant + res.items[0].offers[i].price+"</a></li>");  
              $('.images').prepend("<img src="+res.items[0].images[i]+" height='80' <a href="+a+ " target='_blank'>"+"</a>"); 
            }
            console.log("res", res.items[0].offers[0].title);
            $('#history').prepend("<li class='history'><a href='#' target='blank'>"+upc+': '+res.items[0].offers[0].title+"</a></li>");
            setTimeout(function(){document.getElementById("iBar").value=""}, 1000);
            });
        }
        console.log(session);
        console.log(pos);

        Quagga.init({
    inputStream : {
        name : "Live",
        type : "LiveStream",
         // Or '#yourElement' (optional)
        target: document.querySelector('#yourElement') 
    },
    decoder : {
        readers : ["upc_reader"]
    }
}, function(err) {
    if (err) {
        console.log(err);
        return
    }
    console.log("Initialization finished. Ready to start");
    Quagga.start();
});
      } 
    };
  });
});