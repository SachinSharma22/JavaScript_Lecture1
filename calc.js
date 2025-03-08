const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

//Gets input from the input field
function getUserNumberInput(){
    return  parseInt(userInput.value);
}


// Generates and writes calculation log
function createAndWriteOutput(operator, resultBeforeCalc, calcNumber){
    const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
    outputResult(currentResult, calcDescription);//this function is from script.js file.
}

function writeToLog(operationIdentifier, prevResult, operationNumber, newResult){
    const logEntry = {
        operation: operationIdentifier,
        prevResult: prevResult,
        number: operationNumber,
        result: newResult
    };
    logEntries.push(logEntry);
    console.log(logEntries);

}

function calculateResult(calculationType){
if(calculationType !== 'ADD' &&
    calculationType !== 'SUBTRACT' &&
    calculationType !== 'MULTIPLY' &&
    calculationType !== 'DIVIDE' 
) {
    return;
}

    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    let mathOperator;
    if(calculationType === 'ADD'){
        currentResult += enteredNumber;
        mathOperator = '+';
    }else if(calculationType === 'SUBTRACT'){
        currentResult -= enteredNumber;
        mathOperator = '-';
    }else if(calculationType === 'MULTIPLY'){
        currentResult *= enteredNumber;
        mathOperator = '*';
    }else if(calculationType === 'DIVIDE'){
        currentResult /= enteredNumber;
        mathOperator = '/';
    }
   
    createAndWriteOutput(mathOperator, initialResult, enteredNumber );
    writeToLog('ADD', initialResult, enteredNumber, currentResult);
}

// This function is for adding the inputed value
function add(){
   calculateResult('ADD');
}


// This function is for subtracting the inputed value
function subtract(){
    calculateResult('SUBTRACT');
   
}

// This function is for multiply the inputed value
function multiply(){
    calculateResult('MULTIPLY');
}

// This function is for divide the inputed value
function divide(){
    calculateResult('DIVIDE');
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);
