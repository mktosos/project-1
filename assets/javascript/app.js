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
        
        for (let i = 0; i < res.items[0].offers.length; i++) {
          var a =res.items[0].offers[i].link
          $('.offers').prepend("<li><a href="+a+ " target='_blank'>"+res.items[0].offers[i].merchant + res.items[0].offers[i].price+"</a></li>");  
          console.log(a);
         
        }
       
        // $('.offers').prepend("<li><a href='#' target='blank'>"+upc+': '+res.items[0].offers[0].merchant + res.items[0].offers[0].price+"</a></li>");
        
        console.log("res", res.items[0].offers[0].title);
        $('#history').prepend("<li><a href='#' target='blank'>"+upc+': '+res.items[0].offers[0].title+"</a></li>");
        setTimeout(function(){document.getElementById("iBar").value=""}, 1000);
        });
    }
  
    // baseUrl2 = "https://api.barcodelookup.com/v2/products?barcode="+upc+"&formatted=y&key=3q3yk99ziebhl3lr56tmn6e8i040jn"
    // runAjax2(baseUrl2);

    
    console.log(session);
    console.log(pos);
    
    };
  });


    
});