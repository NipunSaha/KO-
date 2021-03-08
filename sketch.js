var bg, bgIMG;
var playerShip, playerShipIMG;
var bullet, bulletIMG;

function preload() {
  bgIMG = loadImage("images/bg5.jpg");
  playerShipIMG = loadImage("images/spaceship_4.png");
  bulletIMG = loadImage("images/bullet.png");
}

function setup() {
  createCanvas(displayWidth, displayHeight - 143);
  bg = createSprite(displayWidth / 2,displayHeight / 2,displayWidth - 50,displayHeight - 100);
  bg.addImage(bgIMG);
  //bg.y = bg.height/2;
  bg.scale = 2;

  bullet = createSprite(10, -11);
  bullet.addImage(bulletIMG);
  bullet.scale = 0.5;

  playerShip = createSprite(displayWidth / 2, displayHeight - 203);
  playerShip.addImage(playerShipIMG);
  playerShip.scale = 0.25;
}

function draw() {
  background(255, 255, 255);

  if (keyDown(LEFT)) {
    playerShip.x = playerShip.x - 6;
  } else if (keyDown(RIGHT)) {
    playerShip.x = playerShip.x + 6;
  }

  bg.velocityY = 2;

  if (bg.y > displayHeight + 300) {
    bg.y = displayHeight / 2;
  }

  if (playerShip.x > 1310) {
    playerShip.x = 1310;
  }
  if (playerShip.x < 58) {
    playerShip.x = 58;
  }

  if ((keyDown(UP_ARROW) || keyDown(32))&& bullet.y < -10) {
    bullet.x = playerShip.x;
    bullet.y = playerShip.y;
    bullet.velocityY = -12;
  }

  drawSprites();
}
