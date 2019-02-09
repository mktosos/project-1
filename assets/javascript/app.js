$(document).ready(function() {
  var session =[];
  var input = document.getElementById("iBar");
  
  // function runAjax(baseUrl){
  //   return $.ajax({
  //     url: baseUrl,
  //     method: "GET",
  //   }).then(function(res){
  //     console.log("res", res.items[0].title);
  //     console.log("res", res.items[0].offers);
  //     console.log(baseUrl);
  //   });
  // }
  res2={
    "products": [
    {
    "barcode_number": "093155160231",
    "barcode_type": "UPC",
    "barcode_formats": "UPC 093155160231, EAN 0093155160231",
    "mpn": "093155160231",
    "model": "",
    "asin": "",
    "product_name": "The Elder Scrolls Online: Tamriel Unlimited Xbox One",
    "title": "",
    "category": "Software > Video Game Software",
    "manufacturer": "Bethesda",
    "brand": "",
    "label": "",
    "author": "",
    "publisher": "",
    "artist": "",
    "actor": "",
    "director": "",
    "studio": "",
    "genre": "",
    "audience_rating": "",
    "ingredients": "",
    "nutrition_facts": "",
    "color": "",
    "format": "",
    "package_quantity": "",
    "size": "",
    "length": "",
    "width": "",
    "height": "",
    "weight": "0.3",
    "release_date": "",
    "description": "Unlimited Adventures, NO Subscription Required* THE Fight FOR Tamriel Begins Three alliances vie for control of the Empire. As these powers battle for supremacy, darker forces move to destroy the world. Play THE Way You Like Battle, craft, fish, steal, siege, or explore. The choice is yours to make in a persistent Elder Scrolls world. A Multiplayer Rpg Adventure alone, quest with friends, or join an army of hundreds in epic Pvp battles. Tell Your Own Story Discover the secrets of Tamriel as you quest to regain your lost soul and save the world from Oblivion.",
    "features": [],
    "images": [
    "https://images.barcodelookup.com/462/4629679-1.jpg"
    ],
    "stores": [
    {
    "store_name": "GameFly - Online Video Game Rentals",
    "store_price": "0.00",
    "product_url": "http://www.gamefly.com/mediatitle/details/5007274",
    "currency_code": "USD",
    "currency_symbol": "$"
    },
    {
    "store_name": "Jet.com",
    "store_price": "9.99",
    "product_url": "http://jet.com/product/detail/ac53cdac258c422bb3631005491bdf90",
    "currency_code": "USD",
    "currency_symbol": "$"
    },
    {
    "store_name": "Target",
    "store_price": "10.99",
    "product_url": "http://goto.target.com/c/0/201333/2092?prodsku=15064004&u=https://www.target.com/p/the-elder-scrolls-online-tamriel-unlimited-xbox-one/-/A-15064004",
    "currency_code": "USD",
    "currency_symbol": "$"
    },
    {
    "store_name": "Target Exclusions",
    "store_price": "10.99",
    "product_url": "http://goto.target.com/c/0/520943/2092?prodsku=15064004&u=https://www.target.com/p/the-elder-scrolls-online-tamriel-unlimited-xbox-one/-/A-15064004",
    "currency_code": "USD",
    "currency_symbol": "$"
    },
    {
    "store_name": "Newegg Business",
    "store_price": "13.39",
    "product_url": "https://www.neweggbusiness.com/Product/Product.aspx?Item=9B-74-122-030&nm_mc=afc-cjb2b&cm_mmc=afc-cjb2b-_-Xbox+One+Video+Games-_-Bethesda+Softworks-_-9B74122030",
    "currency_code": "USD",
    "currency_symbol": "$"
    },
    {
    "store_name": "BLINQ",
    "store_price": "12.79",
    "product_url": "https://www.blinq.com/detail/electronics/tv-home-theater-gaming/video-games/the-elder-scrolls-online-tamriel-unlimited-for-xbox-one/646203",
    "currency_code": "USD",
    "currency_symbol": "$"
    },
    {
    "store_name": "fye.com",
    "store_price": "14.99",
    "product_url": "http://www.fye.com/s/product/3648639",
    "currency_code": "USD",
    "currency_symbol": "$"
    },
    {
    "store_name": "Secondspin.com",
    "store_price": "14.99",
    "product_url": "http://www.secondspin.com/s/product/3648639",
    "currency_code": "USD",
    "currency_symbol": "$"
    },
    {
    "store_name": "Priceplunge & NothingButSavings",
    "store_price": "21.92",
    "product_url": "http://www.nothingbutsavings.com/Product/339816",
    "currency_code": "USD",
    "currency_symbol": "$"
    },
    {
    "store_name": "UnbeatableSale.com",
    "store_price": "24.35",
    "product_url": "http://www.funtoymall.com/dh16023.html",
    "currency_code": "USD",
    "currency_symbol": "$"
    },
    {
    "store_name": "JCPenney",
    "store_price": "24.99",
    "product_url": "https://www.jcpenney.com/p/xbox-one-the-elder-scrolls-online-tamriel-unlimited-video-game/ppr5007131865?pTmplType=regular&country=US&currency=USD&selectedSKUId=69108840018&selectedL",
    "currency_code": "USD",
    "currency_symbol": "$"
    },
    {
    "store_name": "Newegg Canada",
    "store_price": "37.29",
    "product_url": "http://www.newegg.ca/Product/Product.aspx?Item=9SIA66K5TF6037&nm_mc=AFC-C8JunctionCA&cm_mmc=AFC-C8JunctionCA-_-Xbox+One+Video+Games-_-Bethesda+Softworks-_-9SIA66K5TF6037",
    "currency_code": "CAD",
    "currency_symbol": "$"
    },
    {
    "store_name": "Newegg.com",
    "store_price": "138.22",
    "product_url": "https://www.newegg.com/global/ae-en/Product/Product.aspx?Item=9SIA6V67K68881&nm_mc=AFC-C8Junction-ARE&cm_mmc=AFC-C8Junction-ARE-_-Xbox+One+Video+Games-_-Bethesda+Softworks-_-9SIA6V67K68881",
    "currency_code": "USD",
    "currency_symbol": "$"
    }
    ],
    "reviews": []
    }
    ]
    };
  // function runAjax2(baseUrl2){
  //     return $.ajax({
  //       url: baseUrl2,
  //       method: "GET",
      // }).then(function(res2){
         console.log("res2", res2.products[0].product_name);
        // console.log("res2", res2.items[0].offers);
        // console.log(baseUrl2);
      // });
    // }

  input.addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13 && input.value!=="") {
    var upc = document.getElementById("iBar").value;
    session.unshift(upc);
    //baseUrl = "https://api.upcitemdb.com/prod/trial/lookup?upc="+ upc;
    //runAjax(baseUrl);
    // baseUrl2 = "https://api.barcodelookup.com/v2/products?barcode="+upc+"&formatted=y&key=3q3yk99ziebhl3lr56tmn6e8i040jn"
    // runAjax2(baseUrl2);

    $('#history').prepend("<li><a href='#' target='blank' >"+upc+': '+res2.products[0].product_name+"</a></li>");
    setTimeout(function(){document.getElementById("iBar").value=""}, 500);
    
    console.log(session);
    
    };
  });


    
});