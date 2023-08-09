/*
Title: Stars By Kandinsky
By: Nishka Narang
Class: Creative Coding
Date: July 2023
Assignment 5: Sound


Click and hold with the mouse to draw new random stars and create music!

Your voice controls the size of the creature's mouth.

Hover over the big black eye or press 'b' to ~ENTER SPACE~! Press any key to exit space.

CAREFUL! Pressing 'c' will clear all of your stars :(
*/

//choose the mode for drawing new random stars
//newStarsMode = "random";
newStarsMode = "pen";

/* COLORS */
const w = "#FFFAED";   //(255, 250, 237)
const blu = "#3974A8"; //(57, 116, 168)
const g = "#91C2A8";   //(145, 194, 168)
const r = "#D96C84";   //(217, 108, 132)
const y = "#F5E82C";   //(245, 232, 44)
const bla = "#171717"; //(23, 23, 23)
let colors = [w, blu, g, r, y]

/* 103 CIRCLES */
let circles = [
  //x and y coord of position,
  //width of circle, color
  //big black circle
  { id: 0, x: 217, y: 207, w: 117, c: w },
  { id: 1, x: 217, y: 207, w: 108, c: g },
  { id: 2, x: 217, y: 207, w: 100, c: bla },
  //small black circle
  { id: 3, x: 169, y: 292, w: 45, c: g },
  { id: 4, x: 169, y: 292, w: 40, c: y },
  { id: 5, x: 169, y: 292, w: 32, c: r },
  { id: 6, x: 169, y: 292, w: 27, c: bla },
  //top section
  { id: 7, x: 84, y: 74, w: 7, c: y },
  { id: 8, x: 109, y: 89, w: 25, c: w },
  { id: 9, x: 130, y: 110, w: 10, c: w },
  { id: 10, x: 147, y: 154, w: 7, c: g },
  { id: 11, x: 163, y: 153, w: 7, c: y },
  //top middle section
  { id: 12, x: 207, y: 108, w: 7, c: y },
  { id: 13, x: 212, y: 131, w: 10, c: w },
  { id: 14, x: 240, y: 133, w: 12, c: y },
  { id: 15, x: 275, y: 120, w: 10, c: r },
  { id: 16, x: 245, y: 118, w: 7, c: w },
  { id: 17, x: 257, y: 128, w: 7, c: g },
  { id: 18, x: 259, y: 142, w: 7, c: w },
  //
  { id: 19, x: 282, y: 151, w: 20, c: y },
  { id: 20, x: 282, y: 151, w: 15, c: r },
  { id: 21, x: 282, y: 151, w: 10, c: w },
  { id: 22, x: 281, y: 150, w: 7, c: g },
  //
  { id: 23, x: 301, y: 160, w: 7, c: y },
  { id: 24, x: 297, y: 180, w: 7, c: y },
  { id: 25, x: 285, y: 184, w: 7, c: g },
  { id: 26, x: 293, y: 196, w: 7, c: w },
  //top right section
  { id: 27, x: 309, y: 91, w: 7, c: w },
  { id: 28, x: 313, y: 54, w: 7, c: g },
  { id: 29, x: 319, y: 73, w: 7, c: g },
  { id: 30, x: 329, y: 62, w: 7, c: r },
  //top left section
  { id: 31, x: 45, y: 187, w: 15, c: r },
  { id: 32, x: 45, y: 187, w: 10, c: w },
  { id: 33, x: 46, y: 186, w: 7, c: g },
  { id: 34, x: 62, y: 208, w: 15, c: w },
  { id: 35, x: 99, y: 208, w: 12, c: y },
  { id: 36, x: 99, y: 208, w: 7, c: blu },
  { id: 37, x: 59, y: 171, w: 7, c: g },
  { id: 38, x: 46, y: 204, w: 7, c: g },
  //
  { id: 39, x: 147, y: 214, w: 5, c: y },
  { id: 40, x: 155, y: 234, w: 7, c: g },
  //middle section
  { id: 41, x: 158, y: 257, w: 15, c: w },
  { id: 42, x: 157, y: 256, w: 9, c: g },
  { id: 43, x: 102, y: 289, w: 7, c: w },
  { id: 44, x: 113, y: 257, w: 7, c: w },
  { id: 45, x: 105, y: 268, w: 7, c: w },
  { id: 46, x: 102, y: 289, w: 5, c: blu },
  { id: 47, x: 140, y: 311, w: 7, c: w },
  { id: 48, x: 190, y: 317, w: 10, c: w },
  { id: 49, x: 190, y: 317, w: 7, c: blu },
  { id: 50, x: 152, y: 337, w: 10, c: w },
  { id: 51, x: 152, y: 337, w: 7, c: blu },
  { id: 52, x: 152, y: 337, w: 4, c: w },
  { id: 53, x: 170, y: 349, w: 10, c: w },
  //bottom right section
  { id: 54, x: 265, y: 298, w: 25, c: r },
  { id: 55, x: 265, y: 298, w: 18, c: w },
  { id: 56, x: 265, y: 298, w: 12, c: y },
  { id: 57, x: 265, y: 297, w: 10, c: g },
  //
  { id: 58, x: 286, y: 295, w: 5, c: y },
  { id: 59, x: 273, y: 277, w: 5, c: y },
  { id: 60, x: 269, y: 269, w: 5, c: w },
  { id: 61, x: 236, y: 275, w: 5, c: y },
  { id: 62, x: 231, y: 297, w: 7, c: w },
  { id: 63, x: 221, y: 275, w: 5, c: r },
  { id: 64, x: 249, y: 271, w: 5, c: w },
  { id: 65, x: 201, y: 279, w: 5, c: y },
  //
  { id: 66, x: 218, y: 324, w: 15, c: w },
  { id: 67, x: 218, y: 324, w: 12, c: blu },
  { id: 68, x: 218, y: 324, w: 7, c: w },
  { id: 69, x: 218, y: 324, w: 4, c: r },
  //
  { id: 70, x: 218, y: 352, w: 10, c: w },
  { id: 71, x: 218, y: 352, w: 5, c: blu },
  { id: 72, x: 221, y: 376, w: 7, c: g },
  { id: 73, x: 197, y: 374, w: 7, c: w },
  { id: 74, x: 258, y: 362, w: 7, c: r },
  //
  { id: 75, x: 251, y: 326, w: 10, c: w },
  { id: 76, x: 284, y: 326, w: 7, c: w },
  { id: 77, x: 284, y: 326, w: 4, c: r },
  { id: 78, x: 340, y: 411, w: 7, c: w },
  { id: 79, x: 340, y: 411, w: 4, c: r },
  //bottom left section
  { id: 80, x: 157, y: 367, w: 18, c: y },
  { id: 81, x: 157, y: 367, w: 8, c: blu },
  { id: 82, x: 157, y: 367, w: 5, c: w },
  //
  { id: 83, x: 166, y: 404, w: 20, c: r },
  { id: 84, x: 166, y: 404, w: 17, c: w },
  { id: 85, x: 166, y: 403, w: 9, c: g },
  //
  { id: 86, x: 190, y: 427, w: 12, c: w },
  { id: 87, x: 190, y: 427, w: 10, c: blu },
  { id: 88, x: 190, y: 427, w: 5, c: w },
  //
  { id: 89, x: 204, y: 432, w: 10, c: w },
  { id: 90, x: 204, y: 432, w: 8, c: r },
  { id: 91, x: 204, y: 432, w: 5, c: w },
  //
  { id: 92, x: 178, y: 417, w: 5, c: y },
  { id: 93, x: 168, y: 424, w: 5, c: w },
  { id: 94, x: 194, y: 413, w: 5, c: w },
  //circles within eye
  //big green circle
  { id: 95, x: 224, y: 190, w: 35, c: g },
  { id: 96, x: 224, y: 190, w: 20, c: r },
  { id: 97, x: 224, y: 190, w: 15, c: w },
  { id: 98, x: 224, y: 190, w: 10, c: y },
  { id: 99, x: 224, y: 190, w: 7, c: w },
  //blue white circle
  { id: 100, x: 197, y: 221, w: 15, c: w },
  { id: 101, x: 197, y: 221, w: 7, c: blu },
  //green white circle
  { id: 102, x: 232, y: 222, w: 15, c: w },
  { id: 103, x: 231, y: 221, w: 10, c: g }
]

