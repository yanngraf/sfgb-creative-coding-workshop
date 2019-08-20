// Copyright (c) 2018 ml5
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

// adapted by
// Schule für Gestaltung, Basel
// Creative Coding Workshop
// Yann Graf + Roger Aeschbach
// Can be found online here: https://editor.p5js.org/yanngraf/sketches/AaAvrTrOA
// More emojis => https://editor.p5js.org/YanlinMa/sketches/SJafwAOn

// Pitch variables
let pitch;
let audioContext;
let audioStream;
let currentNote = '';

function setup() {
  createCanvas(windowWidth, windowHeight);
  audioContext = getAudioContext();
  mic = new p5.AudioIn();
  mic.start(startPitch);
}

function draw() {
  noStroke();
}

function startPitch() {
  pitch = ml5.pitchDetection('./model/', audioContext , mic.stream, modelLoaded);
}

function modelLoaded() {
  select('#status').html('Model Loaded');
  getPitch();
}

function getPitch() {
  pitch.getPitch(function(err, frequency) {

    // if a fre
    if (frequency) {
      let midiNum = freqToMidi(frequency);
      currentNote = scale[midiNum % 12];

      // for testing, to display the value of the frequency
      select('#status').html("frequency: " + frequency); 
      

      var roundFrequency = Math.round(frequency);
      fill(map(roundFrequency,80,300,0,255),50,50);
      ellipse(mouseX, mouseY,20);
    }
    getPitch();
  })
}
