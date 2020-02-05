class Ball {
    constructor(widthBall, svgBoardId) {
        this.width = widthBall;
        this.startPos = {
            x: widthBall,
            y: widthBall
        }
        this.ball = this.createBall();
        this.svgBoard = document.getElementById(`${svgBoardId}`);
        this.maxX = this.svgBoard.clientWidth - this.ball.clientWidth;
        this.maxY = this.svgBoard.clientHeight - this.ball.clientHeight;
        window.addEventListener('deviceorientation', this.setPositionBall);
    }

    createBall() {
        const ball = document.createElementNS("http://www.w3.org/2000/svg", "circle")

        ball.setAttribute("fill", "red")
        ball.setAttribute("cx", this.startPos.x)
        ball.setAttribute("cy", this.startPos.y)
        ball.setAttribute("r", this.width)
        ball.setAttribute("id", "ball")

        document.querySelector("#board").appendChild(ball)

        return ball
    }

    setPositionBall = (e) => {
        let x = e.gamma;
        let y = e.beta;
        if (x >  90) { x =  90}
        if (y < -90) { y = 90}
        if (y > 90) { y = -90}
        x += 90;
        y += 90;


        let xPos = this.maxX * x / 180;
        let yPos = this.maxY * y / 180;
        this.ball.setAttribute("cx", `${xPos}`)
        this.ball.setAttribute("cy", `${yPos}`)
    }

}