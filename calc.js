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

// This function is for adding the inputed value
function add(){
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult = currentResult + enteredNumber;
    createAndWriteOutput('+', initialResult, enteredNumber );
    writeToLog('ADD', initialResult, enteredNumber, currentResult);
}
   

// This function is for subtracting the inputed value
function subtract(){
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult = currentResult - enteredNumber;
    createAndWriteOutput('-', initialResult, enteredNumber );
    writeToLog('SUBTRACT', initialResult, enteredNumber, currentResult);
}

// This function is for multiply the inputed value
function multiply(){
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult = currentResult * enteredNumber;
    createAndWriteOutput('*', initialResult, enteredNumber );
    writeToLog('MULTIPLY', initialResult, enteredNumber, currentResult);
}

// This function is for divide the inputed value
function divide(){
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult = currentResult / enteredNumber;
    createAndWriteOutput('/', initialResult, enteredNumber );
    writeToLog('DIVIDE', initialResult, enteredNumber, currentResult);
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);
