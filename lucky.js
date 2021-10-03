const DateOfBirth = document.querySelector("#d-o-b");
const LuckyNumber = document.querySelector("#lucky-num");
const checkNumButton = document.querySelector("#check-num");

 checkNumButton.addEventListener("click", function clickEventHandler(){
    console.log(DateOfBirth.value , LuckyNumber.value);
});