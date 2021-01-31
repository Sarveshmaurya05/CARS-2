var database;
var gameState=0;
var playerCount;
var form, player, game;
var distance=0;
var allPlayer;
var car1, car2, car3, car4, cars;

var car1Image, car2Image, car3Image, car4Image, ground, track; 

function preload(){
    car1Image= loadImage("Images/car1.png");
    car2Image= loadImage("Images/car2.png");
    car3Image= loadImage("Images/car3.png");
    car4Image= loadImage("Images/car4.png");
    ground= loadImage("Images/ground.png");
    track=loadImage("Images/track.jpg");
}

function setup(){
    createCanvas(displayWidth,displayHeight);
   database=firebase.database()
    game = new Game()
    game.getState();
    game.start();
}



function draw(){
   if(playerCount==4){
       game.update(1)
   }
   if(gameState==1){
       clear()
       game.play()
   }
   if(gameState==2){
       game.end()
       
   }
}
