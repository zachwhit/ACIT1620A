var bg1 = document.getElementById("bg1");
var bg2 = document.getElementById("bg2");
var bg3 = document.getElementById("bg3");
var bg4 = document.getElementById("bg4");
var main = document.getElementById("main");

var cloth1 = document.getElementById("cloth1");
var cloth2 = document.getElementById("cloth2");
var cloth3 = document.getElementById("cloth3");

var title = document.getElementById("title");

bg1.addEventListener("click", function(){
    main.style.display = "block";
    cloth1.src = "imgs/gears/h1.png";
    cloth2.src = "imgs/gears/h2.png";
    cloth3.src = "imgs/gears/h3.png";
    title.innerHTML = "Head Gear";
});

bg2.addEventListener("click", function(){
    main.style.display = "block";
    cloth1.src = "imgs/gears/b1.png";
    cloth2.src = "imgs/gears/b2.png";
    cloth3.src = "imgs/gears/b3.png";
    title.innerHTML = "Body Gear";
    
});

bg3.addEventListener("click", function(){
    main.style.display = "block";
    cloth1.src = "imgs/gears/l1.png";
    cloth2.src = "imgs/gears/l2.png";
    cloth3.src = "imgs/gears/l3.png";
    title.innerHTML = "Leg Gear";
});

bg4.addEventListener("click", function(){
    main.style.display = "block";
    cloth1.src = "imgs/gears/f1.png";
    cloth2.src = "imgs/gears/f2.png";
    cloth3.src = "imgs/gears/f3.png";
    title.innerHTML = "Foot Gear";
});

main.addEventListener("click", function() {
    main.style.display = "none";
});

