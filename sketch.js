var h, fd, c = 0, d

function preload(){
  h = loadImage("happy.jpg")
  fd = loadImage("father's day.jpg")
  d = loadImage("dad.jpg")
}
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(255)
  if(c === 0){
    textSize(15)
    textStyle(ITALIC);
    text("Keep clicking the mouse to view", 85, 185);
  }
  if(c === 1 ){
    image(h,100,100, 200, 200)
  }
  if(c === 2 ){
    image(fd,100,100,200,200)
  }
  if(c === 3){
    image(d,100,100,200,200)
  }
  if(c === 4){
    textSize(15)
    textStyle(ITALIC);
    text("Happy Father's Day Dad", 10,100);
    text("I want you to know that you are the best dad in the world", 10,115);
    text("and I want to thank you for everything you have done for", 10, 130);
    text("me! You are the best dad in the world and I will never", 10, 145);
    text("stop loving you!", 10 , 160);
  }
}  
function mousePressed(){
  c = c + 1
}