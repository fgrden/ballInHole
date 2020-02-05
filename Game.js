class Game {
    constructor() {
        this.startDate = new Date();
        this.activeHoleClass = "active";
        this.ball = document.querySelector("#ball");
        this.chooseRandomBall();
        window.addEventListener('deviceorientation', this.hideHoleIfBallIn);
    }

    chooseRandomBall() {
        const holes = document.querySelectorAll(".hole");
        if(!holes[0]) {
            this.finishGame();
        }
        holes[holes.length - 1].classList.add(this.activeHoleClass)
        console.log(holes)
        console.log(holes.length)
    }

    hideHoleIfBallIn = () => {
        const ballXPos = this.ball.getAttribute("cx") * 1;
        const ballYPos = this.ball.getAttribute("cy") * 1;
        const holes = document.querySelectorAll(".hole");

        holes.forEach(hole => {
            if(hole.classList.contains(this.activeHoleClass)) {
                const holeXPos = hole.getAttribute("cx")  * 1;
                const holeYPos = hole.getAttribute("cy") * 1;

                if( ballXPos > holeXPos - 15 &&
                    ballXPos < holeXPos + 15 &&
                    ballYPos > holeYPos - 15 &&
                    ballYPos < holeYPos + 15) {
                    hole.remove();
                    this.chooseRandomBall()
                }
            }
        })
    }

   finishGame() {
        let timeToFinishGame = new Date() - this.startDate;
            timeToFinishGame = timeToFinishGame * 0.001;
        alert(`Winner! Your time is ${timeToFinishGame.toFixed(2)} s`)
   }
}


