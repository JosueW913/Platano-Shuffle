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

      game.gamePage.onmousemove = ((e) => {
        let mousePosition = e.target.getBoundingClientRect();
        console.log(e.clientX)
        game.weight.element.style.left = e.clientX - 600 + 'px';

        game.gamePage.style.cursor = "none";

        if (game.weight.element.style.left >= game.gamePage.style.width) {
          game.weight.element.style.left = 0 + "px";
        }

        console.log(game.weight.element.style.left);
      

    })

    let count = 0;
    let intervalId;

    game.gamePage.onmousedown = (e) => {
          console.log("hi");
    
          intervalId = setInterval(() => {
            count = count + 1;
            console.log(count);
          }, 1000);
          console.log(intervalId);
        };
    
        game.gamePage.onmouseup = (e) => {
          console.log(intervalId);
          clearInterval(intervalId);
          console.log("stopped");
          count = 0;
          game.weight.element.style.top = 0 + "px";
        };

    }
  };
  