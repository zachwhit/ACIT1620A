var controls = document.getElementById("controls"),
    display = document.getElementById("display"),
    menu = document.getElementById("menuButt"),
    menuCount = 0,
    backgroundI = document.getElementById("backgroundImage"),
    titleI = document.getElementById("title"),
    descI = document.getElementById("desc"),
    backgroundD = document.getElementById("backgroundD"),
    titleD = document.getElementById("titleD"),
    descD = document.getElementById("descriptionD"),
    textC = document.getElementById("textColor"),
    plusB = document.getElementById("newComp"),
    leftCount = 0,
    topCount = 0,
    heightCount = 300;

menu.addEventListener("click", function(){
    expandMenu()
});

backgroundI.addEventListener("keyup", function(ev){
    changeBG(ev)
});

controls.addEventListener("keydown", function(ev){
    moveBG(ev)
})

titleI.addEventListener("keyup", function(){
    changeTitle()
});

descI.addEventListener("keyup", function(){
    changeDescription()
});

textC.addEventListener("change", function(){
    changeColor()
});

plusB.addEventListener("click", function(){
    var nDiv = document.createElement("div");
    var nTitle = document.createElement("div");
    var nDesc = document.createElement("div");
    
    nDiv.className = "backgroundD";
    nTitle.className = "titleD";
    nDesc.className = "descriptionD";
    
    nDiv.style.cssText = backgroundD.style.cssText;
    nTitle.innerHTML = titleD.innerHTML;
    nDesc.innerHTML = descD.innerHTML;
    
    nDiv.appendChild(nTitle);
    nDiv.appendChild(nDesc);
    var newStory = backgroundD.appendChild(nDiv);
    display.appendChild(newStory);
});

function expandMenu(){
    if (menuCount == 0){
        controls.style.bottom = "0px";
        menuCount = 1;
    } else{
        controls.style.bottom = "-93px";
        menuCount = 0;
    }
}

function changeColor(){
    titleD.style.color = textC.value;
    titleD.style.borderBottomColor = textC.value;
    descD.style.color = textC.value;
}

function changeDescription(){
    descD.innerHTML = descI.value;
}

function changeTitle(){
    titleD.innerHTML = titleI.value;
}

function changeBG(ev){
    var userInput = backgroundI.value,
        epicCheck = userInput.indexOf("epic");
    if(ev.keyCode == 13){
        if(backgroundI.value == "horse"){ 
            backgroundD.style.backgroundImage = "url(imgs/bg1.jpg)";
        } else if(backgroundI.value == "night"){
            backgroundD.style.backgroundImage = "url(imgs/bg2.jpg)";
        } else if(backgroundI.value == "mountain"){
            backgroundD.style.backgroundImage = "url(imgs/bg3.jpg)";
        } else if(epicCheck >= 0){
            backgroundD.style.backgroundImage = "url(imgs/bg4.jpg)";
        } else{
            backgroundD.style.backgroundImage = "url("+backgroundI.value+")";
        }  
    }
}

function moveBG(ev){
    if (ev.keyCode == 37){
        leftCount = leftCount + 10;
        backgroundD.style.right = leftCount + "px";
    } else if (ev.keyCode == 39){
        leftCount = leftCount - 10;
        backgroundD.style.right = leftCount + "px";
    } else if (ev.keyCode == 38){
        topCount = topCount - 10;
        backgroundD.style.top = topCount + "px";
    } else if (ev.keyCode == 40){
        topCount = topCount + 10;
        backgroundD.style.top = topCount + "px";
    } else if (ev.keyCode == 109){
        heightCount = heightCount - 10;
        backgroundD.style.height = heightCount + "px";
    } else if (ev.keyCode == 107){
        heightCount = heightCount + 10;
        backgroundD.style.height = heightCount + "px";
    }
}