/* BEZIER SHAPES */
var wiggle = 0.1;
var speed = 0.2;
function drawBody(){
    noStroke();
  
    //blue body
    fill(blu);
    beginShape();
    vertex(101, 122);
    //upper middle point
    bezierVertex(16, 73, 129, 11, 148, 106);
    bezierVertex(152, 143, 177, 161, 200, 118);
    //thin middle
    bezierVertex(203, 65, 216, 103, 214, 108);
    bezierVertex(218, 132, 232, 136, 234, 117);
    //small
    bezierVertex(235, 111, 239, 108, 259, 107);
    bezierVertex(305, 96, 315, 77, 297, 48);
    //upper right point
    bezierVertex(293, 9, 369, 49, 335, 96);
    bezierVertex(278, 141, 333, 132, 295, 235);
    //right side point
    bezierVertex(286, 305, 309, 324, 321, 338);
    //lower right point
    bezierVertex(376, 384, 318, 509, 324, 410);
    bezierVertex(325, 346, 234, 326, 282, 379);
    //lower middle points
    bezierVertex(307, 421, 283, 415, 276, 405);
    bezierVertex(242, 339, 220, 362, 244, 389);
    bezierVertex(281, 419, 235, 435, 228, 403);
    bezierVertex(222, 374, 178, 401, 214, 421);
    //lower left point
    bezierVertex(234, 440, 160, 509, 126, 359);
    bezierVertex(129, 291, 71, 320, 93, 280);
    //side left points
    bezierVertex(57, 281, 113, 260, 72, 232);
    //upper left point
    bezierVertex(-25, 200, 65, 99, 69, 184);
    //upper two points
    bezierVertex(79, 217, 104, 191, 89, 187);
    bezierVertex(76, 188, 82, 156, 99, 177);
    bezierVertex(110, 182, 103, 167, 95, 168);
    bezierVertex(82, 154, 92, 136, 111, 156);
    bezierVertex(125, 179, 169, 159, 101, 122);
    endShape();
    
    //white nose
    fill(w);
    beginShape();
    vertex(114, 190);
    bezierVertex(154, 163, 137, 210, 138, 205);
    bezierVertex(139, 201, 134, 216, 141, 235);
    bezierVertex(149, 253, 148, 273, 124, 246);
    bezierVertex(110, 234, 105, 195, 117, 189);
    endShape();
    
    //white legs
    fill(w);
    beginShape();
    vertex(298, 339);
    bezierVertex(333, 358, 344, 405, 329, 412);
    bezierVertex(329, 388, 328, 377, 298, 339);
    endShape();
    beginShape();
    vertex(275, 383);
    bezierVertex(273, 385, 285, 384, 286, 401);
    bezierVertex(276, 403, 279, 398, 275, 383);
    endShape();
    beginShape();
    vertex(236, 396);
    bezierVertex(234, 399, 256, 402, 247, 410);
    bezierVertex(240, 410, 234, 399, 236, 396);
    endShape();
}
function drawGreen(){
    noStroke();
    fill(g);
    beginShape();
    vertex(116, 107);
    bezierVertex(163, 88, 88, 122, 84, 123);
    bezierVertex(56+wiggle/2, 129, 25-wiggle, 24-wiggle, 128-wiggle/2, 34);
    bezierVertex(142, 58, 159, 110, 167, 133);
    bezierVertex(132, 142, 165, 130, 116, 117);
    endShape();
}
function drawRed(){
    noStroke();
    wiggle += speed;
    if (wiggle > 15){
        speed *= -1;
    }
    if (wiggle < -10){
        speed *= -1;
    }
    fill(r);
    beginShape();
    vertex(303, 137);
    bezierVertex(308, 116+wiggle, 314+wiggle, 141-wiggle, 349, 128);
    bezierVertex(331, 171+wiggle, 362+wiggle, 150-wiggle, 329, 222);
    bezierVertex(310, 258+wiggle, 324+wiggle, 280-wiggle, 334, 291);
    bezierVertex(304, 288+wiggle, 308+wiggle, 305-wiggle, 245, 284);
    endShape();
}   
function drawYellow(){
    noStroke();
    fill(y);
    arc(173, 360, 153+wiggle/2, 240, radians(75-wiggle), radians(190+wiggle*2));
}

