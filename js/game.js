class Game {
constructor() {
    this.startPage = document.getElementById("start-page");
    this.gamePage = document.getElementById("game-page");
    this.gameEndScreen = document.getElementById("game-end");
    this.weight = new Weight (this.gamePage, 0, 1075, 170, 170, "./images/Toston.png");
    this.height = 200;
    this.width = 300;
    this.counter = 0;
    this.score = 0;
    this.lives = 3;
    this.gameIsOver = false;

}

start() {
    this.gamePage.style.height = `${this.height}px`;
    this.gamePage.style.width = `${this.width}px`;
    this.startPage.style.display = "none";
    this.startPage.style.height = "0px";
    this.gamePage.style.display = "inherit";
    this.gameLoop()

};

gameLoop() {
            
    if(this.gameIsOver) {
        return;
    }

    

}

update() {

    

}

endGame() {
    console.log("Game Over")

}



}