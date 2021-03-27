class Calculator {
    constructor (previousOperandTextElement, currentOperandTextElement) {
        this.previousOperandTextElement = previousOperandTextElement
        this.currentOperandTextElement = currentOperandTextElement
        this.allClear()
    }
 //gives a way to set the text elements inside of our class //
 //need to define our functions of the calculator - all our operations to perform

 //clear out our different variables 
allClear() {
    this.currentOperand = ''
    this.previousOperand = ''
    this.operation = undefined 
 }
//removing a single number
allDelete(){

}
//adds a number to the screen 
appendNumber(number) {
    if(number === '.' && this.currentOperand.includes('.')) return
    this.currentOperand = this.currentOperand.toString() + number.toString()
}
//this is what happens anytime a user clicks on a function 
chooseOperation(operation) {

}
//takes our values to compute a single value to display on our calculator 
compute() {

}
//this will update the values inside of our output
updateDisplay() {
    this.currentOperandTextElement.innerText = this.currentOperand
}
}
const numberButtons = document.querySelectorAll('[calculator-number]')
const performanceButtons = document.querySelectorAll('[calculator-performance]')
const equalsButton = document.querySelector('[calculator-equals]')
const deleteButton = document.querySelector('[calculator-delete]')
const allClearButton = document.querySelector('[calculator-all-clear]')
const previousOperandTextElement = document.querySelector('[calculator-previous-operand]')
const currentOperandTextElement = document.querySelector('[calculator-current-operand]')

const calculator = new Calculator (previousOperandTextElement, 
    currentOperandTextElement)

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText)
        calculator.updateDisplay()
    })
})


const val = {
    getClothes = () => {
console.log("clothes")
    },
    getCoffee = () => {
        console.log("get coffee")
    }
}

val.getCoffee();