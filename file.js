for (let i = 0; i < 256; i++) {
    const div = document.createElement("div");
}

div.addEventListener("mouseover", function() {
    div.style.backgroundColor = "black";
});

let size = prompt("Enter grid size (max 100):");