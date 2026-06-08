const container = document.querySelector("#container");

function createGrid(size) {
    container.innerHTML = "";

    const squareSize = 640 / size;

    for (let i = 0; i < size * size; i++) {
        const square = document.createElement("div");
        square.style.width = squareSize + "px";
        square.style.height = squareSize + "px";
        square.style.float = "left";
        square.style.border = "1px solid #ccc";
        container.appendChild(square);
}

createGrid(16);

square.addEventListener("mouseover", function() {
    square.style.backgroundColor = "black";
});

let size = prompt("Enter grid size (max 100):");

for (let i = 0; i < 256; i++) {
    const square = document.createElement("div");
    container.appendChild(square);
}

