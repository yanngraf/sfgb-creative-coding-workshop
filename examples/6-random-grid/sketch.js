// Schule für Gestaltung, Basel
// Creative Coding Workshop
// Yann Graf + Roger Aeschbach
// Can be found online here: https://editor.p5js.org/yanngraf/sketches/MrWW2sPlu



let wScl = 20;
let hScl = 20;
let c;

function setup() {
  createCanvas(400, 400);
  frameRate(10);
}

function draw() {
  if (mouseX && mouseY) {
    wScl = mouseX;
    hScl = mouseY;
  }
  for (var x = 0; x < width; x += wScl) {
    for (var y = 0; y < height; y += random(3,20)) {
      c = color(random(0,255));
      fill(c);
      rect(x, y, wScl, hScl);
    }
  }
}