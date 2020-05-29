var canvas,backgroundImage;
var gameState = 0;
var teamCount;
var allPteams;
var database;
var form,team,game;
var teams,team1,team2,team3,team4,team5,team6,team7,team8;
var goalKeepingGloves;
var team1Image,team2Image,team3Image,team4Image,team5Image,team6Image,team7Image,team8Image;

function preload()
{
  goalKeepingGloves = loadImage("../images/goalKeepingGloves.png");
  team1Image = loadImage("../images/team1.jpg");
  team2Image = loadImage("../images/team2.jpg");
  team3Image = loadImage("../images/team3.jpg");
  team4Image = loadImage("../images/team4.jpg");
  team5Image = loadImage("../images/team5.jpg");
  team6Image = loadImage("../images/team6.jpg");
  team7Image = loadImage("../images/team7.jpg");
  team8Image = loadImage("../images/team8.jpg");
}

function setup()
{
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw()
{
  if(playerCount === 4)
  {
    game.update(1);
  }
  if(gameState === 1)
  {
    clear();
    game.play();
  }
  if(gameState===2)
  {
    game.end();
  }
}
