// Based on an 8:1 water:coffeebean ratio
let selectRatio = document.querySelector("#select-ratio");
let waterAmount = document.querySelector("#water-amount");
let selectMetric = document.querySelector("#select-metric");
let resultDisplay = document.querySelector("#result-display");

const ratios = [
    {
        label: '1/8',
        number: .125,
        description: "Average strength"
    },
    {
        label: '1/4',
        number: .25,
        description: "Concentrate; dilute with 1:1 parts water!"
    },
    {
        label: '1/16',
        number: .0625,
        description: "Very weak"
    }
];

const waterMetric = {
    'oz': 29.57,
    'cups': 236.59,
    'pints': 473.18,
    'quarts': 946.36,
    'gallons': 3785
}

for(index in ratios) {
    selectRatio.options[selectRatio.options.length] = new Option(ratios[index].label, ratios[index].number);
}


for(index in waterMetric) {
    selectMetric.options[selectMetric.options.length] = new Option(index, waterMetric[index]);
}

const makeCoffee = () => {
    validityCheck();

    const amount = waterAmount.value;
    const metric = selectMetric.value;
    const ratio = selectRatio.value;
    
    let coffeeNeeded = amount * metric * ratio;

    // result.textContent = coffeeNeeded + "grams";
    updateDisplay(coffeeNeeded);
    resultDisplay.style.display = "block";
}

const updateDisplay = (amount) => {
    resetDisplay();

    const resultString = "I recommend about " + Math.round(amount) + "grams (or " + convertMlToOz(amount) + "oz) of coarsely ground coffee beans."
    var node = document.createElement("text");
    var textnode = document.createTextNode(resultString);
    node.appendChild(textnode);
    resultDisplay.appendChild(node);
}

const convertMlToOz = (mls) => Number.parseFloat(mls / 28.3495).toPrecision(2);

const resetDisplay = () => {
    while (resultDisplay.firstChild) {
        resultDisplay.removeChild(resultDisplay.firstChild);
    }
}

const validityCheck = () => {
    if (waterAmount.validity.badInput) {
        alert("C'mon now... numbers only, please.");
    }
    if (waterAmount.value <= 0) {
        alert("Amount of water must used must be above 0, obviously.");
    }
}