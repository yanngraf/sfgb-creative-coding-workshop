// orginial https://editor.p5js.org/zoewal/sketches/fuJ90yEZQ

// Schule für Gestaltung, Basel
// Creative Coding Workshop
// Yann Graf + Roger Aeschbach
// Can be found online here: https://editor.p5js.org/yanngraf/sketches/MrWW2sPlu


let wScl = 10;
let hScl = 125;
let c;

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(16);
}

function draw() {
  if (mouseX && mouseY) {
    wScl = mouseX;
    hScl = mouseY;
  }
  for (var x = 0; x < windowWidth; x += wScl) {
    for (var y = 0; y < windowHeight; y += random(3,20)) {
      c = color(random(10,255), random(50,90), random(135,200));
      fill(c);
      ellipse(x, y, wScl, hScl);
    } 
  }
}