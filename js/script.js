// Based on an 8:1 water:coffeebean ratio
const beanRatio = 1/8;
let waterAmount = document.querySelector("#water-amount");
let waterMetric = document.querySelector("#water-metric");
let resultDisplay = document.querySelector("#result-display");
let result = document.querySelector("#result");

const makeCoffee = () => {
    let amount = waterAmount.value;
    let metric = waterMetric.value;
    if (metric > 1) {
        amount = convertToCups(amount, metric);
    } 

    let coffeeNeeded = amount * beanRatio;

    result.textContent = coffeeNeeded + "oz";
    resultDisplay.style.display = "block";
}

const convertToCups = (amount, metric) => {
    return amount * metric;
}