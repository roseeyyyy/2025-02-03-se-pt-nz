let firstNumber = ''
let secondNumber = ''
let operator = ''
let isSecondNumber = false

const input = document.getElementById('calc-input')
const buttons = document.querySelectorAll('.calc-button')
const equalsButton = document.getElementById('equals-button')
const clearButton = document.getElementById('clear-button')

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.textContent

    if (['+', '-', '*', '/'].includes(value)) {
      if (!firstNumber) return
      operator = value
      isSecondNumber = true
      input.value += ` ${value} `
    } else {
      if (!isSecondNumber) {
        firstNumber += value
      } else {
        secondNumber += value
      }
      input.value += value
    }
  })
})

equalsButton.addEventListener('click', () => {
  const num1 = parseFloat(firstNumber);
  const num2 = parseFloat(secondNumber);
  let result = ''

  if (isNaN(num1) || isNaN(num2)) {
    input.value = 'Invalid input'
    return
  }

  switch (operator) {
    case '+':
      result = num1 + num2
      break
    case '-':
      result = num1 - num2
      break
    case '*':
      result = num1 * num2
      break
    case '/':
      result = num2 === 0 ? 'Error (÷0)' : num1 / num2
      break
    default:
      result = 'Invalid operator'
  }

  input.value = result
  firstNumber = result.toString()
  secondNumber = ''
  operator = ''
  isSecondNumber = false
})

clearButton.addEventListener('click', () => {
  firstNumber = ''
  secondNumber = ''
  operator = ''
  isSecondNumber = false
  input.value = ''
})
