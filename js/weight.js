class Weight {

    constructor(gamePage, left, top, width, height, imgSrc) {

        this.gamePage = gamePage;
        this.left = left;
        this.top = top;
        this.width = width;
        this.height = height;
        this.directionX = 0;
        this.directionY = 0;
        this.element = document.createElement("img");
        this.element.src = imgSrc;
        this.element.style.position = "absolute";
        this.element.style.width = `${width}px`;
        this.element.style.height = `${height}px`;
        this.element.style.left = `${left}px`;
        this.element.style.top = `${top}px`;
        this.gamePage.appendChild(this.element);
    }

    move () {
        this.left += this.directionX;
        this.top += this.directionY;

        // if (this.left > this.gamePage.offsetWidth - this.width) {
        //     this.left = this.gamePage.offsetWidth - this.width;
        //     }


        this.updatePosition();

    }

    updatePosition() {
        this.element.style.left = `${this.left}px`;
        this.element.style.top = `${this.top}px`;
    }

}