import Player from "./player.js";
import Enemy from "./enemy.js";

export const apps = (function() {
  const canvasWidth = 505;
  const canvasHeight = 606;
  const minSpeed = 180;
  const maxSpeed = 220;

  // Now instantiate your objects.
  // Place all enemy objects in an array called allEnemies
  // Place the player object in a variable called player
  const allEnemies = [
    new Enemy(0, 62, minSpeed, maxSpeed),
    new Enemy(202, 145, minSpeed, maxSpeed),
    new Enemy(101, 230, minSpeed, maxSpeed)
  ];

  const player = new Player();

  let isGameOver = false;

  // This listens for key presses and sends the keys to your
  // Player.handleInput() method. You don't need to modify this.
  document.addEventListener("keyup", function(e) {
    var allowedKeys = {
      37: "left",
      38: "up",
      39: "right",
      40: "down"
    };

    player.handleInput(allowedKeys[e.keyCode], canvasWidth, canvasHeight);
  });

  return {
    canvasWidth: canvasWidth,
    canvasHeight: canvasHeight,
    allEnemies: allEnemies,
    player: player
  };
})();

export default apps;
