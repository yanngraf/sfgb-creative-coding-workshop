// orginial https://editor.p5js.org/lucc/sketches/Pz6H-Nfsz

// Schule für Gestaltung, Basel
// Creative Coding Workshop
// Yann Graf + Roger Aeschbach
// Example sketch to show text function capacities
// https://editor.p5js.org/yanngraf/sketches/_Tpo8Ilp-

let wScl = 80;
let hScl = 100;
let word = [];
word = ["h","a","l","l","o","d","u","s","a","u","h","u","n","d"];

let counter = 1;
let loop = 1;
let c = 0;
let letterID = 50;

function preload() {
  fontGrenze = loadFont('fonts/LexendDeca-Regular.ttf');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  strokeWeight(40);
  textFont(fontGrenze);
  textAlign(CENTER,CENTER);
  textSize(150);
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
      
      c = color(random(0,000));
      fill("red");

      letterID = Math.round(random(0,word.length));

      // if mouse moves, draw a new grid
      if (loop < 0.4) {
        rect(x, y, wScl, hScl);
        fill("blue");
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