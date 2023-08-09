//main variables
var screen;
var pColor;

var gameSpd;
var collide;
var score;

//object and obstacle variables
var treesOffset;

var tImg;
var treeX, treeY;

var iImg;
var iceX, iceY;

var rImg;
var rocksX, rocksY;

var wImg;
var waffleX, waffleY;

var cwImg;
var cWaffleX, cWaffleY;

//player variables
var pImgR, pImgB, pImgG;
var playerX, playerY, playerSpd;


//loads images
function preload() {
  pImgR = loadImage('images/skierRed.png');
  pImgB = loadImage('images/skierBlue (1).png');
  pImgG = loadImage('images/skierGreen.png');
  tImg = loadImage('images/tree.png');
  iImg = loadImage('images/ice.png');
  rImg = loadImage('images/rocks.png');
  wImg = loadImage('images/waffle.png');
  cwImg = loadImage('images/waffleChoco.png');
  wwImg = loadImage('images/waffleWorker.png');
}

//assigns values to all variables
function setup() {
  createCanvas(500, 500);
  screen = 0;
  pColor = 0;
  resetGame();
}

//resets game screen (used with try again button)
function resetGame() {
  noStroke();

  gameSpd = 2;
  collide = false;
  score = 0;

  treesOffset = 0;

  treeX = random(50, width - 50);
  treeY = random(-height, 0);

  iceX = random(100, width - 100);
  iceY = random(-height, 0);

  rocksX = random(100, width - 100);
  rocksY = random(-height, 0);

  waffleX = random(100, width - 100);
  waffleY = random(-height, 0);

  cWaffleX = random(100, width - 100);
  cWaffleY = random(-height, 0);

  playerX = 50;
  playerY = height - 100;
  playerSpd = 5;
}

//"setting" of game + movement of trees
function setting() {
  //groomed snow
  fill(214, 214, 214);
  for (var x = 0; x < width; x += 5) {
    rect(x, 0, 1, height);
  }

  //trees
  fill(36, 105, 58);
  for (var y = 0; y < height + 100; y += 45) {
    triangle(0, y - 75 + treesOffset, 0, y + treesOffset, 30, y + treesOffset);
    triangle(width, y - 100 + treesOffset, width, y - 25 + treesOffset, width - 30, y - 25 + treesOffset);
  }

  gameSpd = constrain(gameSpd, 1, 50);
  treesOffset += gameSpd;
  if (treesOffset > 45) {
    treesOffset = 0;
  }
}

//the setting for the end screen (screen = 3)
function settingEnd() {
  //groomed snow
  fill(250);
  rect(0, 300, width, 200);
  fill(214, 214, 214);
  for (var x = 0; x < width; x += 5) {
    rect(x, 300, 1, height);
  }

  //trees
  fill(36, 105, 58);
  for (var y = 350; y < height + 100; y += 45) {
    triangle(0, y - 75 + treesOffset, 0, y + treesOffset, 30, y + treesOffset);
    triangle(width, y - 100 + treesOffset, width, y - 25 + treesOffset, width - 30, y - 25 + treesOffset);
  }

  //ski rack
  rectMode(CENTER);
  fill(196, 196, 196);
  rect(150, 136, 183, 94);

  fill(255, 82, 128);
  rect(68, 139, 4, 93, 40);
  rect(75, 144, 4, 93, 40);

  fill(255, 0, 0);
  rect(91, 147, 19, 86, 40);

  fill(25, 176, 75);
  rect(118, 143, 4, 93, 40);
  rect(123, 140, 4, 93, 40);

  fill(29, 26, 176);
  rect(131, 155, 4, 67, 40);
  rect(137, 153, 4, 67, 40);

  fill(250, 102, 10);
  rect(145, 154, 4, 67, 40);
  rect(151, 154, 4, 67, 40);

  fill(182, 235, 35);
  rect(205, 146, 19, 86, 40);

  fill(98, 174, 224);
  rect(182, 153, 19, 86, 40);

  fill(66, 0, 71);
  rect(228, 149, 19, 86, 40);


  //waffle stand
  fill(122, 56, 6);
  rect(400, 100, 160, 130);
  fill(252, 198, 171);
  rect(400, 100, 100, 60);
  fill(184, 184, 184);
  rect(400, 39, 170 / 3, 150 / 3);
  image(cwImg, 372, 14, 170 / 3, 150 / 3);
  image(wwImg, 390, 75, 220 / 4, 240 / 4);
  image(wImg, 370, 83, 170 / 5, 150 / 5);
  fill(122, 56, 6);
  rect(400, 140, 160, 51);
  fill(112, 101, 93);
  rect(400, 119, 150, 8);
  rectMode(CORNER);

}

