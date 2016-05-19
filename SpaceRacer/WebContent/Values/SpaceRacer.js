addEventListener("load", function() {
startGame();

// setInterval(draw,100);
});
//**********************Canvas Board**************************************
function startGame() {
    myGameArea.start();

}



var myGameArea = {
    canvas : document.createElement("board"); 
    start : function() {
        this.canvas.width = 480;
        this.canvas.height = 270;
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
    }
}


var spaceship = [];

// ************************* Move Player Right ***********************
addEventListener("keydown", function moveRight(e) {
   spaceship[e.keyCode] = true;
  if (spaceship[68]) {
  movespaceshipRight();
};
});
addEventListener("keyup", function(e) {
  spaceship[e.keyCode] = false;
});
  var right = 3;
function movespaceshipRight() {
    right +=3;
    document.getElementById('spaceship').style.marginLeft = right +"px";
}

// ************************* Move Player Left ***********************
addEventListener("keydown", function moveLeft(e) {
   spaceship[e.keyCode] = true;
  if (spaceship[65]) {
  movespaceshipLeft();
  console.log("A");
};
});
addEventListener("keyup", function(e) {
  spaceship[e.keyCode] = false;
});
  var left = 3;
function movespaceshipLeft() {
    left +=3;
    document.getElementById('spaceship').style.marginRight = left +"px";
}
