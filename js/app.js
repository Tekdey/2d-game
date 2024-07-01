const app = {
  init: function () {
    board.createBoard();
    board.randomCase();
    character.spawn();
  },
};

document.addEventListener("DOMContentLoaded", app.init);
