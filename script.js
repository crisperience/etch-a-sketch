const container = document.querySelector(".container");

function createGrid(size) {
  // Clear any existing grid
  container.innerHTML = "";

  // Set grid dimensions
  container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  container.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  // Create grid squares
  for (let i = 0; i < size * size; i++) {
    const gridSquare = document.createElement("div");
    gridSquare.classList.add("grid-square");

    // Add hover effect for coloring the squares
    gridSquare.addEventListener("mouseover", () => {
      gridSquare.style.backgroundColor = "black";
    });

    container.appendChild(gridSquare);
  }
}

// Add functionality to the size selector
const sizeInput = document.getElementById("size");
const sizeDisplay = document.getElementById("size-display");

sizeInput.addEventListener("input", () => {
  sizeDisplay.textContent = sizeInput.value;
  createGrid(sizeInput.value);
});

// Add clear button functionality
const clearButton = document.getElementById("clear");
clearButton.addEventListener("click", () => {
  createGrid(sizeInput.value);
});

// Initialize grid with default size
createGrid(16);
