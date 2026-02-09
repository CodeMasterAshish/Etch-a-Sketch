const grid = document.getElementById("grid");
const clearBtn = document.getElementById("clear");
const resizeBtn = document.getElementById("resize");

let gridSize = 16;

createGrid(gridSize);

function createGrid(size) {
  grid.innerHTML = "";
  grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  for (let i = 0; i < size * size; i++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");

    cell.addEventListener("mouseover", () => {
      cell.style.backgroundColor = "white";
    });

    grid.appendChild(cell);
  }
}

clearBtn.addEventListener("click", () => {
  createGrid(gridSize);
});

resizeBtn.addEventListener("click", () => {
  let newSize = prompt("Enter grid size (max 64):");
  newSize = Number(newSize);

  if (newSize > 0 && newSize <= 64) {
    gridSize = newSize;
    createGrid(gridSize);
  } else {
    alert("Invalid size!");
  }
});
