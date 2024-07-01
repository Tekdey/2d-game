const game = {
  /**
   * Check if win or not, if win player has reached the "green case"
   */
  checkWin: () => {
    const player = document.querySelector(".player");
    const win_text = document.querySelector(".win_text");
    const board = document.querySelector(".board");
    if (player.classList.contains("win")) {
      win_text.style.display = "block";
      win_text.textContent = "Win ! :)";
      board.style.border = "3px solid green";
    } else {
      win_text.style.display = "none";
      board.style.border = "none";
    }
  },
  /**
   * Reload the page for reset game, eventListener on html
   */
  reset: () => {
    window.location.reload();
  },
};
