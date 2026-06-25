"use strict";
const weightInput = document.getElementById("weight");
const heightInput = document.getElementById("height");
const calculateBtn = document.getElementById("calculateBtn");
const result = document.getElementById("result");
function getCategory(bmi) {
    if (bmi < 18.5) {
        return "Underweight";
    }
    else if (bmi < 25) {
        return "Normal Weight";
    }
    else if (bmi < 30) {
        return "Overweight";
    }
    else {
        return "Obese";
    }
}
calculateBtn.addEventListener("click", () => {
    const weight = Number(weightInput.value);
    const heightCm = Number(heightInput.value);
    if (!weight || !heightCm) {
        result.textContent = "Please enter valid values";
        return;
    }
    const heightM = heightCm / 100;
    const bmi = weight / (heightM * heightM);
    const category = getCategory(bmi);
    result.textContent =
        `BMI: ${bmi.toFixed(2)} (${category})`;
});
