/*
Basic Specs:
-create 16*16 grid by default.
-if user gives another dimensions : update grid.
-color cells over hovering.
*/

function createGrid(){

    let cellsPerRow = 16;
    let cellsPerColumn = 16;
    let totalCells = cellsPerColumn*cellsPerRow;

    for(let i = 0; i<totalCells; i++){
        let cell = document.createElement("div");

        // removed 1.6px due to left and right borders of 0.8px
        cell.style.width = `${(600/16)-1.6}px`;
        cell.style.height = `${(600/16)-1.6}px`;           
        cell.style.border = "1px solid black";

        const container = document.querySelector("#container");
        container.appendChild(cell);
    }

}

createGrid();
