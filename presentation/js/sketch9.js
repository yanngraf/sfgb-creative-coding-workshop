// orginial https://editor.p5js.org/nuschki/sketches/29jYWQXP-

// Schule für Gestaltung, Basel (2019)
// Creative Coding Workshop
// Yann Graf + Roger Aeschbach
// Can be found online here: https://editor.p5js.org/yanngraf/sketches/4J-CxSydF

let scl = 20;
let speed = 0.00002;
let noiseVal;
let counter = 0;



function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  
  background("purple");
  noFill(fill);
  stroke("pink");
  strokeWeight(3);
  
  fill(random(0,200))
  ellipse(windowWidth/2,windowHeight/2,300,300)
  
   fill("purple")
  ellipse(windowWidth/2,windowHeight/2,100,100)

  
  for (var x = 0; x < windowWidth; x = x+scl) {

    for(var y = 0; y < windowHeight; y=y+scl){

      noiseVal = noise(x+counter,y);
      noiseVal = map(noiseVal,0,1,0,scl);
      center_x = x+noiseVal;
      center_y = y+noiseVal;

      // Draw 5 lines to the center
      line (x,y,center_x,center_y);
      line (center_x,center_y,x+scl,y);
      line (x,y+scl,center_x,center_y);
      line (center_x,center_y,x+scl,y+scl);

      counter = counter + speed;
    }     
  }
}