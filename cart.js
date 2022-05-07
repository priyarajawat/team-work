
var data = JSON.parse(localStorage.getItem("cart1"));
console.log(data);

var newdata = JSON.parse(localStorage.getItem("newcart"))|| [];


data.forEach(function(ele){
    
    var img = document.createElement("img");
   img.src = ele.image_url;


    var h2 = document.querySelector("#disc>h2");
     h2.innerText = ele.name;
     var p = document.querySelector("#fun>p");
    p.innerText = ele.strprice;
     var p2 = document.querySelector("#fun>p+p");
     p2.innerText = ele.price;

    var box =  document.querySelector("#img")
  box.append(img);
    
})