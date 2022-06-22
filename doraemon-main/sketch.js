// DEFINING ALL THE VARIABLES.
var ground,ground2;
var doraemon,doraemon2;
var rat,rat2;
var cake,cake2;
var edges;
var line1,line2,line3;
var totalCake = 0;
var cakesGroup,ratsGroup
var play;
var end;
var gameState = "play";



function preload(){
  
// LOADING MY IMAGES HERE.
doraemon2 = loadImage("Doraemon.jpg")
rat2 = loadImage("rat.jpg")
cake2 = loadImage("cake.jpg")
ground2 = loadImage("ground.jpg")
  

  
}

function setup() {
  createCanvas(540,400);

// CREATING ALL THE SPRITES.
line1 = createSprite(200,4,800,77)
line2 = createSprite(4,200,10,800)
line3 = createSprite(536,200,10,800)
line1.visible = false;
line2.visible = false;
line3.visible = false;

ground = createSprite(200,400,800,93)

  
doraemon = createSprite(130,310,20,20)
doraemon.addImage(doraemon2)
doraemon.scale = 0.3
  
cakesGroup = new Group();
ratsGroup = new Group();
}



function draw() {
  background("white");
  
// SETTING DORAEMONS COLLIDER.
  doraemon.debug = false;
  doraemon.setCollider("rectangle",0,0,200,266);
  
// TEXT FOR SHOWING TOTAL DORACAKES.
  textSize(15)
  stroke(0)
  fill("black")
  text("TOTAL DORACAKES : " + totalCake,200, 40)

  doraemon.collide(ground);
  doraemon.bounceOff(ground)
  doraemon.bounceOff(line1);
  doraemon.bounceOff(line2);
  doraemon.bounceOff(line3);
  
// IF STATEMENT FOR GAMESTATES.
  if(gameState === "play") {
    

    
// IF STATEMEMTS FOR ARROWS.
     if(keyDown("left_arrow")) {
   doraemon.x = doraemon.x -3;
  }
  if(keyDown("right_arrow")) {
   doraemon.x = doraemon.x +3;
  }
  if(keyDown("up_arrow")) {
   doraemon.y = doraemon.y -3;
  }
  if(keyDown("down_arrow")) {
   doraemon.y = doraemon.y +3;
  }
    
// CALLING THE FUNCTIONS.
  spawnCakes();
  spawnRats();
    
// IF STATEMENTS FOR THE DORAEMON IF IT TOUCHES THE DORACAKES.
  if(doraemon.isTouching(cakesGroup)) {
    totalCake = totalCake +1
    cakesGroup.destroyEach();
  }
    
// IF STATEMENTS FOR DORAEMON IF IT TOUCHES THE RATS.
  if(doraemon.isTouching(ratsGroup)) {
    ratsGroup.destroyEach();
    gameState = "end";
  }
    
// DISPLAYS WHAT IS THERE.
drawSprites();
    
} else if(gameState === "end") {
  
// DORAEMON'S X AND Y POSITION.
  doraemon.x = 130;
  doraemon.y = 310;
  
// TEXT FOR SHOWING GAME OVER.
  stroke("black");
  fill("black");
  textSize(30);
  text("GAME OVER",185,220);
  textSize(14)
  stroke(120)
  text("press R to restart",222,240)
  
// IF KEY R IS PRESSED IT SHOULD RESTART.
  if(keyDown("r")) {
    totalCake = 0;
    gameState = "play"
  }
  
}
}

// FUNCTION FOR SPAWNCAKES.
function spawnCakes() {
  if(frameCount % 100 === 0) {
    cake = createSprite(510,40,20,20)
    cake.addImage(cake2)
    cake.scale = 0.06
    
    cake.y = Math.round(random(80,340)) 
    cake.velocityX = -6;
    cakesGroup.add(cake);
    
  doraemon.depth = cake.depth
  doraemon.depth = doraemon.depth +1
  }
}

// FUNCTION FOR SPAWNRATS.
function spawnRats() {
  if(frameCount % 80 === 0) {
  rat = createSprite(510,150,20,20)
  rat.addImage(rat2)
  rat.scale = 0.09
    
  rat.y = Math.round(random(80,340))
  rat.velocityX = -6;
  ratsGroup.add(rat);
  }
}