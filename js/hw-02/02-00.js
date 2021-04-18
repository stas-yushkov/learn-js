////////////////////////////////////////////////////////////////////////////
// // https://askubuntu.com/questions/605558/how-to-create-multiple-files-with-the-terminal
// // enter in bash
// touch 02-{01..32}___-.js
////////////////////////////////////////////////////////////////////////////
// console.log(2)
const btnGenerate = document.querySelector('button[data-generate]');
const btnReset = document.querySelector('button[data-reset]');
const valueInputStart = document.querySelector('input[data-start-value]')
const valueInputEnd = document.querySelector('input[data-end-value]')
const outputElement = document.querySelector('p[data-text]');
// console.log(btnGenerate)
// console.log(btnReset)
// console.log(valueInputStart)
// console.log(valueInputEnd)
// console.log(outputElement)
////////////////////////////////////////////////////////////////////////////
// // enter in dev console
// for (let i = 1; i <= 9; i += 1) {
//   console.log(`<!-- <script src="./js/hw-02/01-0${i}___-.js" type="module"></script> -->`);
// }

// for (let i = 10; i <= 32; i += 1) {
//   console.log(`<!-- <script src="./js/hw-02/01-${i}___-.js" type="module"></script> -->`);
// }
////////////////////////////////////////////////////////////////////////////


let total = 'nothing to show';

// console.dir(btnAdd.textContent);

btnGenerate.textContent = 'Сгенерировать';
valueInputStart.defaultValue = '1';
valueInputEnd.defaultValue = '32';

console.dir(valueInputStart.textContent);
console.dir(valueInputStart);

btnGenerate.addEventListener('click', function () {
  console.log('click произишел');
  const valueStart = Number(valueInputStart.value);
  const valueEnd = Number(valueInputEnd.value);
  // console.log('value', value);


  for (let i = valueStart; i <= 9; i += 1) {
    // console.log(`<!-- <script src="./js/hw-02/01-0${i}___-.js" type="module"></script> -->\n\n`);
    outputElement.textContent += `<!-- <script src="./js/hw-02/01-0${i}___-.js" type="module"></script> -->`;
  }

  for (let i = 10; i <= valueEnd; i += 1) {
    // console.log(`<!-- <script src="./js/hw-02/01-${i}___-.js" type="module"></script> -->\n\n`);
    outputElement.textContent += `<!-- <script src="./js/hw-02/01-${i}___-.js" type="module"></script> -->`;
  }

  // total += value;
  // console.log('total', total);
  // outputElement.textContent = total;
  // valueInputStart.value = '';
});


btnReset.addEventListener('click', function () {
  total = 'nothing to show';
  outputElement.textContent = total;
});