
focus(".container");
//sets default grid width x height to 16
let gridBy = 16;

//creates responsively sized square divs according to desired dimensions
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

//runs initial grid creation
createGrid(gridBy);



//prompts user to change grid dimensions, runs new grid
document.querySelector("button").addEventListener("click", () => {
    function removeGrid(){
            //removes all previously created grid divs 
    const allGridDiv = document.querySelectorAll(".grid");
    allGridDiv.forEach(grid => {grid.remove();});
    }
    removeGrid();
    let gridBy = prompt("What do you want the dimensions to be? (Please enter one number that will be the dimensions of both x and y)", "16");
    gridBy = parseInt(gridBy);
    if (gridBy <= 100 && gridBy > 0){
        //creates new grids
        createGrid(gridBy);
    } else {
        alert("ERROR: The dimensions you chose will not work. Please try a number between 1 and 100");
    }
    
});



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

