const character = {
  /**
   * Memorise the character's current position
   */
  currentPosition: "right",
  /**
   * Get the current character's cell by the "player" class
   * @returns return the current unique class cell
   */
  currentCase: () => {
    const currentCase = document.querySelector(".player");
    return currentCase.classList[1];
  },
  /**
   *  Spawn the character at a random cell on the top of the board
   */
  spawn: () => {
    const randomNumber = Math.floor(Math.random() * (6 - 1) + 1);
    const init = document.querySelector(".cell_" + randomNumber);
    init.className += " player";
  },
  /**
   * Init the current position then move the sprite
   */
  moveRight: () => {
    character.currentPosition = "right";
    const player = document.querySelector(".player");
    player.style.backgroundPositionY = "-136px";
  },
  /**
   * Init the current position then move the sprite
   */
  moveLeft: () => {
    character.currentPosition = "left";
    const player = document.querySelector(".player");
    player.style.backgroundPositionY = "-68px";
  },
  /**
   * Init the current position then move the sprite
   */
  moveUp: () => {
    character.currentPosition = "up";
    const player = document.querySelector(".player");
    player.style.backgroundPositionY = "-204px";
  },
  /**
   * Init the current position then move the sprite
   */
  moveDown: () => {
    character.currentPosition = "down";
    const player = document.querySelector(".player");
    player.style.backgroundPositionY = "0";
  },
  /**
   * Init the current cell then clear the board and move the character
   */
  moveForward: () => {
    // Init current cell
    character.currentCase();
    // Get the current unique class name
    const previousCell = document.querySelector("." + character.currentCase());
    /**
     *  Get the unique cell position
     *  ex:  cell_19
     * @returns 19
     */
    const currentCellPosition = parseInt(
      previousCell?.classList[1].split("_")[1]
    );

    /**
     * Check if character is allowed to move and didnt reached the limit board
     * if true move the character
     * if false error message
     */
    if (board.checkLimitBoard()) {
      let currentCell;
      /**
       * Switch that takes the currentPosition and "right", "left" ...
       * and checkWin and move the character
       */
      switch (character.currentPosition) {
        case "right":
          currentCell = document.querySelector(
            ".cell_" + (currentCellPosition + 1)
          );
          character.clearPreviousCharacter(previousCell);
          currentCell.classList += " player";
          character.moveRight();
          game.checkWin();
          break;
        case "left":
          currentCell = document.querySelector(
            ".cell_" + (currentCellPosition - 1)
          );
          character.clearPreviousCharacter(previousCell);
          currentCell.classList += " player";
          character.moveLeft();
          game.checkWin();
          break;
        case "down":
          currentCell = document.querySelector(
            ".cell_" + (currentCellPosition + 6)
          );
          character.clearPreviousCharacter(previousCell);
          currentCell.classList += " player";
          character.moveDown();
          game.checkWin();
          break;
        case "up":
          currentCell = document.querySelector(
            ".cell_" + (currentCellPosition - 6)
          );
          character.clearPreviousCharacter(previousCell);
          currentCell.classList += " player";
          character.moveUp();
          game.checkWin();
        default:
          break;
      }
    } else {
      const win_text = document.querySelector(".win_text");
      win_text.style.display = "block";
      win_text.textContent = "Unauthorized deplacement";
      const board = document.querySelector(".board");
      setTimeout(() => {
        board.style.border = "none";
        win_text.style.display = "none";
      }, 1000);
      board.style.border = "3px solid red";
    }
  },
  /**
   * Function that clear the player's class on the board
   */
  clearPreviousCharacter: () => {
    const allCase = document.querySelectorAll(".cell");
    for (let i = 0; i < allCase.length; i++) {
      allCase[i].classList.remove("player");
    }
  },
};
