// 4. Напишите цикл, который предлагает ввести
// число больше 100 через prompt.
// Если посетитель ввёл другое
// число - попросить ввести ещё раз, и так далее.
// Цикл должен спрашивать число пока посетитель не
// введёт число, большее 100, либо не нажмёт кнопку
// Отмена в промпт.

let input;
let check = false;

do {
  console.log("Введите число больше 100")
  input = prompt("Введите число больше 100");
  
  if (Number(input) > 100) {
    console.log('(Number(input) > 100)', Number(input))
    check = false;

  } else if (input === '') {
    console.log('input is ""', input)
    check = true;

  } else if (input === null) {
    console.log('input is null', input)
    check = false;

  } else if (isNaN(Number(input))) {
    console.log('input is NaN', input)
    check = true;

  } else {
    console.log('input is <= 100', Number(input))
    check = true;
    
  }
} while (check);