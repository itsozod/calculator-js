let operator = '';

const buttons = document.querySelectorAll('#button');
const userInput = document.querySelector('.user');
const resultShow = document.querySelector('.result-show');
const clearBtn = document.querySelector('#clear');
const equalBtn = document.querySelector('#equal');
const calcHeader = document.querySelector('h1');
const deleteBtn = document.querySelector('#delete');
const plusBtn = document.querySelector('.plus');
const minusBtn = document.querySelector('.minus');
const multiplyBtn = document.querySelector('.multiply');
const divideBtn = document.querySelector('.divide');

// Operators are disabled by default and only enabled after pressing any number buttons
plusBtn.disabled = true;
minusBtn.disabled = true;
multiplyBtn.disabled = true;
divideBtn.disabled = true;
resultShow.textContent = "Calculator";


// function to listen to keys when they are pressed and display results on userInput and resultShow fields
window.addEventListener('keydown', (e) => { 
  const key = e.key;
  
  if (key === '=') {
    equalResult();
  }
   else if (key === 'Backspace') {
    sliceOneNumber();
   }
   else if (!isNaN(parseFloat(key)) || key === '+' || key === '-' || key === '*' || key === '/') {
    plusBtn.disabled = false;
    minusBtn.disabled = false;
    multiplyBtn.disabled = false;
    divideBtn.disabled = false;
    resultShow.textContent = "";
    calcHeader.style.visibility = "visible";
    userInput.textContent += key;
    if (key === '+' || key === '-' || key === '*' || key === '/') {
      operator = key;
      plusBtn.disabled = true;
      minusBtn.disabled = true;
      multiplyBtn.disabled = true;
      divideBtn.disabled = true;
    }
  }
});

// Function to make buttons and operators displayed on the userInput field
function handleClick() {
  plusBtn.disabled = false;
  minusBtn.disabled = false;
  multiplyBtn.disabled = false;
  divideBtn.disabled = false;
  resultShow.textContent = "";
  calcHeader.style.visibility = "visible";
  userInput.textContent += this.textContent;
  if (this.textContent === '+' || this.textContent === '-' || this.textContent === '*' || this.textContent === '/') {
    operator = this.textContent;
  }
}

buttons.forEach(function(button) {
  button.addEventListener("click", handleClick);
});

// Functions to take strings, convert them into numbers and calculate them
function add(a, b) {
  return parseFloat(a) + parseFloat(b);
}

function subtract(a, b) {
  return parseFloat(a) - parseFloat(b);
}

function multiply(a, b) {
  return parseFloat(a) * parseFloat(b);
}

function divide(a, b) {
  return parseFloat(a) / parseFloat(b);
}

// Function to display the result of calculated numbers to result field
function equalResult() {
  const expression = userInput.textContent;
  const numbers = expression.split(operator);

  let result = numbers.reduce((accumulator, currentValue) => {
    if (operator === "+") {
      return add(accumulator, currentValue);
    } else if (operator === "-") {
      return subtract(accumulator, currentValue);
    } else if (operator === "*") {
      return multiply(accumulator, currentValue);
    } else if (operator === "/") {
      return divide(accumulator, currentValue);
    }
  });
  resultShow.textContent = result
}

equalBtn.addEventListener('click', equalResult);

// Delete button function to clear one number from the end at one time
function sliceOneNumber() {
  plusBtn.disabled = false;
  minusBtn.disabled = false;
  multiplyBtn.disabled = false;
  divideBtn.disabled = false;
  userInput.textContent = userInput.textContent.slice(0, -1);
}
deleteBtn.addEventListener('click', sliceOneNumber);

// cleat all button to clear all the numbers from the input and result fields
clearBtn.addEventListener("click", () => {
    userInput.textContent = '';
    resultShow.textContent = "Calculator";
    calcHeader.style.visibility = "hidden";
    plusBtn.disabled = true;
    minusBtn.disabled = true;
    multiplyBtn.disabled = true;
    divideBtn.disabled = true;
});

// Functions to disable operators once they are clicked to prevent them from being clicked many times
plusBtn.addEventListener("click", () => {
  plusBtn.disabled = true;
  minusBtn.disabled = true;
  multiplyBtn.disabled = true;
  divideBtn.disabled = true;
});

minusBtn.addEventListener("click", () => {
  plusBtn.disabled = true;
  minusBtn.disabled = true;
  multiplyBtn.disabled = true;
  divideBtn.disabled = true;
});

multiplyBtn.addEventListener("click", () => {
  plusBtn.disabled = true;
  minusBtn.disabled = true;
  multiplyBtn.disabled = true;
  divideBtn.disabled = true;
});

divideBtn.addEventListener("click", () => {
  plusBtn.disabled = true;
  minusBtn.disabled = true;
  multiplyBtn.disabled = true;
  divideBtn.disabled = true;
});




