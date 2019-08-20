// Copyright (c) 2018 ml5
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

// adapted by
// Schule für Gestaltung, Basel
// Creative Coding Workshop
// Yann Graf + Roger Aeschbach
// Can be found online here: https://editor.p5js.org/yanngraf/sketches/AaAvrTrOA
// More emojis => https://editor.p5js.org/YanlinMa/sketches/SJafwAOn

let video;
let poseNet;
let poses = [];

function setup() {
  createCanvas(640, 480);
  video = createCapture(VIDEO);
  video.size(width, height);

  // Create a new poseNet method with a single detection
  poseNet = ml5.poseNet(video, modelReady);
  // This sets up an event that fills the global variable "poses"
  // with an array every time new poses are detected
  poseNet.on('pose', function(results) {
    poses = results;
  });
  // Hide the video element, and just show the canvas
  video.hide();
}

function modelReady() {
  select('#status').html('Model Loaded');
}

function draw() {
  background(0);
  drawSkeleton();
  drawEmoijFace();
}


function drawEmoijFace() {
  // Loop through all the poses detected
  var counter = 0;
  noFill();

  for (let i = 0; i < poses.length; i++) {
    // For each pose detected, loop through all the keypoints
    let pose = poses[i].pose;
    for (let j = 0; j < pose.keypoints.length; j++) {
      
      // A keypoint is an object describing a body part (like rightArm or leftShoulder)
      let keypoint = pose.keypoints[j];


      // Only draw an ellipse is the pose probability is bigger than 0.2
      // And the keypoint is the "nose"
      if (keypoint.score > 0.2 && keypoint.part === "nose") {    

        xface = keypoint.position.x;
        yface = keypoint.position.y;

        //3
        fill(255,204,0);
        noStroke();
        ellipse(xface+25,yface+25,50,50);
        //eyes
        fill(26,13,0);
        ellipse(xface+13,yface+20,20,15);
        ellipse(xface+37,yface+20,20,15);
        stroke(26,13,0);
        line(xface+13,yface+20,xface+37,yface+20);
        line(xface+48,yface+20,xface+38,yface+25);
        line(xface+2,yface+20,xface+10,yface+25);
        fill(255,255,255);
        noStroke();
        ellipse(xface+7,yface+17,4,4);
        ellipse(xface+33,yface+17,4,4);
        //mouth
        noFill();
        stroke(204,102,0);
        strokeWeight(2);
        arc(xface+25, yface+30, 30, 22,0,QUARTER_PI*2);
      }
    }
  }
}



// A function to draw the skeletons
function drawSkeleton() {
  // Loop through all the skeletons detected
  for (let i = 0; i < poses.length; i++) {
    let skeleton = poses[i].skeleton;
    // For every skeleton, loop through all body connections
    for (let j = 0; j < skeleton.length; j++) {
      let partA = skeleton[j][0];
      let partB = skeleton[j][1];
      stroke(255, 0, 0);
      line(partA.position.x, partA.position.y, partB.position.x, partB.position.y);
    }
  }
}