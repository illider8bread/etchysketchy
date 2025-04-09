/*const screenWidth = window.screen.width;
const sketchPadWidth = screenWidth - 50;*/
/* Testing createElement*/

let gridBy = 16;
document.querySelector("button").addEventListener("click", () => {
    let gridBy = prompt("What do you want the resolution to be? (Please enter one number that will be the dimensions of both x and y", "16");
    gridBy.parseInt();
    return gridBy;
});

function createGrid(gridSize) {
    let totalGrid = gridSize * gridSize;
    let percentWidth = 100/gridSize;
    for (let i = 0; i < totalGrid; i++){
        const containerDiv = document.querySelector(".container");
        const gridDiv = document.createElement("div");
        gridDiv.className = "grid";
        gridDiv.style.minWidth= percentWidth.toString() + "%";
        gridDiv.style.paddingBottom = percentWidth.toString() + "%";
        containerDiv.appendChild(gridDiv);
    }
}

createGrid(gridBy);

    /*for (let i = 0; i < gridSize; i++) {
        const containerDiv = document.querySelector(".container");
        const columnDiv = document.createElement("div");
        columnDiv.className = "column empty";
        containerDiv.appendChild(columnDiv);
    }

    function createDivGrid() {
        const findColumnDiv = document.querySelector("div.column.empty");
        for (let i = 0; i < gridSize; i++) {
            
            const gridDiv = document.createElement("div");
            gridDiv.className = "grid";
            findColumnDiv.appendChild(gridDiv);
        
        }
        createDivGrid();
    }

};*/

