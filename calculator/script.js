const display = document.getElementById('display');
const history = document.getElementById('history');

let expression = '';

function addToDisplay(value) {
  expression += value;
  display.value = expression;
}

function clearDisplay() {
  expression = '';
  display.value = '';
}

function backspace() {
  expression = expression.slice(0, -1);
  display.value = expression;
}

function calculate() {
  try {
    const result = eval(expression);
    display.value = result;
    history.textContent = expression + ' = ' + result;
    expression = '';
  } catch (error) {
    display.value = 'Error';
    expression = '';
  }
}
