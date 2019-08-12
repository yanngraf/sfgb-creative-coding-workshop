let scl = 115;
let noiseVal;
let counter = 0;
let initializeFrame = 0;
let colorSet = {};
colorSet = ["white","#f4e11b","#1378b3","black"];
let newColorSet = [];
newColorSet[0] = [];
let row ;
let column;

function setup() {
  createCanvas(800, 800);
  background(255);
  noFill();
  noStroke();
}

function draw() {
  column = 1;
  
  for (var x = 0; x < height; x = x+scl) {
    
    if (initializeFrame == 0) {
      newColorSet[column] = [] ;
    }
    row = 1;
    
    for(var y = 0; y < width; y=y+scl){

      if (initializeFrame == 0) {

        newColorSet[column][row] = [] ;

        let newarr = shuffle(colorSet);
        colorSet = newarr;
        newColorSet[column][row] = colorSet;
      }

      noiseVal = noise(x+counter,y);
      noiseVal = map(noiseVal,0,1,0,scl);

      center_x = x+noiseVal;
      center_y = y+noiseVal;

      print (newColorSet);
      fill(getColor(column,row,0));
      triangle(x,y,center_x,center_y,x,y+scl);

      fill(getColor(column,row,1));
      triangle(x,y,center_x,center_y,x+scl,y);

      fill(getColor(column,row,2));
      triangle(x,y+scl,center_x,center_y,x+scl,y+scl);

      fill(getColor(column,row,3));
      triangle(x+scl,y,center_x,center_y,x+scl,y+scl);

      counter = counter + 0.0005;
      row++;
    }
   column++;
  }

  if (initializeFrame == 0) {
    initializeFrame = 1;
  }
}


function keyPressed() {
  initializeFrame = 0;
}


function getColor (column, row,id) {
  if (newColorSet[column] == null) {
    newColorSet[column] = [];
  }
  if (newColorSet[column][row] == null) {
    newColorSet[column][row] = shuffle(colorSet)
  }
  return newColorSet[column][row][id];
}

function mouseMoved() {
  //shuffleArray(colorSet);
  scl = map(mouseX,0,300,10,100);
}


function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
  }
}