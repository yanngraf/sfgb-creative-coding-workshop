// Orignial sketch https://editor.p5js.org/schweizer.knecht/sketches/YmVhoS85k

// Schule für Gestaltung, Basel (2019)
// Creative Coding Workshop
// Yann Graf + Roger Aeschbach
// Can be found online here: https://editor.p5js.org/yanngraf/sketches/4J-CxSydF

let scl = 30;
let speed = 0.0001;
let noiseVal;
let counter = 0;


function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  
  background(0, 150, 190);
  noFill(fill);
  stroke(255);
  strokeWeight(2);
  
  for (var x = 0; x < windowWidth; x = x+scl) {

    for(var y = 0; y < windowHeight; y=y+scl){

      noiseVal = noise(x+counter,y);
      noiseVal = map(noiseVal,0,1,0,scl);
      center_x = x+noiseVal;
      center_y = y+noiseVal;

      // Draw 5 lines to the center
      line (200,200,center_x,center_y);
      line (center_x,center_y,x+scl,y);
      line (200,200+scl,center_x,center_y);
      line (center_x,center_y,x+scl,y+scl);

      counter = counter + speed;
    }     
  }
}