/* NEW STARS INFORMATION */
let newStars = [
  //the data for each new random star is appended to this array so that they can be redrawn later in the program.
  //circles within eye
  //big green circle
  {x: 224, y: 190, w: 35, c: g, ax: 224, ay: 190 },
  {x: 224, y: 190, w: 20, c: r, ax: 224, ay: 190 },
  {x: 224, y: 190, w: 15, c: w, ax: 224, ay: 190 },
  {x: 224, y: 190, w: 10, c: y, ax: 224, ay: 190 },
  {x: 224, y: 190, w: 7, c: w, ax: 224, ay: 190 },
  //blue white circle
  {x: 197, y: 221, w: 15, c: w, ax: 197, ay: 221 },
  {x: 197, y: 221, w: 7, c: blu, ax: 197, ay: 221 },
  //green white circle
  {x: 232, y: 222, w: 15, c: w, ax: 232, ay: 222 },
  {x: 231, y: 221, w: 10, c: g, ax: 231, ay: 221 } 
]
var createNewStars = false;
function redrawNewStars(){
  noStroke();
  newStars.forEach(i => {
    fill(i.c);
    ellipse(i.x, i.y, i.w);
  });
}
function newStarsMovement(){
  newStars.forEach(i => {
    // Calculate the distance between the mouse and the circle
    var mouseDistance = dist(mouseX, mouseY, i.x, i.y);

    //distance between circle and anchor point
    var anchorDistance = dist(i.ax, i.ay, i.x, i.y);
    
    //mouse location relative to anchor
    var mouseAnchorPos = dist(mouseX, mouseY, i.ax, i.ay);

    //closer distance means more movement
    movement = 10/mouseDistance;

    //if close enough, move away from mouse
    if (mouseAnchorPos < i.w*3){
      if (mouseX < i.x) i.x += movement;
      else              i.x -= movement;
      if (mouseY < i.y) i.y += movement;
      else              i.y -= movement;
    }
  
    //if too far away, move back to anchor
    else if (mouseAnchorPos > i.w*3){
      if (i.x > i.ax)   i.x -= movement;
      else              i.x += movement;
      if (i.y > i.ay)   i.y -= movement;
      else              i.y += movement;
    }
    // update circles
    noStroke();
    fill(i.c);
    ellipse(i.x, i.y, i.w);
  });
}

