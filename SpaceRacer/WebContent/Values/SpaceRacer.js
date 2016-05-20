
var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');


var ballRadius =15;
var x = canvas.width/3;
var y = canvas.height-20;
var dx = 4
Math.floor(Math.random() * 11);
console.log(dx);
var dy = -2;


// //*************************On Load***************************************
 addEventListener("load", function() {
    startGame();
  //  setInterval(draw, 100);



 });
//**********************Astroid 1**************************************

function drawAstroid() {
  ctx.beginPath();
  ctx.arc(x, y, ballRadius, 0, Math.PI*2);
  ctx.fillStyle = "#808080";
  ctx.fill();
  ctx.closePath();
}


var myObstacle;

function startGame() {
    myGamePiece = new component(30, 30, "red", 225, 225);
    myObstacle = new component (30, 30, "gray", 150, 120);
    myGameArea.start();
}
var myGameArea = {
    canvas : document.getElementById("myCanvas"),
    start : function() {
        // this.canvas.width = 480;
        // this.canvas.height = 270;
         this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        this.frameNo = 0;
        this.interval = setInterval(updateGameArea, 20);
        window.addEventListener('keydown', function (e) {
            e.preventDefault();
            myGameArea.keys = (myGameArea.keys || []);
            myGameArea.keys[e.keyCode] = (e.type == "keydown");
        })
        window.addEventListener('keyup', function (e) {
            myGameArea.keys[e.keyCode] = (e.type == "keydown");
        })
    },
    stop : function() {
        clearInterval(this.interval);
    },
    clear : function() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    },
    stop : function() {
       clearInterval(this.interval);
   }
}

function component(width, height, color, x, y, type) {
 this.type = type;
    this.width = width;
    this.height = height;
    this.speed = 0;
    this.angle = 0;
    this.moveAngle = 0;
    this.x = x;
    this.y = y;

    this.update = function() {
        ctx = myGameArea.context;
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.angle);
        ctx.fillStyle = color;
        ctx.fillRect(this.width / -2, this.height / -2, this.width, this.height);
        ctx.restore();
    }
    this.newPos = function() {
        this.angle += this.moveAngle * Math.PI / 180;
        this.x += this.speed * Math.sin(this.angle);
        this.y -= this.speed * Math.cos(this.angle);
    }


this.crashWith = function(otherobj) {
      var myleft = this.x;
      var myright = this.x + (this.width);
      var mytop = this.y;
      var mybottom = this.y + (this.height);
      var otherleft = otherobj.x;
      var otherright = otherobj.x + (otherobj.width);
      var othertop = otherobj.y;
      var otherbottom = otherobj.y + (otherobj.height);
      var crash = true;
      if ((mybottom < othertop) ||
             (mytop > otherbottom) ||
             (myright < otherleft) ||
             (myleft > otherright)) {
         crash = false;
      }
      return crash;
  }
}
function updateGameArea() {
  if (myGamePiece.crashWith(myObstacle)) {
        myGameArea.stop();
    } else {
    myGameArea.clear();
    myGamePiece.moveAngle = 0;
    myGamePiece.speed = 0;
    if (myGameArea.keys && myGameArea.keys[37]) {myGamePiece.moveAngle = -1; }
    if (myGameArea.keys && myGameArea.keys[39]) {myGamePiece.moveAngle = 1; }
    if (myGameArea.keys && myGameArea.keys[38]) {myGamePiece.speed= 1; }
    if (myGameArea.keys && myGameArea.keys[40]) {myGamePiece.speed= -1; }
    myObstacle.y += 1;
    myObstacle.update();
    myGamePiece.newPos();
    myGamePiece.update();
}

}
