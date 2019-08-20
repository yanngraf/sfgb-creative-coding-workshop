// Schule für Gestaltung, Basel
// Creative Coding Workshop
// Yann Graf + Roger Aeschbach
// Can be found online here: https://editor.p5js.org/yanngraf/sketches/MrWW2sPlu

function setup() {
  createCanvas(800, 800);
}

function draw() {
  
  let speedcounter = 0;
  for (var x=10; x < 200; x = x+20) {

    let speed = abs(winMouseX - pwinMouseX);

    fill(color(mouseX+x,mouseY,0));
    ellipse(mouseX+x,mouseY+speedcounter,speed,speed);

    speedcounter += (speed/3);
  }
}