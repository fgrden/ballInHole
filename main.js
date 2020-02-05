document.addEventListener('DOMContentLoaded', function () {
    document.querySelector("#startGame").addEventListener("click", appStart)
});


function appStart() {
    this.parentElement.style.display = "none";
    const numberOfHoles = document.querySelector("#numberOfHoles").value;
    const svgBoardId = document.querySelector("#board").getAttribute("id");
    drawHoles(numberOfHoles, svgBoardId);
    drawBall(25, svgBoardId);
    startGame();
}

function drawBall(widthBall, svgBoardId) {
    new Ball(widthBall, svgBoardId)
}

function drawHoles(n = 5, svgBoardId) {
    for(let i = 0; i < n; i++) {
        new Hole(svgBoardId)
    }
}

function startGame() {
    new Game();
}

