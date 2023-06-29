class Game {
constructor() {
    this.startPage = document.getElementById("start-page");
    this.gamePage = document.getElementById("game-page");
    this.gameEndScreen = document.getElementById("game-end");
    this.weight = new Weight (this.gamePage, 0, 850, 120, 120, "./images/Toston.png");
    this.height = 97;
    this.width = 300;
    this.counter = 0;
    this.score = 0;
    this.lives = 5;
    this.gameIsOver = false;

}

start() {
    this.gamePage.style.height = `${this.height}vh`;
    this.gamePage.style.width = `${this.width}px`;
    this.startPage.style.display = "none";
    this.startPage.style.height = "0px";
    this.gamePage.style.display = "inherit";
    this.gamePage.style.position = "relative"
    this.gameLoop()

};

gameLoop() {
            
    if(this.gameIsOver) {
        return;
    }

    

}

update() {

    this.weight.move();

}

endGame() {
    console.log("Game Over")

}



}