//player color, location, and movement
function player() {
  //player color choice
  if (pColor == 0) {
    pImg = pImgR;
  } else if (pColor == 1) {
    pImg = pImgB;
  } else if (pColor == 2) {
    pImg = pImgG;
  }

  //draw player
  image(pImg, playerX, playerY, 220 / 4, 370 / 4);
  playerX = constrain(playerX, 50, width - 100);
  playerY = constrain(playerY, 50, height - 75);

  //player movement through arrow keys
  if (keyIsPressed && keyCode == 37) {
    playerX = playerX + -playerSpd;
  }
  if (keyIsPressed && keyCode == 38) {
    playerY = playerY + -playerSpd;
  }
  if (keyIsPressed && keyCode == 39) {
    playerX = playerX + playerSpd;
  }
  if (keyIsPressed && keyCode == 40) {
    playerY = playerY + playerSpd;
  }
}

//tree obstacle movement and randomness
function tree() {
  image(tImg, treeX, treeY - 100, 270 / 4, 390 / 4);
  treeY = moveObj(treeY);
  if (treeY == 0) {
    treeX = random(50, width - 50);
    treeY = random(-height, 0);
  }
}

//ice obstacle movement and randomness
function ice() {
  image(iImg, iceX, iceY - 100, 250 / 3, 240 / 3)
  iceY = moveObj(iceY);
  if (iceY == 0) {
    iceX = random(50, width - 100);
    iceY = random(-height, 0);
  }
}

//rocks  obstacle movement and randomness
function rocks() {
  image(rImg, rocksX, rocksY - 100, 210 / 3, 120 / 3)
  rocksY = moveObj(iceY);
  if (rocksY == 0) {
    rocksX = random(50, width - 100);
    rocksY = random(-height, 0);
  }
}

//waffle object movement and randomness
function waffle() {
  image(wImg, waffleX, waffleY - 100, 170 / 3, 150 / 3)
  waffleY = moveObj(waffleY);
  if (waffleY == 0) {
    waffleX = random(50, width - 100);
    waffleY = random(-height, 0);
  }
}

//chocolate waffle object movement and randomness
function cWaffle() {
  image(cwImg, cWaffleX, cWaffleY - 100, 170 / 3, 150 / 3)
  cWaffleY = moveObj(cWaffleY);
  if (cWaffleY == 0) {
    cWaffleX = random(50, width - 100);
    cWaffleY = random(-height, 0);
  }
}

//all object and obstacle movement
function moveObj(objY) {
  objY += gameSpd;
  if (objY > height + 100) {
    objY = 0;
  }
  return objY;
}

//title screen
function drawTitle() {
  background(250);
  setting();
  gameSpd = 2;
  textFont("cursive");
  fill(214, 124, 34);
  textSize(50);
  text("waffle slopes", 84, 65);
  fill(138, 69, 0);
  textSize(15);
  text("by Nishka Narang, Jan 2021", 40, height - 15);
  textSize(25);
  text("use the arrow keys\nto collect waffles !", 70, 110);
  textSize(25);
  text("\n- choco waffles are worth extra\n- ice speeds you up\n- and rocks slow you down\n- but trees are dangerous\n\ncollect 20 waffle points to win !!", 60, 160);


  //play button
  if (320 < mouseX && mouseX < 420 && 95 < mouseY && mouseY < 145) {
    fill(184, 98, 13);
    if (mouseIsPressed) {
      screen = 1;
      resetGame();
    }
  } else {
    fill(217, 144, 72);
  }
  rect(320, 95, 100, 50, 15);
  fill(255);
  textSize(30);
  text("PLAY", 335, 130);

  //player color choice buttons
  image(pImgR, 125, 370, 55, 90);
  image(pImgB, 225, 370, 55, 90);
  image(pImgG, 325, 370, 55, 90);
  stroke(167, 130, 232);
  strokeWeight(2);
  fill(255, 0);

  if (pColor == 0) {
    rect(125, 370, 55, 90, 10);
  } else if (pColor == 1) {
    rect(225, 370, 55, 90, 10);
  } else if (pColor == 2) {
    rect(325, 370, 55, 90, 10);
  }

  //red
  if (125 < mouseX && mouseX < 180 && 370 < mouseY && mouseY < 460) {
    stroke(54, 21, 112);
    rect(125, 370, 55, 90, 10);
    if (mouseIsPressed) {
      pColor = 0;
    }
  }
  //blue
  if (225 < mouseX && mouseX < 280 && 370 < mouseY && mouseY < 460) {
    stroke(54, 21, 112);
    rect(225, 370, 55, 90, 10);
    if (mouseIsPressed) {
      pColor = 1;
    }
  }
  //green
  if (325 < mouseX && mouseX < 380 && 370 < mouseY && mouseY < 460) {
    stroke(54, 21, 112);
    rect(325, 370, 55, 90, 10);
    if (mouseIsPressed) {
      pColor = 2;
    }
  }

  noStroke();
}

