const btnAdd = document.querySelector('button[data-add]');
const valueInput = document.querySelector('input[data-value]')


console.dir(btnAdd.textContent);

btnAdd.textContent = 'Прибавить';

console.dir(btnAdd.textContent);

btnAdd.addEventListener('click', function () {
  console.log('click dkwmck;wmdw;cm');

  const value = Number(valueInput.value);

  console.log(value);
});