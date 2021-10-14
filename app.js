const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

function userInputToNum() {
  return parseInt(userInput.value);
}

function craeteAndWriteOutput(operator, resultBefore, calcNum) {
  const calcDescription = `${resultBefore} ${operator} ${calcNum}`;
  outputResult(currentResult, calcDescription);
}

function writeToLog(operationID, prevResult, operationNum, newResult) {
  const logEntry = {
    operation: operationID,
    prevResult: prevResult,
    Number: operationNum,
    result: newResult,
  };
  logEntries.push(logEntry);
  console.log(logEntries);
}

function calculateResult(calcType) {
  const inputNum = userInputToNum();
  if (
    calcType !== "ADD" &&
    calcType !== "SUBTRACT" &&
    calcType !== "MULTIPLY" &&
    calcType !== "DEVIDE" ||
    !inputNum
  ) {
    return;
  }

  
  const initialResult = currentResult;
  let mathOperator;
  if (calcType === "ADD") {
    currentResult += inputNum;
    mathOperator = "+";
  } else if (calcType === "SUBTRACT") {
    currentResult -= inputNum;
    mathOperator = "-";
  } else if (calcType === "MULTIPLY") {
    currentResult *= inputNum;
    mathOperator = "*";
  } else if (calcType === "DEVIDE") {
    currentResult /= inputNum;
    mathOperator = "/";
  }

  craeteAndWriteOutput(mathOperator, initialResult, inputNum);
  writeToLog(calcType, initialResult, inputNum, currentResult);
}

function add() {
  calculateResult("ADD");
}

function subtract() {
  calculateResult("SUBTRACT");
}

function multiply() {
  calculateResult("MULTIPLY");
}

function divide() {
  calculateResult("DEVIDE");
}

addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);
