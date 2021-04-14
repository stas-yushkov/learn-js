// цикл for

// for (init; condition; post - expression) {
//   // loop - body;
// }

// for (let i = 0; i < 5; i+=1) {
//   console.log(i)
// }

// напиши скрипт который подсчитывает общую сумму зарплит работников.
// количество роботников хранится в переменной emloees
// зарплата каждого работника это случайное число от 500 до 5000
// записать сумму в переменную totalSalary и вывести в консоль

// const,let
// random for  each emploee in for loop
// summ salary
// console.log

// const,let
const emploees = 3;
const min = 500;
const max = 5000;
let salary = 0;
let totalSalary = 0;

// random for  each emploee in for loop
// summ salary
for (let i = 0; i < emploees; i++) {
  console.log(i);
  salary = Math.round(Math.random() * (max - min) + min);
  console.log(salary);
  totalSalary += salary;
  

}
// console.log
console.log(totalSalary)

