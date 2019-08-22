// orginial https://editor.p5js.org/andrea444/sketches/BfB_yASUa

// Schule für Gestaltung, Basel (2019)
// Creative Coding Workshop
// Yann Graf + Roger Aeschbach
// Can be found online here: https://editor.p5js.org/yanngraf/sketches/4J-CxSydF

let scl = 100;
let speed = 2.00005;
let noiseVal;
let counter = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  
  background(0,0,);
  noFill(fill);
  stroke(255);
  strokeWeight(6);
  
  for (var x = 0; x < windowWidth; x = x+scl) {

    for(var y = 0; y < windowHeight; y=y+scl){

      noiseVal = noise(x+counter,y);
      noiseVal = map(noiseVal,0,1,0,scl);
      center_x = x+noiseVal;
      center_y = y+noiseVal;

      // Draw 5 lines to the center
      line (x,y,center_x,center_y);
      stroke (random(0,255));
      line (center_x,center_y,x+scl,y);
      stroke (random(0,255),random(0,255),random(0,255));
      line (x,y+scl,center_x,center_y);
      line (center_x,center_y,x+scl,y+scl);

      counter = counter + speed;
    }     
  }
}