const container = document.querySelector("#container");

function createGrid(size) {
    container.innerHTML = "";
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

