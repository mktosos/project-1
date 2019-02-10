$(document).ready(function() {

  var session =[];
  var input = document.getElementById("iBar");
  
  input.addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13 && input.value!=="") {
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
    
              console.log(res.items[0].images);
          }
          console.log("res", res.items[0].offers[0].title);
          $('#history').prepend("<li><a href='#' target='blank'>"+upc+': '+res.items[0].offers[0].title+"</a></li>");
          setTimeout(function(){document.getElementById("iBar").value=""}, 1000);
          });
    }
    console.log(session);
    console.log(pos);
    };
  });


    
});