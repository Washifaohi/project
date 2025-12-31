// Select display once
const display = document.querySelector(".display");

// Add button value to display
function addToDisplay(value) {
    display.value += value;
}

// Clear the entire display
function clearAll() {
    display.value = "";
}

// Delete the last character
function deleteLast() {
    display.value = display.value.slice(0, -1);
}

// Equal the display number

function calculate() {
    let displayValue = document.querySelector(".display").value;
    document.querySelector(".display").value = eval(displayValue);
}

// Percentage
function percentage() {
    display.value = Number(display.value) / 100;
}

