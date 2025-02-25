window.onload = function () {
  const startButton = document.getElementById('start-button');
  const restartButton = document.getElementById('restart-button');
  let game;

  restartButton.addEventListener('click', function restartGame() {
    location.reload();
  });

  startButton.addEventListener('click', function () {
    startGame();
  });

  function startGame() {
    console.log('start game');
    game = new Game();
    game.start();
  }

  window.addEventListener('keydown', (event) => {
    const possibleKeys = ['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown'];
    // Check if the pressed key is in the possibleKeystrokes array
    if (possibleKeys.includes(event.key)) {
      event.preventDefault();
      // Update player's directionX and directionY based on the key pressed
      switch (event.key) {
        case 'ArrowLeft':
          game.player.directionX = -1;
          break;
        case 'ArrowRight':
          game.player.directionX = 1;
          break;
        case 'ArrowUp':
          game.player.directionY = -1;
          break;
        case 'ArrowDown':
          game.player.directionY = 1;
          break;
      }
    }
  });

  /*   window.addEventListener('keyup', (event) => {
    const possibleKeys = ['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown'];
    if (possibleKeys.includes(event.key)) {
      event.preventDefault();

      switch (event.key) {
        case 'ArrowLeft':
        case 'ArrowRight':
          game.player.directionX = 0;
          break;
        case 'ArrowUp':
        case 'ArrowDown':
          game.player.directionY = 0;
          break;
      }
    }
  }); */
};