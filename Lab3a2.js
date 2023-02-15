function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
}

function draw() {
  background("lightpink");
  shape(mouseX, mouseY);
}

function shape(v1, v2) {
  if (mouseIsPressed) {
    rotate(v1 / v2 / 2);
  }
  ellipse(175, 150, 100);
  rect(140, 120, 20);
  rect(190, 120, 20);
  rect(155, 165, 40, 10);
  if ((v1 / v2) % 5 == 0) {
    fill(v1 / 5, v2 / 5, 100);
  } else if ((v1 / v2) % 3 == 0) {
    fill(v1 / 3, v2 / 3, 100);
  } else if ((v1 / v2) % 2 == 0) {
    fill(v1 / 2, v2 / 2, 100);
  } else {
    fill(v1, v2, 100);
  }
}
