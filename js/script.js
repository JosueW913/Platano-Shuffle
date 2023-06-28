window.onload = function () {
    const startButton = document.getElementById("start-button");
    const restartButton = document.getElementById("restart-button");
  
    startButton.addEventListener("click", function () {
        console.log("Hitting Start Button")
      startGame();
    });

    function startGame() {
      let game = new Game()
      game.start()
      console.log("start game");

      document.onmousemove = ((e) => {
        console.log(e.mouse)
        if(e.mouse)
        game.weight.directionX += 1;
      
  
    })

    }
  };
  