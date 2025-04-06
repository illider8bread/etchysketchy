/*const screenWidth = window.screen.width;
const sketchPadWidth = screenWidth - 50;*/
/* Testing createElement*/



function createColumnGrid(gridSize) {

    for (let i = 0; i < gridSize; i++) {
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

};

createColumnGrid(16);



/*
function createDivGrid(gridSize) {
    const containerDiv = document.querySelector(".container");

    // Creates column divs equal to the grid size
    for (let i = 0; i < gridSize; i++) {
        const columnDiv = document.createElement("div");
        columnDiv.className = "column";
        containerDiv.appendChild(columnDiv);
        // Creates grid divs equal to grid size in each column div 
        for (let i = 0; i < gridSize; i++){
            const findColumnDiv = document.querySelector(".column");
            const gridDiv = document.createElement("div");
            gridDiv.className = "grid";
            findColumnDiv.appendChild(gridDiv);
        }
    }
}

createDivGrid(16);
*/
