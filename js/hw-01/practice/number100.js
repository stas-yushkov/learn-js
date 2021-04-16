// 4. Напишите цикл, который предлагает ввести
// число больше 100 через prompt.
// Если посетитель ввёл другое
// число - попросить ввести ещё раз, и так далее.
// Цикл должен спрашивать число пока посетитель не
// введёт число, большее 100, либо не нажмёт кнопку
// Отмена в промпт.

let input = prompt("Введите число больше 100");
let check = false;

do {
  if (input === null) {
    console.log('input === null', input)
    check = true;
    // input = prompt("Введите число больше 100");
  } if (input === '') {
    console.log('input is ""', input)
    check = false;
    input = prompt("Введите число больше 100");
  } 
  else {
    console.log('input is not null', Number(input))
    input = prompt("Введите число больше 100");
    check = false;
  }


  // if (Number(input) < 100) {
  //   check = true;
  //   // input = prompt("Введите число больше 100");
  // } else {
  //   check = false;
  // }
} while (check);

// добавить проверку на null  и что введенное значение цифра.


console.log('Number(input)',Number(input))
console.log('typeof Number(input) === number',typeof Number(input) === 'number')
console.log('typeof Number(input) === NaN',typeof Number(input) === typeof Number("input"))
console.log('input === null',input === null)
console.log('NaN',NaN )
// console.log('NaN === NaN', NaN === NaN)
console.log('isNaN(Number(input))', isNaN(Number(input)))


// console.log('typeof 1 === number',typeof 1 === 'number')
// console.log('null === null',null === null)

// let input = prompt("Введите число больше 100");
// let check = false;

// do {
//   if (Number(input) < 100) {
//     check = true;
//     // input = prompt("Введите число больше 100");
//   } else {
//     check = false;
//   }
// } while (check);
