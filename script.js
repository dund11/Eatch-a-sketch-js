const container = document.querySelector("#container");
const resetButton = document.querySelector("#resetBtn");

function createGrid(size) {
    container.innerHTML = "";
    const squareSize = 640 / size;

    for (let i = 0; i < size * size; i++) {
        const square = document.createElement("div");
        square.classList.add("grid-square");

        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;

        square.addEventListener("mouseover", () => {
        square.style.backgroundColor = "black";
});

        container.appendChild(square);
    }
}

resetButton.addEventListener("click", () => {
    let newSize = prompt("Enter new grid size (max 100):");
    
    if (isNaN(newSize) || newSize <= 0) {
        alert("Please enter a valid number.");
        return;
    }

    if (newSize > 100) newSize = 100;

    createGrid(16);
});