/* USER INPUT */
//MOUSE:
function mousePressed(){
  createNewStars = true;
  drawCursor(w);
}
function mouseReleased() {
  createNewStars = false;
  drawCursor(bla);
}
function drawCursor(c){
  noFill();
  stroke(c);
  strokeWeight(2);
  ellipse(mouseX, mouseY, 10, 10);
}
//KEYBOARD:
var inputKey;
function keyPressed(){
  inputKey = key;
}
//MICROPHONE:
let mic;

/* SOUND */
let monoSynth;
let notes = ['C3', 'D3', 'E3', 'F3', 'G3', 'A4', 'B4','C4', 'D4', 'E4', 'F4', 'G4', 'A5', 'B5', 'C5']
function playSynth() {
  userStartAudio();

  let note = map(mouseY, 0, height, 0, notes.length);
  // note velocity (volume, from 0 to 1)
  let velocity = map(mouseX, 0, width, 0, 1);
  // time from now (in seconds)
  let time = 0;
  // note duration (in seconds)
  let dur = 1 / 6;

  monoSynth.play(notes[round(note)], velocity, time, dur);
}

/* SET UP */
function setup() {
  createCanvas(400, 500);
  background(w);
  noCursor();
  
  //bezier curves
  drawGreen();
  drawRed();
  drawYellow();
  drawBody();
  
  //draw circles
  circles.forEach(i => {
    fill(i.c);
    ellipse(i.x, i.y, i.w);
  });
  
  //audio/sound
  mic = new p5.AudioIn();
  mic.start();
  monoSynth = new p5.MonoSynth();
}

