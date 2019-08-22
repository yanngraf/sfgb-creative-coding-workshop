// orginial https://editor.p5js.org/andrea444/sketches/VbuSV7Z-x

// Schule für Gestaltung, Basel
// Creative Coding Workshop
// Yann Graf + Roger Aeschbach
// Example sketch to show text function capacities
// https://editor.p5js.org/yanngraf/sketches/_Tpo8Ilp-

let wScl = 80;
let hScl = 100;
let word = [];
word = ["a","r","t","a","r","t","a","r","t","a","r","t","a","r"];

let counter = 0;
let loop = 0;
let c = 0;
let letterID = 0;

function preload() {
  fontGrenze = loadFont('fonts/Montserrat-Bold.ttf ');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  strokeWeight(0);
  textFont(fontGrenze);
  textAlign(CENTER,CENTER);
  textSize(200);
}

function draw() {
  // draw the columns
  for (var y = 0; y < windowHeight; y += hScl) {
    // draw the ligns
    for (var x = 0; x < windowWidth; x += wScl) {
      // reset the counter if reached the end of the word
      if (counter > (word.length)-1) { 
        counter = 0;
      }
      
      c = color(random(0,255),random(0,255),random(0,255),50);
      fill(c);

      letterID = Math.round(random(0,word.length));

      // if mouse moves, draw a new grid
      if (loop < 1) {
        rect(x, y, wScl, hScl);
        fill(random(0,255),random(0,255),60,random(0,255),70);
        text(word[counter], x+(wScl/2), y+(hScl/2));
      }
      counter++
    }
  }
 loop++;
}

// If the mouse moves, reset loop, do force a new grid
function mouseMoved() {
  loop = 0;
}