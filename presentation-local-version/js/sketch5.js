// orginial https://editor.p5js.org/rablie/sketches/SDNhZ6q8y

let brush = 100;
let nbBrush = 6;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background("#fafafa");
}

function draw() {
  
  for (var x=brush; x <= (brush*nbBrush); x = x+brush) {
    fill("yellow");
    if(mouseX) {
      ellipse(mouseX+x,mouseY,brush,brush);
    }
  }
}