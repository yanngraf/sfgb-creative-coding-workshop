let rounding = 1;
let direction = 1;
let scl = 115;

let noiseVal;
let counter = 0;

let initializeFrame = 0;
let colorSet = {};
colorSet = ["white","#f4e11b","#1378b3","black"];
let colorSetOrder = [0,1,2,3];


function setup() {
  createCanvas(800, 800);
}



function draw() {
  
  background(0);
  noFill(fill);
  stroke(255);
  //strokeWeight(2);
  noStroke();
  
  
  
  for (var x = 0; x < height; x = x+scl) {


  

        for(var y = 0; y < width; y=y+scl){

         
                //console.log(colorSet);
                if (initializeFrame == 0) {

      
                  print(colorSet);
                  let newarr = shuffle(colorSet);
  
                  print(newarr);

                  colorSet = newarr;
                  //console.log(colorSet);
                  //console.log(y);
                }

          noiseVal = noise(x+counter,y);
          noiseVal = map(noiseVal,0,1,0,scl);
 
          center_x = x+noiseVal;
          center_y = y+noiseVal;
  
          fill(colorSet[0]);
          triangle(x,y,center_x,center_y,x,y+scl);

          fill(colorSet[1]);
          triangle(x,y,center_x,center_y,x+scl,y);

          fill(colorSet[2]);
          triangle(x,y+scl,center_x,center_y,x+scl,y+scl);


          fill(colorSet[3]);
          triangle(x+scl,y,center_x,center_y,x+scl,y+scl);

          // line (x,y,center_x,center_y);
          // line (center_x,center_y,x+scl,y);
          // line (x,y+scl,center_x,center_y);
          // line (center_x,center_y,x+scl,y+scl);

          counter = counter + 0.0005;
        

                

         
        }   
        
        initializeFrame = 1;

  }

  
}

function mouseMoved() {
  //shuffleArray(colorSet);
  scl = map(mouseX,0,300,10,100);
}

/**
 * Randomize array element order in-place.
 * Using Durstenfeld shuffle algorithm.
 */
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
  }
}