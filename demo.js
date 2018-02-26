var c1 = document.getElementById("choice1");
var c2 = document.getElementById("choice2");
var c3 = document.getElementById("choice3");
var c4 = document.getElementById("choice4");

var hat = document.getElementById("hat");
var shirt = document.getElementById("shirt");
var pants = document.getElementById("pants");
var shoes = document.getElementById("shoes");

var prev = document.getElementById("prev");
var next = document.getElementById("next");

var comboText = document.getElementById("comboText");

var hatcount = 0;
var shirtcount = 0;
var pantcount = 0;
var shoecount = 0;

next.addEventListener("click", function() {
    if(c1.checked){
        if(hatcount == 0){
            hat.src = "imgs/gears/h2.png";
            hatcount = 1;
        } else if(hatcount == 1){
            hat.src = "imgs/gears/h3.png";
            hatcount = 2;
        } else if(hatcount == 2){
            hat.src = "imgs/gears/h1.png";
            hatcount = 0;
        }
        
    } else if(c2.checked){
        if(shirtcount == 0){
            shirt.src = "imgs/gears/b2.png";
            shirtcount = 1;
        } else if(shirtcount == 1){
            shirt.src = "imgs/gears/b3.png";
            shirtcount = 2;
        } else if(shirtcount == 2){
            shirt.src = "imgs/gears/b1.png";
            shirtcount = 0;
        }
        
    } else if(c3.checked){
        if(pantcount == 0){
            pants.src = "imgs/gears/l2.png";
            pantcount = 1;
        } else if(pantcount == 1){
            pants.src = "imgs/gears/l3.png";
            pantcount = 2;
        } else if(pantcount == 2){
            pants.src = "imgs/gears/l1.png";
            pantcount = 0;
        }
        
    } else if(c4.checked){
        if(shoecount == 0){
            shoes.src = "imgs/gears/f2.png";
            shoecount = 1;
        } else if (shoecount == 1){
            shoes.src = "imgs/gears/f3.png";
            shoecount = 2;
        } else if (shoecount == 2){
            shoes.src = "imgs/gears/f1.png";
            shoecount = 0;
        }
    } else{
        alert("Choose an option.");
    }
});

prev.addEventListener("click", function(){
    if(c1.checked){
        if(hatcount == 0){
            hat.src = "imgs/gears/h3.png";
            hatcount = 2;
        } else if(hatcount == 1){
            hat.src = "imgs/gears/h1.png";
            hatcount = 0;
        } else if(hatcount == 2){
            hat.src = "imgs/gears/h2.png";
            hatcount = 1;
        }
    } else if(c2.checked){
        if (shirtcount == 0){
            shirt.src = "imgs/gears/b3.png";
            shirtcount = 2;
        } else if(shirtcount == 1){
            shirt.src = "imgs/gears/b1.png";
            shirtcount = 0;
        } else if(shirtcount == 2){
            shirt.src = "imgs/gears/b2.png";
            shirtcount = 1;
        }
    } else if(c3.checked){
        if (pantcount == 0){
            pants.src = "imgs/gears/l3.png";
            pantcount = 2;
        } else if(pantcount == 1){
            pants.src = "imgs/gears/l1.png";
            pantcount = 0;
        } else if(pantcount == 2){
            pants.src = "imgs/gears/l2.png";
            pantcount = 1;
        }
    } else if(c4.checked){
        if (shoecount == 0){
            shoes.src = "imgs/gears/f3.png";
            shoecount = 2;
        } else if(shoecount == 1){
            shoes.src = "imgs/gears/f1.png";
            shoecount = 0;
        } else if(shoecount == 2){
            shoes.src = "imgs/gears/f2.png";
            shoecount = 1;
        }
    } else{
        alert("Choose an option.");
    }
});

comboText.addEventListener("keyup", function(ev){
    if(ev.keyCode == 13){
        if(comboText.value == "combo1"){
            hat.src = "imgs/gears/h1.png";
            shirt.src = "imgs/gears/b1.png";
            pants.src = "imgs/gears/l1.png";
            shoes.src = "imgs/gears/f1.png";
            hatcount = 0;
            shirtcount = 0;
            pantcount = 0;
            shoecount = 0;
        } else if(comboText.value == "combo2"){
            hat.src = "imgs/gears/h2.png";
            shirt.src = "imgs/gears/b2.png";
            pants.src = "imgs/gears/l2.png";
            shoes.src = "imgs/gears/f2.png";
            hatcount = 1;
            shirtcount = 1;
            pantcount = 1;
            shoecount = 1;
        } else if(comboText.value == "combo3"){
            hat.src = "imgs/gears/h3.png";
            shirt.src = "imgs/gears/b3.png";
            pants.src = "imgs/gears/l3.png";
            shoes.src = "imgs/gears/f3.png";
            hatcount = 2;
            shirtcount = 2;
            pantcount = 2;
            shoecount = 2;
        } else if(comboText.value == "random"){
            hatcount = getRandomInt(0,3);
            if (hatcount == 0){
                hat.src = "imgs/gears/h1.png";
            } else if (hatcount == 1){
                hat.src = "imgs/gears/h2.png";
            } else if (hatcount == 2){
                hat.src = "imgs/gears/h3.png";
            }
            shirtcount = getRandomInt(0,3);
            if (shirtcount == 0){
                shirt.src = "imgs/gears/b1.png";
            } else if (shirtcount == 1){
                shirt.src = "imgs/gears/b2.png";
            } else if (shirtcount == 2){
                shirt.src = "imgs/gears/b3.png";
            }
            pantcount = getRandomInt(0,3);
            if (pantcount == 0){
                pants.src = "imgs/gears/l1.png";
            } else if (pantcount == 1){
                pants.src = "imgs/gears/l2.png";
            } else if (pantcount == 2){
                pants.src = "imgs/gears/l3.png";
            }
            shoecount = getRandomInt(0,3);
            if (shoecount == 0){
                shoes.src = "imgs/gears/f1.png";
            } else if (shoecount == 1){
                shoes.src = "imgs/gears/f2.png";
            } else if (shoecount == 2){
                shoes.src = "imgs/gears/f3.png";
            }
        }
        function getRandomInt(min, max){
            return Math.floor(Math.random() * (max - min + 1) ) + min;
        };
    };
});
    


    


