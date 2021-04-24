// /*
//  * Знакомство  с массивами
//  * - Объявление
//  * - Индексация
//  * - Длина
//  * - Индекс последнего элемента
//  * - Переопределение
//  *
//  * 'Mango', 'Kiwi', 'Poly', 'Ajax'
//  */

// // const friends = ['Mango', 'Kiwi', 'Poly', 'Ajax'];
// // console.table(friends);

// // friends[1] = 'qwerqrwr';
// // friends[3] = 123123;

// // console.table(friends);

// // const lastIndex = friends.length - 1;
// // console.log(lastIndex);

// /*
//  * Передача по ссылке и по значению
//  * - Примитивы и сложные типы
//  * - Ссылочное равенство (referential equality)
//  */

// // const a = [1, 2, 3];
// // const b = a;

// // console.log('a', a);
// // console.log('b', b);

// // a[0] = 500;

// // console.log('a', a);
// // console.log('b', b);

// // console.log(a === b);

// // console.log([1, 2, 3] === [1, 2, 3]);

// /*
//  * Перебор (итерация) массива
//  * - for - если нужен индекс или нужно изменить элемент массива
//  * - for...of - если индекс не нужен и в массиве ничего менять не нужно
//  */

// const friends = ['Mango', 'Kiwi', 'Poly', 'Ajax'];
// // console.table(friends);
// // const lastIndex = friends.length - 1;

// for (let i = 0; i < friends.length; i += 1) {
//   friends[i] += `-${i}`;
// }

// // for (let friend of friends) {
// //   console.log(friend);
// // }

// console.table(friends);


///////////////////////////////////////////////////////

// const add = function (param_x, param_y) {
//   //....
//   console.log(param_x)
//   console.log(param_y)

//   // const result = param_x + param_y;
//   // console.log('x + y =',result)
//   console.log('function "add" is executing')

//   return param_x + param_y;
// };
// // const arg_x = 1;
// // const arg_y = 2;
// // add(arg_x, arg_y);

// const r1 = add(5, 3);
// console.log('r1 = ', r1);
///////////////////////////////////////////////////////

// const fn = function (value) {
//   console.log(1);
//   console.log(2);
//   console.log(3);
//   // return 111;
//   if (value < 50) {
//     return 'less than 50';
//   }
  
//   return 'greater than 50';
//   // return 5,10,4;
  

// };

// console.log(fn(10));
// console.log(fn(1000));

///////////////////////////////////////////////////////
/*
 * - Стек вызовов
 * - Stack trace и поиск ошибок
 */
const fnA = function () {
  console.log('Выполняется функция A');
  fnB();
};

const fnB = function () {
  console.log('Выполняется функция B');
  fnC();
};

const fnC = function () {
  console.log('Выполняется функция C');
};

// function main - весь файл
// stack frame 

// console.log('Лог перед вызовом функции A');

fnA();

// console.log('Лог после вызова функции A');

// console.log('Лог перед вызовом функции B');
// fnB();
// console.log('Лог после вызова функции B');

// console.log('Лог перед вызовом функции C');
// fnC();
// console.log('Лог после вызова функции C');

// console.log( console.log( 2));