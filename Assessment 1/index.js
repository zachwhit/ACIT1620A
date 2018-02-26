var w = 100;
var h = 70;
var count = 1;

document.getElementById("bg1").addEventListener("click", 
function(){ 
    document.getElementById("ch1").style.backgroundImage = "url(imgs/i1.jpg)";
    document.getElementById("ch2").style.backgroundImage = "url(imgs/i2.jpg)";
    document.getElementById("ch3").style.backgroundImage = "url(imgs/i3.jpg)";
    count = 1;
});

document.getElementById("bg2").addEventListener("click", 
function(){ 
    document.getElementById("ch1").style.backgroundImage = "url(imgs/i4.jpg)";
    document.getElementById("ch2").style.backgroundImage = "url(imgs/i5.jpg)";
    document.getElementById("ch3").style.backgroundImage = "url(imgs/i6.jpg)";
    count = 2;
});

document.getElementById("bg3").addEventListener("click", 
function(){ 
    document.getElementById("ch1").style.backgroundImage = "url(imgs/i7.jpg)";
    document.getElementById("ch2").style.backgroundImage = "url(imgs/i8.jpg)";
    document.getElementById("ch3").style.backgroundImage = "url(imgs/i9.jpg)";
    count = 3;
});

document.getElementById("bg4").addEventListener("click", 
function(){ 
    document.getElementById("ch1").style.backgroundImage = "url(imgs/i10.jpg)";
    document.getElementById("ch2").style.backgroundImage = "url(imgs/i11.jpg)";
    document.getElementById("ch3").style.backgroundImage = "url(imgs/i12.jpg)";
    count = 4;
});

document.getElementById("ch1").addEventListener("mouseenter", 
function(){ 
    document.getElementById("zoom").style.backgroundImage = document.getElementById("ch1").style.backgroundImage;
});

document.getElementById("ch2").addEventListener("mouseenter", 
function(){ 
    document.getElementById("zoom").style.backgroundImage = document.getElementById("ch2").style.backgroundImage;
});

document.getElementById("ch3").addEventListener("mouseenter", 
function(){ 
    document.getElementById("zoom").style.backgroundImage = document.getElementById("ch3").style.backgroundImage;
});


document.getElementById("zoom").addEventListener("click", 
function(){ 
    document.getElementById("zoomcontrols").style.display = "inline";
});

document.getElementById("plusbut").addEventListener("click",
function(){
    h = h+7;
    w = w+10;
    document.getElementById("zoom").style.height = h+"%";
    document.getElementById("zoom").style.width = w+"%";
});

document.getElementById("minusbut").addEventListener("click",
function(){
    h = h-7;
    w = w-10;
    document.getElementById("zoom").style.height = h+"%";
    document.getElementById("zoom").style.width = w+"%";
});


document.getElementById("nextbut").addEventListener("click",
function(){
    if (count == 1) {
        document.getElementById("ch1").style.backgroundImage = "url(imgs/i1.jpg)";
        document.getElementById("ch2").style.backgroundImage = "url(imgs/i2.jpg)";
        document.getElementById("ch3").style.backgroundImage = "url(imgs/i3.jpg)";
        count = 2;
    } else if (count == 2) {
        document.getElementById("ch1").style.backgroundImage = "url(imgs/i4.jpg)";
        document.getElementById("ch2").style.backgroundImage = "url(imgs/i5.jpg)";
        document.getElementById("ch3").style.backgroundImage = "url(imgs/i6.jpg)";
        count = 3;
    } else if (count == 3) {
        document.getElementById("ch1").style.backgroundImage = "url(imgs/i7.jpg)";
        document.getElementById("ch2").style.backgroundImage = "url(imgs/i8.jpg)";
        document.getElementById("ch3").style.backgroundImage = "url(imgs/i9.jpg)";
        count = 4;
    } else {
        document.getElementById("ch1").style.backgroundImage = "url(imgs/i10.jpg)";
        document.getElementById("ch2").style.backgroundImage = "url(imgs/i11.jpg)";
        document.getElementById("ch3").style.backgroundImage = "url(imgs/i12.jpg)";
        count = 1;
    }
});
    
document.getElementById("prevbut").addEventListener("click",
function(){
    if (count == 1) {
        document.getElementById("ch1").style.backgroundImage = "url(imgs/i10.jpg)";
        document.getElementById("ch2").style.backgroundImage = "url(imgs/i11.jpg)";
        document.getElementById("ch3").style.backgroundImage = "url(imgs/i12.jpg)";
        count = 2;
    } else if (count == 2) {
        document.getElementById("ch1").style.backgroundImage = "url(imgs/i7.jpg)";
        document.getElementById("ch2").style.backgroundImage = "url(imgs/i8.jpg)";
        document.getElementById("ch3").style.backgroundImage = "url(imgs/i9.jpg)";
        count = 3;
    } else if (count == 3) {
        document.getElementById("ch1").style.backgroundImage = "url(imgs/i4.jpg)";
        document.getElementById("ch2").style.backgroundImage = "url(imgs/i5.jpg)";
        document.getElementById("ch3").style.backgroundImage = "url(imgs/i6.jpg)";
        count = 4;
    } else {
        document.getElementById("ch1").style.backgroundImage = "url(imgs/i1.jpg)";
        document.getElementById("ch2").style.backgroundImage = "url(imgs/i2.jpg)";
        document.getElementById("ch3").style.backgroundImage = "url(imgs/i3.jpg)";
        count = 1;
    }
});




