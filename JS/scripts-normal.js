const previousOperationsText = document.querySelector("#previous-operation");
const currentOperationsText = document.querySelector("#current-operation");
const buttons = document.querySelectorAll("#buttons-containers button");

class Calculator {
    constructor(previousOperationsText, currentOperationsText) {
        this.previousOperationsText = previousOperationsText;
        this.currentOperationsText = currentOperationsText;
        this.currentOperation = "";
    }

    addDigit(digit) {
        if (digit === "." && this.currentOperationsText.innerText.includes(".")) {
            return;
        }

        this.currentOperation += digit;
        this.updateScreen();
    }

    processOperation(operation) {

        if (this.currentOperationsText.innerText === "" && operation != "C") {
            if (this.previousOperationsText.innerText !== "") {
                this.changeOperation(operation);
            }
            return;
        }

        let operationValue;
        const previous = +this.previousOperationsText.innerText.split(" ")[0];
        const current = +this.currentOperationsText.innerText;


        if (!isNaN(previous) && !isNaN(current)) {
            switch (operation) {
                case "+":
                    operationValue = previous + current;
                    this.updateScreen(operationValue, operation, current, previous);
                    break;
                case "-":
                    operationValue = previous - current;
                    this.updateScreen(operationValue, operation, current, previous);
                    break;
                case "/":
                    operationValue = previous / current;
                    this.updateScreen(operationValue, operation, current, previous);
                    break;
                case "*":
                    operationValue = previous * current;
                    this.updateScreen(operationValue, operation, current, previous);
                    break;
                case "DEL":
                    this.processDelOperator();
                    break;
                case "CE":
                    this.processClearOperation();
                    break;
                case "C":
                    this.processClearCurrentOperation();
                    break;
                case "=":
                    this.processEqualOperation();
                    break;
                default:
                    return;
            }
        }
    }

    updateScreen(
        operationValue = null,
        operation = null,
        current = null,
        previous = null
    ) {
        if (operationValue === null) {
            this.currentOperationsText.innerText = this.currentOperation;
        } else {
            if (previous === 0) {
                operationValue = current;
            }


            this.previousOperationsText.innerText = `${operationValue} ${operation}`;
            this.currentOperationsText.innerText = "";
            this.currentOperation = "";
        }
    }

    changeOperation(operation) {
        const mathOperations = ["*", "/", "+", "-"];
        if (!mathOperations.includes(operation)) {
            return;
        }

        this.previousOperationsText.innerText = this.previousOperationsText.innerText.slice(0, -1) + operation;
    }

    processDelOperator() {
        this.currentOperationsText.innerText = this.currentOperationsText.innerText.slice(0, -1);
        this.currentOperation = this.currentOperation.slice(0, -1);
    }

    processClearOperation() {
        this.currentOperationsText.innerText = ""
        this.currentOperation = "";
    }

    processClearCurrentOperation() {
        previousOperationsText.innerText = ""
        this.previousOperations = "";
        currentOperationsText.innerText = ""
        this.currentOperation = "";
    }

    processEqualOperation() {
        const operation = previousOperationsText.innerText.split(" ")[1]

        this.processOperation(operation);
    }
} 

const calc = new Calculator(previousOperationsText, currentOperationsText);

buttons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        const value = e.target.innerText;
        if (+value >= 0 || value === ".") {
            calc.addDigit(value);
        } else {
            calc.processOperation(value);
        }
    });
});

const backButton = document.getElementById("back-button");
backButton.addEventListener("click", () => {
  window.location.href = "index.html"; 
});
