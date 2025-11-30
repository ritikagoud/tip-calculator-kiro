const calculateBtn = document.getElementById("calculate");
const billInput = document.getElementById("bill");
const tipInput = document.getElementById("tipPercent");
const peopleInput = document.getElementById("people");
const tipAmountField = document.getElementById("tipAmount");
const totalAmountField = document.getElementById("totalAmount");
const perPersonField = document.getElementById("perPerson");

// Preset tip buttons
function setTip(percent) {
    tipInput.value = percent;
}

calculateBtn.addEventListener("click", function() {
    let bill = parseFloat(billInput.value);
    let tipPercent = parseFloat(tipInput.value);
    let people = parseInt(peopleInput.value) || 1;

    if (!bill || bill < 0) {
        alert("Please enter a valid bill amount!");
        return;
    }
    if (!tipPercent || tipPercent < 0) {
        tipPercent = 0; // default to 0 if empty or negative
    }
    if (people < 1) people = 1;

    let tipAmount = (bill * tipPercent) / 100;
    let totalAmount = bill + tipAmount;
    let perPerson = totalAmount / people;

    tipAmountField.textContent = tipAmount.toFixed(2);
    totalAmountField.textContent = totalAmount.toFixed(2);
    perPersonField.textContent = perPerson.toFixed(2);
});
