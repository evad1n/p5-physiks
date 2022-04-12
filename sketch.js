/* eslint-disable no-undef, no-unused-vars */

function setup() {
  createCanvas(windowWidth, windowHeight);
  // Put setup code here
}

function draw() {
  // Put drawings here
  fill(234, 31, 81);
  noStroke();
  rect(50, 50, 250, 250);
  fill(255);
  textStyle(BOLD);
  textSize(140);
  text("yee", 60, 250);

  const b = new Ball(5, createVector(50, 50), 50, "red");
  b.draw();
}

// This Redraws the Canvas when resized
windowResized = function () {
  resizeCanvas(windowWidth, windowHeight);
};

function drawSpring() {}
