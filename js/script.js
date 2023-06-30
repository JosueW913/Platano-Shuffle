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

      game.weight.element.onmousemove = ((e) => {
        
        if(game.weight.element.style.left === '206px') {
          game.weight.element.style.left = 205 + 'px';
          game.gamePage.style.cursor = "none";
          return;
        }
        
      
        let mousePosition = e.target.getBoundingClientRect();
        console.log(e.clientX)
        game.weight.element.style.left = e.clientX - 700 + 'px';

        game.gamePage.style.cursor = "none";

        
            console.log(game.weight.element.style.left);
      

    })

    let count = 0;
    let intervalId;
    let score = [];
    let sum = 0;
    let tostones = 5;
    const currentScore = document.querySelector("#score span");
    const currentToston = document.querySelector("#tostones span");
    currentToston.innerText = tostones;
    currentScore.innerText = sum;

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
          
          if (count < 1) {
            game.weight.element.style.top = 250 + "px";
            score.push(0);
            currentScore.innerText = Number(currentScore.innerText) + 0;
          } else if (count === 2) {
            game.weight.element.style.top = 165 + "px";
            score.push(1);
            currentScore.innerText = Number(currentScore.innerText) + 1;
          } else if (count === 3) {
            game.weight.element.style.top = 100 + "px";
            score.push(2);
            currentScore.innerText = Number(currentScore.innerText) + 2;
          } else if (count === 4) {
            game.weight.element.style.top = 0 + "px";
            score.push(3);
            currentScore.innerText = Number(currentScore.innerText) + 3;
          } else if (count > 4) {
            game.weight.element.style.top = -75 + "px";
            score.push(4);
            currentScore.innerText = Number(currentScore.innerText) + 0;

            setTimeout(() => {
              alert("OUT OF BOUNDS!");
            }, 1000);
            
          }

          tostones--;
          currentToston.innerText = tostones;
          count = 0;

          setTimeout(() => {
            game.weight.element.style.top = 850 + "px";
          }, 2000);
          if (tostones <= 0) {
            tostones = 5;
            currentToston.innerText = tostones;
          }
          console.log(score);
          // console.log(score.length);
          if (score.length === 5) {
            currentScore.innerText = 0;
            score = [];
            return;
          }
        };
          
        };

        // restartButton.addEventListener("click", function () {
        //   // Call the restartGame function when the button is clicked
        //   restartGame();
        // });
      
        // // The function that reloads the page to start a new game
        // function restartGame() {
        //   location.reload();
        // }

}
  