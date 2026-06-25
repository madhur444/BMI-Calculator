const weightInput = document.getElementById("weight") as HTMLInputElement;
const heightInput = document.getElementById("height") as HTMLInputElement;
const calculateBtn = document.getElementById("calculateBtn") as HTMLButtonElement;
const result = document.getElementById("result") as HTMLDivElement;

function getCategory(bmi: number): string {
    if (bmi < 18.5) {
        return "Underweight";
    } else if (bmi < 25) {
        return "Normal Weight";
    } else if (bmi < 30) {
        return "Overweight";
    } else {
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

    const heightM   = heightCm / 100;

    const bmi = weight / (heightM * heightM);

    const category = getCategory(bmi);

    result.textContent =
        `BMI: ${bmi.toFixed(2)} (${category})`;
});
