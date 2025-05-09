
// Constant elements

const outputScreen = document.querySelector(".screen");
outputScreen.content = "screenContent";
console.log(outputScreen);

const buttons = document.querySelector("table");
console.log(buttons);


buttons.addEventListener("click", calculate);

// variables
screenContent = "";


function calculate(e){
    console.log(e.target.textContent);
    input = e.target.textContent;
    switch (input){
        case "Clear":
            screenContent = '';
            break;
        case "Back":
            screenContent = screenContent.slice(0, -1);
            console.log(screenContent);
            break;
        default:
            screenContent += input;
            console.log(screenContent)
    }
    outputScreen.textContent = screenContent;
}