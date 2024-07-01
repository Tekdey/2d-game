const boardElement = document.querySelector(".board");
const board = {
  /**
   * Create board 4x6
   */
  createBoard: () => {
    // Create 4 div row with an unique classname
    for (let i = 1; i < 5; i++) {
      boardElement.innerHTML += `
          <div class="row row${i}">
              
          </div>
          `;
    }
    // row 1
    // Create 6 div cell with an unique classname and insert in the unique row
    const row = document.querySelector(".row1");
    for (let i = 1; i < 7; i++) {
      row.innerHTML += `
            <div class="cell cell_${i}"></div>
      `;
    }
    // row 2
    const row2 = document.querySelector(".row2");
    for (let i = 7; i < 13; i++) {
      row2.innerHTML += `
            <div class="cell cell_${i}"></div>
      `;
    }
    // row 3
    const row3 = document.querySelector(".row3");
    for (let i = 13; i < 19; i++) {
      row3.innerHTML += `
            <div class="cell cell_${i}"></div>
      `;
    }
    // row 4
    const row4 = document.querySelector(".row4");
    for (let i = 19; i < 25; i++) {
      row4.innerHTML += `
            <div class="cell cell_${i}"></div>
      `;
    }
  },
  /**
   * Generate a random win case on the last row
   */
  randomCase: () => {
    const randomNumber = Math.floor(Math.random() * (24 - 19) + 19);
    document.querySelector(".cell_" + randomNumber).classList.add("win");
  },
  /**
   * That function checks if the player try to move outside the board
   *
   * @returns if he tried return false else return true
   */
  checkLimitBoard: () => {
    const currentCell = document.querySelector("." + character.currentCase());
    // Top board
    if (
      currentCell.parentElement.classList.contains("row1") &&
      character.currentPosition === "up"
    ) {
      return false;
    }
    // Bottom board
    if (
      currentCell.parentElement.classList.contains("row4") &&
      character.currentPosition === "down"
    ) {
      return false;
    }
    // Left board
    if (
      (currentCell.classList.contains("cell_1") &&
        character.currentPosition === "left") ||
      (currentCell.classList.contains("cell_7") &&
        character.currentPosition === "left") ||
      (currentCell.classList.contains("cell_13") &&
        character.currentPosition === "left") ||
      (currentCell.classList.contains("cell_19") &&
        character.currentPosition === "left")
    ) {
      return false;
    }
    // Right board
    if (
      (currentCell.classList.contains("cell_6") &&
        character.currentPosition === "right") ||
      (currentCell.classList.contains("cell_12") &&
        character.currentPosition === "right") ||
      (currentCell.classList.contains("cell_18") &&
        character.currentPosition === "right") ||
      (currentCell.classList.contains("cell_24") &&
        character.currentPosition === "right")
    ) {
      return false;
    }
    return true;
  },
};
