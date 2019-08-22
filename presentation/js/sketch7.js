// orginial https://editor.p5js.org/Sarah.R/sketches/KEpK8iawC

// Schule für Gestaltung, Basel
// Creative Coding Workshop
// Yann Graf + Roger Aeschbach
// Can be found online here: https://editor.p5js.org/yanngraf/sketches/MrWW2sPlu

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  
  let speedcounter = 0;
  for (var x=3; x < 10; x = x+10) {

    let speed = abs(winMouseX - pwinMouseX);

    fill(color(mouseX+x,mouseY,200));
    ellipse(mouseX+x,mouseY+speedcounter,speed,speed);

    speedcounter += (speed/3);
  }
}