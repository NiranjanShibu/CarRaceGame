var database;
var position;
var gameState = 0;
var playerCount = 0;
var form, player, game1;
var allPlayers;


function setup(){
  database = firebase.database();
  console.log("connected to database");
  createCanvas(400,400);

  game1 = new myGame();
  game1.getgameState();

  game1.start();

  //gameState = 1;
  //game1.setgameState();
}

function draw(){
  background("white");

  
  
}