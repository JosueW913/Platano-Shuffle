class Weight {

    constructor(gamePage, left, top, width, height, imgSrc) {

        this.gamePage = gamePage;
        this.left = left;
        this.top = top;
        this.width = width;
        this.height = height;
        this.directionX = 0;
        this.element = document.createElement("img");
        this.element.src = imgSrc;
        this.element.style.position = "absolute";
        this.element.style.width = `17vw`;
        this.element.style.height = `17vw`;
        this.element.style.left = `${left}px`;
        this.element.style.top = `${top}px`;
        this.gamePage.appendChild(this.element);
    }

    move () {
        this.left += this.directionX;


        this.updatePosition();

    }

    updatePosition() {
        this.element.style.left = `${this.left}px`;
        this.element.style.top = `${this.top}px`;
    }

}