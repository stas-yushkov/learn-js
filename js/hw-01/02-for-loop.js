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

// // const,let
// const emploees = 3;
// const min = 500;
// const max = 5000;
// let salary = 0;
// let totalSalary = 0;

// // random for  each emploee in for loop
// // summ salary
// for (let i = 0; i < emploees; i++) {
//   console.log(i);
//   salary = Math.round(Math.random() * (max - min) + min);
//   console.log(salary);
//   totalSalary += salary;
  

// }
// // console.log
// console.log(totalSalary)





// Репета:
// сделать переменные
// перебрать работников в цикле
// сгенерить случайное зп
// прибавить к тоталу
// лог

// // сделать переменные
// const minSalary = 500;
// const maxSalary = 5000;
// const emploees = 3;
// let totalSalary = 0;
// // перебрать работников в цикле
// for (let i = 1; i <= emploees; i += 1) {
//   // сгенерить случайное зп
//   const salary = Math.round(
//     Math.random() * (maxSalary - minSalary) + minSalary,
//   )
//   console.log(`ЗП работника ${i} - ${salary}`);
//   // прибавить к тоталу
//   totalSalary += salary;
// }
// // лог
// console.log(totalSalary);



// напиши скрипт который подсчитывает сумму всех четных чисел,
// которые входят в диапазон чисел в переменных от min до max.
// нпример, если min=0 и max=5 то диапазон 0-5 и в нем два числа 2 и 4, их сумма 6

// переменные
// перебрать в диапазоне числа
// если число парное, суммировать.
// лог

// // переменные
// const min = 0;
// const max = 9;
// let sum = 0;
// // перебрать в диапазоне числа
// for (let i = min; i <= max; i += 1) {
//   // console.log(i);
//   // если число парное, суммировать.
//   sum += i % 2 ? 0 : i;
//   // console.log(`i % 2 ${i % 2}`);
// }
// // лог
// console.log(`sum = ${sum}`);


// REPETA:

// // вары
// const min = 6;
// const max = 13;
// let total = 0;
// // for from min to max, step = 1
// for (let i = min; i <= max; i += 1) {
//   console.log(i);
//   // проверяем  остаток от деления
//   if (i % 2 === 0) {
//     // console.log('четное:', i)
//     // пишем сумму
//     total += i;
//   }
  
// }

// console.log(total);


// вары
// класическая правильная логика - идти от обратного (плохого )
const min = 0;
const max = 5;
let total = 0;
// for from min to max, step = 1
for (let i = min; i <= max; i += 1) {
  // проверяем  остаток от деления
  if (i % 2 !== 0) {
    console.log('не четное', i);
    continue;// если не четное, то иди на следующую итерацию, код ниже после if  на текущей итерации когда не четное просто не выполнится.
  }
  console.log('четное:', i)
  // пишем сумму
  total += i;
  
}

console.log(total);