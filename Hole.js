class Hole {
    constructor(svgBoardId) {
        this.svgBoard = document.getElementById(`${svgBoardId}`);
        this.ball = document.getElementById("ball");
        this.holeWidth = 40;
        this.x = this.generXHolePos();
        this.y = this.generYHolePos();
        this.hole = this.createHole();
    }

    createHole() {
        const hole = document.createElementNS("http://www.w3.org/2000/svg", "circle")

        hole.setAttribute("cx", this.x);
        hole.setAttribute("cy", this.y);
        hole.setAttribute("r", this.holeWidth);
        hole.setAttribute("class", "hole");



        document.querySelector("#board").appendChild(hole);

        return hole
    }

    generXHolePos() {
        let x = Math.floor(Math.random() * this.svgBoard.clientWidth - this.holeWidth);
        x < this.holeWidth ? x = this.holeWidth : "";
        return x;
    }

    generYHolePos() {
        let y = Math.floor(Math.random() * this.svgBoard.clientHeight - this.holeWidth);
        y < this.holeWidth ? y = this.holeWidth : "";
        return y;
    }
}