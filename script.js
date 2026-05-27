/*
Basic Specs:
-create 16*16 grid by default.
-if user gives another dimensions : update grid.
-color cells over hovering.
*/

function createGrid() {

    let cellsPerRow = 16;
    let cellsPerColumn = 16;
    let totalCells = cellsPerColumn * cellsPerRow;

    for (let i = 0; i < totalCells; i++) {
        let cell = document.createElement("div");
        cell.classList.add("cell");

        // removed 1.6px due to left and right borders of 0.8px
        cell.style.width = `${(600 / 16) - 1.6}px`;
        cell.style.height = `${(600 / 16) - 1.6}px`;
        cell.style.border = "1px solid black";

        const container = document.querySelector("#container");
        container.appendChild(cell);
    }
}

createGrid();

function listener() {
    let container = document.querySelector("#container");
    container.addEventListener('mouseover', function (event) {
        if(event.target.classList.contains('cell')){
            event.target.style.backgroundColor = "red";
        }
    });
}

listener();

let input = document.querySelector("#input");
input.addEventListener("click", () => {
    let userInput = +prompt("Enter a number between 1 and 100", 1);
    if(userInput > 100 || userInput < 1){
        alert("Please enter a valid input");
    }
    else{
        updateGrid(userInput);
    }
});