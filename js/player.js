export default class Player {
  constructor() {
    this.startPosX = 202;
    this.startPosY = 400;
    this.x = this.startPosX;
    this.y = this.startPosY;
    this.isWinner = false;
    this.lives = 3;

    this.avatar = "images/char-boy.png";
  }

  update() {
    // console.log(`this is x ${this.x} y ${this.y}`);
  }

  render(ctx) {
    ctx.drawImage(Resources.get(this.avatar), this.x, this.y);
  }

  reset(resetAll) {
    this.x = this.startPosX;
    this.y = this.startPosY;

    if (resetAll) {
      this.lives = 3;
      this.isWinner = false;
    }
  }

  setAvatar(avatarName) {
    console.log(avatarName);
    if (avatarName !== undefined && avatarName !== "") {
      this.avatar = `images/char-${avatarName}.png`;
    }
    console.log(this.avatar);
  }

  handleInput(direction, canvasWidth, canvasHeight) {
    if (direction === "left") {
      if (this.x > 30) {
        this.x -= 100;
      }
    } else if (direction === "right") {
      if (this.x < canvasWidth - 130) {
        this.x += 100;
      }
    } else if (direction === "up") {
      if (this.y >= 60) {
        this.y -= 30;
      } else {
        this.isWinner = true;
      }
    } else if (direction === "down") {
      if (this.y <= canvasHeight - 200) {
        this.y += 30;
      }
    }
  }
}
