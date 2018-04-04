var colourInp = document.getElementById("colInp"),
    prevDiv = document.getElementById("preview"),
    dispDiv = document.getElementById("display"),
    numBut = document.getElementById("nBut"),
    sliderBut = document.getElementById("sBut"),
    plusBut = document.getElementById("pBut"),
    randBut = document.getElementById("rBut"),
    AutoBut = document.getElementById("aBut"),
    StopBut = document.getElementById("saBut"),
    range1 = document.getElementById("rang1"),
    range2 = document.getElementById("rang2"),
    range3 = document.getElementById("rang3"),
    range4 = document.getElementById("rang4"),
    hair = document.getElementById("hair"),
    eyes = document.getElementById("eyes"),
    nose = document.getElementById("nose"),
    mouth = document.getElementById("mouth"),
    hairCount = 0,
    eyeCount = 0,
    noseCount = 0,
    mouthCount = 0,
    timer = null;

colourInp.addEventListener("change", function(){
    prevDiv.style.backgroundColor = colourInp.value;
});

numBut.addEventListener("click", function(){
    changeType("number");
});

sliderBut.addEventListener("click", function(){
    changeType("range");
});

range1.addEventListener("change", function(){
    hair.style.width = this.value + "%";
});

range2.addEventListener("change", function(){
    eyes.style.width = this.value + "%";
});

range3.addEventListener("change", function(){
    nose.style.width = this.value + "%";
});

range4.addEventListener("change", function(){
    mouth.style.width = this.value + "%";
});

hair.addEventListener("click", function(){
    if (hairCount == 0){
        hair.src = "img/hair2.png";
        hairCount = 1;
    } else if(hairCount == 1){
        hair.src = "img/hair3.png";
        hairCount = 2;
    } else if(hairCount == 2){
        hair.src = "img/hair1.png";
        hairCount = 0;
    }    
});

eyes.addEventListener("click", function(){
    if (eyeCount == 0){
        eyes.src = "img/eyes2.png";
        eyeCount = 1;
    } else if(eyeCount == 1){
        eyes.src = "img/eyes3.png";
        eyeCount = 2;
    } else if(eyeCount == 2){
        eyes.src = "img/eyes1.png";
        eyeCount = 0;
    }    
});

nose.addEventListener("click", function(){
    if (noseCount == 0){
        nose.src = "img/nose2.png";
        noseCount = 1;
    } else if(noseCount == 1){
        nose.src = "img/nose3.png";
        noseCount = 2;
    } else if(noseCount == 2){
        nose.src = "img/nose1.png";
        noseCount = 0;
    }    
});

mouth.addEventListener("click", function(){
    if (mouthCount == 0){
        mouth.src = "img/mouth2.png";
        mouthCount = 1;
    } else if(mouthCount == 1){
        mouth.src = "img/mouth3.png";
        mouthCount = 2;
    } else if(mouthCount == 2){
        mouth.src = "img/mouth1.png";
        mouthCount = 0;
    }    
});

plusBut.addEventListener("click", function(){
    createFace();
});

randBut.addEventListener("click", function(){
    randomFace();
})

function createFace(){
    var nDiv = document.createElement("div");
    nDiv.style.height = 100 + "px";
    nDiv.style.width = 100 + "px";
    nDiv.style.backgroundColor = colInp.value;
    nDiv.style.display = "inline-block";
    nDiv.style.margin = 5 + "px";
    nDiv.style.position = "relative";
    nDiv.style.left = "0px";
    dispDiv.appendChild(nDiv);
    
    var nHair = document.createElement("img");
    nHair.style.left = "0px";
    nHair.style.right = "0px";
    nHair.style.margin = "auto";
    nHair.style.width = "60%";
    nHair.style.height = hair.style.height;
    nHair.style.position = "absolute";
    nHair.style.top = "0%";
    nHair.src = hair.src;
    nDiv.appendChild(nHair);
    
    var nEyes = document.createElement("img");
    nEyes.style.left = "0px";
    nEyes.style.right = "0px";
    nEyes.style.margin = "auto";
    nEyes.src = eyes.src;
    nEyes.style.position = "absolute";
    nEyes.style.top = "40%";
    nEyes.style.width = eyes.style.width;
    nDiv.appendChild(nEyes);
    
    var nNose = document.createElement("img");
    nNose.style.left = "0px";
    nNose.style.right = "0px";
    nNose.style.margin = "auto";
    nNose.src = nose.src;
    nNose.style.position = "absolute";
    nNose.style.top = "55%";
    nNose.style.width = nose.style.width;
    nDiv.appendChild(nNose);
    
    var nMouth = document.createElement("img");
    nMouth.style.left = "0px";
    nMouth.style.right = "0px";
    nMouth.style.margin = "auto";
    nMouth.src = mouth.src;
    nMouth.style.position = "absolute";
    nMouth.style.top = "75%";
    nMouth.style.width = mouth.style.width;
    nDiv.appendChild(nMouth);
    
    
    
    
};

function randomFace(){
    hairRand = Math.floor((Math.random() * 3) + 1);
    eyesRand = Math.floor((Math.random() * 3) + 1);
    noseRand = Math.floor((Math.random() * 3) + 1);
    mouthRand = Math.floor((Math.random() * 3) + 1);
    hairSizeRand = Math.floor((Math.random() * 70) + 1);
    eyesSizeRand = Math.floor((Math.random() * 40) + 1);
    noseSizeRand = Math.floor((Math.random() * 30) + 1);
    mouthSizeRand = Math.floor((Math.random() * 35) + 1);
    
    if (hairRand == 1){
        hair.src = "img/hair1.png";
    } else if (hairRand == 2){
        hair.src = "img/hair2.png";
    } else if (hairRand == 3){
        hair.src = "img/hair3.png";
    };
    
    if (eyesRand == 1){
        eyes.src = "img/eyes1.png";
    } else if (eyesRand == 2){
        eyes.src = "img/eyes2.png";
    } else if (eyesRand == 3){
        eyes.src = "img/eyes3.png";
    };
    
    if (noseRand == 1){
        nose.src = "img/nose1.png";
    } else if (noseRand == 2){
        nose.src = "img/nose2.png";
    } else if (noseRand == 3){
        nose.src = "img/nose3.png";
    };
    
    if (mouthRand == 1){
        mouth.src = "img/mouth1.png";
    } else if (mouthRand == 2){
        mouth.src = "img/mouth2.png";
    } else if (mouthRand == 3){
        mouth.src = "img/mouth3.png";
    };
    
    colourInp.value = "#"+((1<<24)*Math.random()|0).toString(16);
    prevDiv.style.backgroundColor = colourInp.value;
    
    hair.style.width = hairSizeRand + "%";
    eyes.style.width = eyesSizeRand + "%";
    nose.style.width = noseSizeRand + "%";
    mouth.style.width = mouthSizeRand + "%";
    
    
};

function changeType(type){
    if (type == "number"){
        range1.type = "number";
        range2.type = "number";
        range3.type = "number";
        range4.type = "number";
    } else if (type == "range"){
        range1.type = "range";
        range2.type = "range";
        range3.type = "range";
        range4.type = "range";
    };
};

AutoBut.addEventListener("click", function(){
    if(timer == null){
        timer = setInterval(function(){
            randomFace();
            createFace();
                            }, 500);
    }
});

StopBut.addEventListener("click", function(){
    clearInterval(timer);
    timer = null;
})