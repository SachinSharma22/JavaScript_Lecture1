
let defaultResult = 0;
let currentResult = defaultResult;

function add(num1, num2 = (12)){
    const result =  num1 + num2;
    return result;
}
// function add(num1, num2 = (12)){
//     const result =  num1 + num2;
//     alert(`The result is ${result}`);
// }

currentResult = add(2,3);

// add(5);
// demo.textContent = add(4,5);

// currentResult = (currentResult + 10) *3 / 2 -1;

// If you want any thing print as it is then you can use `` (backticks) in your js code


// let calculationDescription = `(${defaultResult} + 10) *3 / 2 - 1`;

// To print the backshlash in your output just use double backshlash // to print single
// let errorMessage = "An error \\ " +  
//                    "occured!";

// let calculationDescription = '(' + defaultResult + '+ 10) *3 / 2 - 1';

// The outputResult is a function which id defined in script.js file
outputResult(currentResult, 'Your output: ');
// outputResult(currentResult, calculationDescription);

