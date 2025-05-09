
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
        case "Enter":
            enter(e);
            break;
        default:
            screenContent += input;
            console.log(screenContent)
    }
    outputScreen.textContent = screenContent;
}

function enter(e){
    num1 = 0;
    num2 = 0;
    expression = '';
    first = true;
    decimal = false;
    for (i = 0; i < screenContent.length; i++){

        if(screenContent[i] == '*' ||
            screenContent[i] == '/' ||
            screenContent[i] == '-' ||
            screenContent[i] == '+'){
                first = false;
                decimal = false;
                expression = screenContent[i];
            }
        else if(first){
            num1 = num1 * 10 + parseInt(screenContent[i]);
        }
        else{
            num2 = num2 * 10 + parseInt(screenContent[i]);
        }
    }
    console.log(num1);
    console.log(num2);
    console.log(expression);

    switch (expression){
        case '*':
            answer = num1 * num2;
            break;
        case '/':
            answer = num1 / num2;
            break;
        case '-':
            answer = num1 - num2;
            break;
        case '+':
            answer = num1 + num2;
            break;
    }
    screenContent = answer;
    outputScreen.textContent = screenContent;
}

// stack = [];
// postfex = ''
// for (i = 0; i < screenContent.length; i++){
//     if(screenContent[i] == '*' ||
//         screenContent[i] == '/' ||
//         screenContent[i] == '-' ||
//         screenContent[i] == '+'){
//             if (stack.at(-1) == '+' || stack.at(-1) == '-' && screenContent[i] == '*' || screenContent[i] == '/'){
//                 postfex += stack.pop();
//             }
//             else{
//                 postfex += screenContent[i];
//             }
//     }
//     else{

//     }
//     console.log(stack);
//     console.log(postfex);
// }