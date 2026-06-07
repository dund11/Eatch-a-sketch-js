const container = document.querySelector("#container");
const square = document.createElement("div");

container.appendChild(square);

square.addEventListener("mouseover", function() {
    square.style.backgroundColor = "black";
});

let size = prompt("Enter grid size (max 100):");

for (let i = 0; i < 256; i++) {
    const square = document.createElement("div");
}
