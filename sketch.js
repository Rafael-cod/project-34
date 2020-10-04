//Create variables here
var dog, happyDog, database, foodS, foodStock;

function preload()
{
  //load images here
  dog = loadImage("images/dogImg.png");
  happyDog = loadImage("images/dogImg1.png");

}

function setup() {
  database = firebase.database();
	createCanvas(500, 500);
  
  foodStock = database.ref('Food');
  foodStock.on("value",readStock)

}


function draw() {  
  background(46,139,87);

  image(dog,175,175,150,150);

  drawSprites();
  //add styles here

  if(keyWentDown(UP_ARROW)){
    //writeStock(foodS);
    image(happyDog,175,175,150,150)
  }

}

function readStock(data){
  foodS = data.val();
}

function writeStock(x){
  if(x<=0){
    x=0;
  }else{
    x=x-1;
  }
  
  database.ref('/').update({
    Food:x
  })
}
