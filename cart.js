
var data = JSON.parse(localStorage.getItem("cart1"));
console.log(data);

var newdata = JSON.parse(localStorage.getItem("newcart"))|| [];


data.forEach(function(ele){
    
    var img = document.querySelector("#img");

    var h2 = document.querySelector("#disc>h2");

     var p = document.querySelector("#disc>h2+p");
   
     var p2 = document.querySelector("#disc>h2+p+p");
    
     
      var obj ={
          img:ele.image_url,
          h2: ele.name,
          p: ele.strikeprice, 
          p2:ele.price
      }

      newdata.push(obj);
      console.log(newdata);
      localStorage.setItem("newcart" ,JSON.stringify(newdata));
     

})