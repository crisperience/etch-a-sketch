const container = document.querySelector(".container");

function createGrid(size) {
  container.innerHTML = ""; // Clear the existing grid

  container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  container.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  // Create grid squares
  for (let i = 0; i < size * size; i++) {
    const gridSquare = document.createElement("div");
    gridSquare.classList.add("grid-square");

    // Set initial opacity to 0
    gridSquare.style.opacity = 0;

    // Add hover effect for random RGB color and darkening effect
    gridSquare.addEventListener("mouseover", () => {
      if (gridSquare.style.opacity == 0) {
        // Randomize RGB color when opacity is 0
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        gridSquare.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
      }

      // Increase opacity by 0.1 up to 1
      let currentOpacity = parseFloat(gridSquare.style.opacity);
      if (currentOpacity < 1) {
        gridSquare.style.opacity = currentOpacity + 0.1;
      }
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