function draw(){
  //if hover over eye or 'b' is pressed, turn black
  distance = dist(mouseX, mouseY, circles[2].x, circles[2].y)
  if ((distance < circles[2].w / 2 ) || inputKey == 'b'){
    background(bla);
    redrawNewStars();
    drawCursor(w);
  } else {
    background(w);
    //bezier curves
    drawGreen();
    drawRed();
    drawYellow();
    drawBody();
    
    //draw circles
    circles.forEach(i => {
      fill(i.c);
      ellipse(i.x, i.y, i.w);
    });
    redrawNewStars();
    drawCursor(bla);
  }
  
  //if input key is c, clear the new stars
  if (inputKey == 'c'){
    clear();
    background(w);
    noCursor();
  
    //bezier curves
    drawGreen();
    drawRed();
    drawYellow();
    drawBody();
  
    //draw circles
    circles.forEach(i => {
      fill(i.c);
      ellipse(i.x, i.y, i.w);
    });
    newStars = [
      //the data for each new random star is appended to this array so that they can be redrawn later in the program.
      //circles within eye
      //big green circle
      {x: 224, y: 190, w: 35, c: g, ax: 224, ay: 190 },
      {x: 224, y: 190, w: 20, c: r, ax: 224, ay: 190 },
      {x: 224, y: 190, w: 15, c: w, ax: 224, ay: 190 },
      {x: 224, y: 190, w: 10, c: y, ax: 224, ay: 190 },
      {x: 224, y: 190, w: 7, c: w, ax: 224, ay: 190 },
      //blue white circle
      {x: 197, y: 221, w: 15, c: w, ax: 197, ay: 221 },
      {x: 197, y: 221, w: 7, c: blu, ax: 197, ay: 221 },
      //green white circle
      {x: 232, y: 222, w: 15, c: w, ax: 232, ay: 222 },
      {x: 231, y: 221, w: 10, c: g, ax: 231, ay: 221 } 
    ]
    inputKey = 'a';
  }
  
  //creating random circles on click/hold
  if (createNewStars){
    if (newStarsMode == "random"){
      posX = random(0, width);
      posY = random(0, height);
    } else {
      posX = random(mouseX-25, mouseX+25);
      posY = random(mouseY-25, mouseY+25);
    }
    radius = random(2, 10);
    fill(col = random(colors));
    ellipse(posX, posY, radius);
    newStars.push({x: posX, y: posY, w: radius, c: col, ax: posX, ay: posY});
    playSynth();
  }
  
  //moving mouth with microphone
  let vol = mic.getLevel(); //between 0.0 and 1.0
  let s = 2.7 * map(vol, 0, 1, 10, 500);
  noStroke();
  fill(g);
  ellipse(169, 292, s + 18);
  fill(y);
  ellipse(169, 292, s + 13);
  fill(r);
  ellipse(169, 292, s + 5);
  fill(bla);
  ellipse(169, 292, s);
  
  newStarsMovement();
}
