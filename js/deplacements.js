/**
 * Keyboard movements
 * @param {string} return keys event on click
 */
const keydown = (e) => {
  switch (e.key) {
    case "z":
      character.moveUp();
      break;
    case "s":
      character.moveDown();
      break;
    case "q":
      character.moveLeft();
      break;
    case "d":
      character.moveRight();
      break;
    case "e":
      character.moveForward();
      break;

    default:
      break;
  }
};

window.addEventListener("keyup", keydown);