//game screen
function drawGame() {
  //i used special functions for my collisions. check index.html for more info !
  var iceCollide = false;
  var rocksCollide = false;
  var waffleCollide = false;
  var cWaffleCollide = false;

  background(250);
  setting();
  ice();
  rocks();
  tree();
  waffle();
  cWaffle();
  player();

  //tree collision = game over
  if (collideRectRect(playerX, playerY, 220 / 4 - 10, 370 / 4 - 10, treeX, treeY - 100, 270 / 4 - 10, 390 / 4 - 10)) {
    print("game over");
    screen = 2;
    textFont("cursive");
    textSize(35);
    fill(255, 0, 0);
    text("game over! \nyou got " + score + " waffle points.", 35, 65);
  }

  //ice collision = speed up
  if (collideRectRect(playerX, playerY, 220 / 4 - 10, 370 / 4 - 10, iceX, iceY - 100, 250 / 3 - 10, 240 / 3 - 10)) {
    iceCollide = true;
  }

  //rocks collision = slow down
  if (collideRectRect(playerX, playerY, 220 / 4 - 10, 370 / 4 - 10, rocksX, rocksY - 100, 210 / 3 - 10, 120 / 3 - 10)) {
    rocksCollide = true;
  }

  //waffle collision = gain 1 point
  if (collideRectRect(playerX, playerY, 220 / 4 - 10, 370 / 4 - 10, waffleX, waffleY - 100, 170 / 3 - 10, 150 / 3 - 10)) {
    waffleCollide = true;
  }

  //chocolate waffle collision = gain 3 points
  if (collideRectRect(playerX, playerY, 220 / 4 - 10, 370 / 4 - 10, cWaffleX, cWaffleY - 100, 170 / 3 - 10, 150 / 3 - 10)) {
    cWaffleCollide = true;
  }

  //makes sure that when player is colliding with an obstacle, it only does the output (ex: speed or points) once instead of continuously
  if (collide) {
    if (!iceCollide && !rocksCollide && !waffleCollide && !cWaffleCollide) {
      collide = false;
    }
  } else {
    if (iceCollide) {
      print("slip");
      gameSpd += 2;
      collide = true;
    }
    if (rocksCollide) {
      print("stumble");
      gameSpd -= 2;
      collide = true;
    }
    if (waffleCollide) {
      print("mmm");
      score += 1;
      waffleY = random(-height, 0)
      collide = true;
    }
    if (cWaffleCollide) {
      print("MMM");
      score += 3;
      cWaffleY = random(-height, 0)
      collide = true;
    }
  }

  //score text
  textFont("cursive");
  textSize(25);
  fill(0);
  text("waffles: " + score, 35, 25);

  //winning score
  if (score >= 20) {
    screen = 3;
    print("you made it!");
    resetGame();
  }
}

function drawGameStop() {
  //restart button
  if (45 < mouseX && mouseX < 170 && 135 < mouseY && mouseY < 185) {
    fill(115, 21, 5);
    if (mouseIsPressed) {
      screen = 0;
    }
  } else {
    fill(186, 42, 17);
  }
  rect(45, 135, 125, 50, 15);
  fill(255);
  textSize(25);
  text("try again", 55, 165);
}

//end screen
function drawEnd() {
  background(250);
  settingEnd();
  player();
  textFont("cursive");
  textSize(25);
  fill(235, 0, 0);
  text("you made it!", 35, 65);

  if (playerY > 200) {
    playerY = playerY + -playerSpd;
  } else {}

  //replay button
  if (190 < mouseX && mouseX < 295 && 35 < mouseY && mouseY < 75) {
    fill(115, 21, 5);
    if (mouseIsPressed) {
      screen = 0;
    }
  } else {
    fill(186, 42, 17);
  }
  rect(190, 35, 105, 40, 15);
  fill(255);
  textSize(20);
  text("play again", 197, 61);
}

//draw loop to change screens
function draw() {
  if (screen == 0) {
    drawTitle();
  } else if (screen == 1) {
    drawGame();
  } else if (screen == 2) {
    drawGameStop();
  } else if (screen == 3) {
    drawEnd();
  }
}