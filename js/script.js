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
    let score = [];

    console.log(intervalId);
    game.gamePage.onmousedown = (e) => {
          console.log("hi");
    
          intervalId = setInterval(() => {
            count = count + 1;
            console.log(count);
          }, 1000);
          

          
        };
    
        game.gamePage.onmouseup = (e) => {
          
          clearInterval(intervalId);
          console.log(intervalId);
          console.log("stopped");
          

          if(count < 1) {
            game.weight.element.style.top = 250 + 'px';
            score.push(0);
          
          } else if(count > 1 && count < 2) {
            game.weight.element.style.top = 100 + 'px';
            score.push(1);
          } else if(count > 2 && count < 3) {
            game.weight.element.style.top = 100 + 'px';
            score.push(2);
          } else if(count > 3 && count < 4) {
            game.weight.element.style.top = 100 + 'px';
            score.push(3);
          } else if(count > 4) {
            game.weight.element.style.top = 0 + 'px';
            score.push(4);
          }
          console.log(score)
          setTimeout(() => {
            game.weight.element.style.top = 850 + "px";
            count = 0;

        
          }, 2000)
          
        };

    }
  };
  