var dog,sadDog,happyDog,feed;


function preload(){
  sadDog=loadImage("Images/Dog.png");
  happyDog=loadImage("Images/happy dog.png");
}

function setup() {
  createCanvas(1000,1000);
  
  dog=createSprite(800,200,150,150);
  dog.addImage(sadDog);
  dog.scale=0.15;
  feed=createButton("feed dog")
feed.position(750,500)

feed=createButton("add food")
feed.position(815,500)
}

function draw() {
  background(46,139,87);
  
  drawSprites();
}

feed.Touches( ()=>{
 dog.hide()
  });

//function to read food Stock


//function to update food stock and last fed time


//function to add food in stock
