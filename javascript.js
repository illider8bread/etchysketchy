/*const screenWidth = window.screen.width;
const sketchPadWidth = screenWidth - 50;*/
/* Testing createElement*/



function createGrid(gridSize) {
    let totalGrid = gridSize * gridSize;
    console.log(totalGrid);
    let percentWidth = 100/gridSize;
    console.log(percentWidth);
    for (let i = 0; i < totalGrid; i++){
        const containerDiv = document.querySelector(".container");
        const gridDiv = document.createElement("div");
        gridDiv.className = "grid";
        gridDiv.style.minWidth= percentWidth.toString() + "%";
        console.log(gridDiv.style.width);
        gridDiv.style.paddingBottom = percentWidth.toString() + "%";
        console.log(gridDiv.style.paddingBottom);
        containerDiv.appendChild(gridDiv);
        console.log("Round: ${i}");
    }
}

createGrid(16);

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

