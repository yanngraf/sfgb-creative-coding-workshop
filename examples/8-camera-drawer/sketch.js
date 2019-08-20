// Schule für Gestaltung, Basel
// Creative Coding Workshop
// Yann Graf + Roger Aeschbach
// Can be found online here: https://editor.p5js.org/yanngraf/sketches/IUZ4EjoMn

// initialize the invisible spot
var x_point = 0
var y_point = 0
var sensibility = 20;

function setup() {
  // define the position of the invisible spot
  x_point = random(0,400);
  y_point = random(0,400);

  frameRate(100);
  createCanvas(400, 400);
  background(255,255,255);
  fill(0);
  noStroke();
}

function draw() {

  // Draw the pointer
  ellipse (mouseX,mouseY,5);
  
  // If the mouse is at the right place => Make a photo
  if (mouseX > x_point && mouseX < (x_point+sensibility) && mouseY > y_point && mouseY < (y_point+sensibility)) {
    
    // Save the image
    save('myCanvas.jpg');
    // Stop the loop (so that it doesn't keep saving new images.
    background("green");
    noLoop();	
  }
  
}