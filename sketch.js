var mainboy,mainboy_img;
var bg,bg_img;
//var cone,cone_animation;
//var cone2,cone2_animation;
var rock0,rock1;
var rock0_img,rock1_img;
var house;
var button;
var button2;
var button3;
var car,car2,car3,car4,car5;
var truck;
var button_img;
var coin,coin2,coin3,coin4,coin5,coin_animation;
var newcar_img,newcar2_img,newcar3_img;
var truck_img;
var round;
var caution,caution_animation;
var truck2,truck2_img;
var sport,sport2;
var sport_img,sport2_img;
var house,house2,house_img,house2_img;




var gameState=1
function preload(){
  bg_img = loadImage("assets/bg.gif");

  sport_img = loadImage("assets/sport.png");
  sport2_img = loadImage("assets/sport2.png")

  mainboy_img = loadImage("assets/mainboy.png");

  caution_animation = loadAnimation("assets/caution1.gif","assets/caution2.gif")

  //cone_animation = loadAnimation("assets/cone0.gif","assets/cone1.gif");
  //cone2_animation = loadAnimation("assets/cone2.gif","assets/cone3.gif")

  truck2_img = loadImage("assets/xuv.png")

  button_img = loadImage("assets/next.png");

  coin_animation = loadAnimation("assets/coin.gif","assets/coin2.gif","assets/coin3.gif","assets/coin4.gif")

  truck_img = loadImage("assets/truck.png");

  newcar_img = loadImage("assets/newcar.png");
  newcar2_img = loadImage("assets/newcar2.png");
  newcar3_img = loadImage("assets/newcar3.png")

  house_img = loadImage("assets/house.png");
  house2_img = loadImage("assets/house2.png");
  
  rock0_img = loadImage("assets/rock0.png")
  rock1_img = loadImage("assets/rock1.png")

  
 // house = loadImage("")
}


function setup() {
  createCanvas(1440,822);
  
 caution = createSprite(700,400,20,20);
 caution.addAnimation("blinking",caution_animation);  
 caution.scale = 0.1
  
 rock0 = createSprite(1030,200,20,20);
 rock0.addImage(rock0_img);
 rock0.scale = 0.2

 rock1 = createSprite(90,695,20,20);
 rock1.addImage(rock1_img);
 rock1.scale = 0.06

  mainboy = createSprite(100,780,10,10);
  mainboy.addImage(mainboy_img);
  mainboy.scale = 0.1

  //cone2 = createSprite(800,300,20,20);
  //cone2.addAnimation("moving",cone2_animation)

  //cone = createSprite(1000,100,20,20);
  //cone.addAnimation("walking",cone_animation)
 // cone.scale = 2
  //round = Bodies.circle(300,300,30);
  //round.shapeColor = "red"

  coin = createSprite(450,453,20,20)
  coin.addAnimation("moving",coin_animation)
  coin.scale = 0.09
  coin2 = createSprite(1200,509,20,20);
  coin2.addAnimation("moving",coin_animation)
  coin2.scale = 0.09
  coin3 = createSprite(900,113,20,20);
  coin3.addAnimation("moving",coin_animation)
  coin3.scale = 0.09
  coin4 = createSprite(1350,150,20,20);
  coin4.addAnimation("moving",coin_animation)
  coin4.scale = 0.09
  coin5 = createSprite(565,50,20,20);
  coin5.addAnimation("moving",coin_animation)
  coin5.scale = 0.09

  //house = createSprite(815,189,20,20);
  //house.addImage(house_img);
  //house.scale = 0.60

  house2 = createSprite(838,170,20,20);
  house2.addImage(house2_img);
  house2.scale = 0.55


  car = createSprite(420,480,23,40);
  car.addImage(newcar_img);
  car.scale = 0.14

  car2 = createSprite(472,400,23,49);
  car2.addImage(newcar2_img);
  car2.scale = 0.13

  car3 = createSprite(957,741,26,43);
  car3.addImage(newcar3_img);
  car3.scale = 0.13;

  car4 = createSprite(770,110,20,54);
  car4.addImage(newcar_img);
  car4.scale = 0.15

  car5 = createSprite(420,80,10,10)
  car5.addImage(newcar2_img);
  car5.scale = 0.14

  truck2 = createSprite(417,145,50,20);
  truck2.addImage(truck2_img);
  truck2.scale = 0.32

  truck = createSprite(1345,60,29,55);
  truck.addImage(truck_img)
  truck.scale = 0.25

  sport = createSprite(257,300,20,20);
  sport.addImage(sport_img)
  sport.scale = 0.1

  sport2 = createSprite(290,330,20,20);
  sport2.addImage(sport2_img)
  sport2.scale = 0.16


  button=createSprite(1400,20,30,30);
  button.addImage(button_img)
  button.scale = 0.2


  button2=createSprite(1390,100,30,30);
  button2.shapeColor = "red"



//button3=createSprite(1390,100,30,30)
//button3.shapeColor= "blue"
}

function draw() {
  createEdgeSprites();
  mainboy.bounce(car);
  mainboy.bounce(car2);
  mainboy.bounce(car3);
  mainboy.bounce(car4);
  mainboy.bounce(truck);
  //fill("red")
 // circle(200,200,80)
car.rotation=8
car2.rotation=58
car3.rotation=28
car4.rotation=90
car5.rotation=90
truck.rotation=170
truck2.rotation=270
sport.rotation = 105
sport2.rotation = 114
house2.rotation = 450
//log3.rotation = 40

if (gameState===1) {
  background(bg_img)

 mainboy.visible=true
 button.visible=true
 button2.visible=false
 //car.visible = false
 //car2.visible = false
 //car3.visible = false
 //car4.visible = false
 car5.visible = false
 //truck.visible = false

  if(keyDown("up"))
  {
    mainboy.y=mainboy.y-4
    mainboy.rotation=360
  }

  if(keyDown("down"))
  {
    mainboy.y=mainboy.y+4
  }

  if(keyDown("right"))
  {
    mainboy.x=mainboy.x+4
    mainboy.rotation=45
  }


  if(keyDown("left"))
  {
    mainboy.rotation=315
    mainboy.x=mainboy.x-4
  }
   
}
if (gameState===2) {
  background("black")
  mainboy.visible=false
  button.visible=false
  button2.visible = true
}
 if (mousePressedOver(button)) {
   gameState=2
 }

 //ellipseMode(RADIUS);

  drawSprites();
}