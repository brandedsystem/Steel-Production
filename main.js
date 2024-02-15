function displayItems(selectedCategory) {
    var subcategoryContainer = document.getElementById("subcategory");
    subcategoryContainer.innerHTML = ""; // Clear previous items
    if (selectedCategory === "pipesTubes") {
        displayPipesTubesItems();
    } else if (selectedCategory === "barsWires") {
        displayBarsWiresItems();
    } else if (selectedCategory === "structuralProducts") {
        displayStructuralProductsItems();
        // Add more conditions for additional categories
    }
}

function displayPipesTubesItems() {
    var subcategoryContainer = document.getElementById("subcategory");
    subcategoryContainer.style.display = "block";
    var pipesTubesItems = ["Pipe", "Flat", "Angle"];
    pipesTubesItems.forEach(function(item) {
        var itemElement = document.createElement("div");
        itemElement.className = "subcategory-item";
        itemElement.textContent = item;
        subcategoryContainer.appendChild(itemElement);
    });
}

function displayBarsWiresItems() {
    var subcategoryContainer = document.getElementById("subcategory");
    subcategoryContainer.style.display = "block";
    var barsWiresItems = ["Round Bars", "Flat Bars", "Square Bars", "Hexagonal Bars", "Angle Bars", "Channel Bars", "Wires - Straight", "Wires - Coil"];
    barsWiresItems.forEach(function(item) {
        var itemElement = document.createElement("div");
        itemElement.className = "subcategory-item";
        itemElement.textContent = item;
        subcategoryContainer.appendChild(itemElement);
    });
}

function displayStructuralProductsItems() {
    var subcategoryContainer = document.getElementById("subcategory");
    subcategoryContainer.style.display = "block";
    var structuralProductsItems = ["Hollow Section", "Pipe", "Flat", "Angle", "Beam", "Europe Profile (Beam)", "Plate"];
    structuralProductsItems.forEach(function(item) {
        var itemElement = document.createElement("div");
        itemElement.className = "subcategory-item";
        itemElement.textContent = item;
        subcategoryContainer.appendChild(itemElement);
    });
    // Add more structural products items as needed
}