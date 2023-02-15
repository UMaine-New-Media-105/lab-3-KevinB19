function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES)
}

function draw() {
  background('lightpink');
  shape()
  
}

function shape(){
  if(mouseIsPressed){
    rotate((mouseX/mouseY)/2)
  }
  ellipse(175,150,100)
  rect(140,120,20)
  rect(190,120,20)
  rect(155,165,40,10)
  if(mouseX/mouseY % 5 == 0){
    fill(mouseX / 5, mouseY / 5, 100);
  } else if (mouseX/mouseY % 3 == 0){
    fill(mouseX / 3, mouseY / 3, 100);
  } else if (mouseX/mouseY % 2 == 0){
    fill(mouseX / 2, mouseY / 2, 100);
  }else {
    fill(mouseX, mouseY, 100)
  }
  
  
}
