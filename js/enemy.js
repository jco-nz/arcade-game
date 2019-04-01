export default class Enemy {
  constructor(initialPosX, initialPosY, minSpeed, maxSpeed) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    this.initialPosX = initialPosX;
    this.initialPosY = initialPosY;
    this.minSpeed = minSpeed;
    this.maxSpeed = maxSpeed;

    this.x = initialPosX;
    this.y = initialPosY;
    this.setSpeed();

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = "images/enemy-bug.png";
  }

  setSpeed() {
    this.speed = Math.floor(
      Math.random() * (this.minSpeed - this.maxSpeed + 1) + this.minSpeed
    );
  }

  // Update the enemy's position, required method for game
  // Parameter: dt, a time delta between ticks
  update(dt, canvasWidth) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.

    if (this.x <= canvasWidth - 30) {
      this.x += dt * this.speed;
      this.setSpeed();
    } else {
      this.x = 0;
      this.setSpeed();
    }
  }

  // Draw the enemy on the screen, required method for game
  render(ctx) {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
  }

  reset() {
    this.x = this.initialPosX;
    this.y = this.initialPosY;
  }
}
