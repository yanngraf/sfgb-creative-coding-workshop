// orginial https://editor.p5js.org/JulEhr/sketches/9N3PvgSTh

// Schule für Gestaltung, Basel
// Creative Coding Workshop
// Yann Graf + Roger Aeschbach
// Can be found online here: https://editor.p5js.org/yanngraf/sketches/MrWW2sPlu


let wScl = 5;
let hScl = 5;
let c;

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(10);
}

function draw() {
  if (mouseX && mouseY) {
    wScl = mouseX;
    hScl = mouseY;
  }
  for (var x = 0; x < windowWidth; x += wScl) {
    for (var y = 0; y < windowHeight; y += random(3,20)) {
      c = color(random(0,255),random(0,255),random(0,255));
      fill(c);
      ellipse(x, y, wScl, hScl);
    }
  }
}