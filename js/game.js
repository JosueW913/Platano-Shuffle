class Game {
constructor() {
    this.startPage = document.getElementById("start-page");
    this.gamePage = document.getElementById("game-page");
    this.gameEndScreen = document.getElementById("game-end");
    this.weight = new Weight (this.gamePage, 200, 500, 100, 150, "./images/Toston.png");
    this.height = "600px";
    this.width = "500px";
    this.counter = 0;
    this.score = 0;
    this.lives = 3;
    this.gameIsOver = false;

}

start() {
    this.gamePage.style.height = this.height;
    this.gamePage.style.width = this.width;
    this.startPage.style.display = "none";
    this.startPage.style.height = "0px";
    this.gamePage.style.display = "block";
    this.gameLoop()

};

gameLoop() {
            
    if(this.gameIsOver) {
        return;
    }

}

}