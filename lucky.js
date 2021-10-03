const DateOfBirth = document.querySelector("#d-o-b");
const LuckyNumber = document.querySelector("#lucky-num");
const checkNumButton = document.querySelector("#check-num");
const resultBox = document.querySelector("#result-box")

function compareValues(sum, LuckyNumber) {
    if (sum % LuckyNumber=== 0) {
        resultBox.innerText = "Your birthday is lucky 🎉";
    } else {
        resultBox.innerText = "Your birhday is not lucky 🤤"
    }
}

function checkBirthDateIsLucky() {
    const bdate = DateOfBirth.value;
    const sum = calculateSum(bdate);
    if (sum && bdate) {
        compareValues(sum, LuckyNumber.value)
    } else {
        resultBox.innerText = "Please enter both the fields!";
    }
}

function calculateSum(bdate) {
    bdate = bdate.replaceAll("-", "");
    let sum = 0;
    for (let i = 0; i < bdate.length; i++) {
        sum = sum + Number(bdate.charAt(i));
    }
    return sum;
}

checkNumButton.addEventListener("click", checkBirthDateIsLucky)