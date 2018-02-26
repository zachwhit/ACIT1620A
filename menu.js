var downImg = document.getElementById("downImg");
var count = 0;


downImg.addEventListener("click", function(){
    if(count == 0){
        document.getElementById("menu").style.top = "0px";
        count += 1
    } else {
        document.getElementById("menu").style.top = "-75px";
        count -= 1
    }
       
});