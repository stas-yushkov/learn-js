////////////////////////////////////////////////////////////////////////////
// // https://askubuntu.com/questions/605558/how-to-create-multiple-files-with-the-terminal
// // enter in bash
// touch 04-{01..10}___-.js
////////////////////////////////////////////////////////////////////////////
const moduleNumber = 4;
const amountOfHW = '10';

console.log(`module ${moduleNumber}`);
const btnGenerate = document.querySelector('button[data-generate]');
const valueInputStart = document.querySelector('input[data-start-value]');
const valueInputEnd = document.querySelector('input[data-end-value]');
const outputElement = document.querySelector('p[data-text]');
const sampleCode = document.querySelector('code[data-code]');
// https://www.w3schools.com/js/js_htmldom_nodes.asp

sampleCode.textContent = `<!-- <script src="./js/hw-0${moduleNumber}/0${moduleNumber}-01___-.js" type="module"></script> -->`;
btnGenerate.textContent = 'Сгенерировать';
valueInputStart.defaultValue = '1';
valueInputEnd.defaultValue = amountOfHW;

btnGenerate.addEventListener('click', function () {
  console.log('click произошел');
  const valueStart = Number(valueInputStart.value);
  const valueEnd = Number(valueInputEnd.value);

  if (valueStart > 0) {
    for (let i = valueStart; i <= valueEnd; i += 1) {
      console.log(
        `<!-- <script src="./js/hw-0${moduleNumber}/0${moduleNumber}-${String(
          i,
        ).padStart(2, 0)}___-.js" type="module"></script> -->\n`,
      );

      const para = document.createElement('p');
      const node = document.createTextNode(
        `<!-- <script src="./js/hw-0${moduleNumber}/0${moduleNumber}-${String(
          i,
        ).padStart(2, 0)}___-.js" type="module"></script> -->`,
      );

      para.appendChild(node);
      const element = document.querySelector('section[data-section]');

      element.appendChild(para);
    }
  }
});
