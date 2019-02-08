$(document).ready(function() {
  var session =[];
  var input = document.getElementById("iBar");
  
  function runAjax(baseUrl){
    return $.ajax({
      url: baseUrl,
      method: "GET",
    }).then(function(res){
      console.log("res", res.items[0].images);
      console.log(baseUrl);
    });
  }

  input.addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13 && document.getElementById("iBar").value!=="") {
      var upc = document.getElementById("iBar").value;
      baseUrl = "https://api.upcitemdb.com/prod/trial/lookup?upc="+ upc;
      setTimeout(function(){runAjax(baseUrl)}, 500);
    };
  });
    
});