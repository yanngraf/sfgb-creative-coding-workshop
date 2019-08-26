// orginial https://editor.p5js.org/Nana/sketches/4HrrKyeeuC

// Schule für Gestaltung, Basel (2019)
// Creative Coding Workshop
// Yann Graf + Roger Aeschbach
// Can be found online here: https://editor.p5js.org/yanngraf/sketches/4J-CxSydF

let scl = 50;
let speed = 0.0005;
let noiseVal;
let counter = 0;


function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  
  background;
  noFill(fill);
  stroke(255);
  strokeWeight(1);
  
  for (var x = 0; x < windowWidth; x = x+scl) {

    for(var y = 0; y < windowHeight; y=y+scl){

      noiseVal = noise(x+counter,y);
      noiseVal = map(noiseVal,0,1,0,scl);
      center_x = x+noiseVal;
      center_y = y+noiseVal;

      // Draw 5 lines to the center
      stroke (random(50,255),random(50,255),random(50,255));
      line (x,y,center_x,center_y);
      line (center_x,center_y,x+scl,y);
      line (x,y+scl,center_x,center_y);
      line (center_x,center_y,x+scl,y+scl);

      counter = counter + speed;
    }     
  }
}