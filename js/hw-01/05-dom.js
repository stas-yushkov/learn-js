const btnAdd = document.querySelector('button[data-add]');
const resetBtn = document.querySelector('button[data-reset]')
const valueInput = document.querySelector('input[data-value]')
const outputElement = document.querySelector('.js-output span');

console.log(resetBtn)

let total = 0;

// console.dir(btnAdd.textContent);

btnAdd.textContent = 'Прибавить';

// console.dir(btnAdd.textContent);

btnAdd.addEventListener('click', function () {
  console.log('click dkwmck;wmdw;cm');

  const value = Number(valueInput.value);

  console.log('value', value);
  
  total += value;
  
  // console.log('total', total);
  
  outputElement.textContent = total;

  valueInput.value = '';
});