"use strict"


// Важно различать неопределенные и необъявленные переменные.

// Неопределенная (undefined) — это переменная, которая была объявлена, но не инициализирована значением, по умолчанию ей присваивается значение undefined как начальное.
// Необъявленная (undeclared или not defined) — это переменная, которая не была объявлена в доступной области видимости.

// let name;

/*
 * Переменная name объявлена, но не инициализирована, поэтому
 * ее значение undefined (не определено), тогда как переменная age
 * не была объявлена, поэтому доступ к ней вызывает ошибку ReferenceError
 */

// console.log(name); // undefined
// console.log(age); // ReferenceError: age is not defined



// Попытка обратиться к пременной до ее объявления вызовет ошибку.

// console.log(a); // ReferenceError: a is not defined
// Uncaught ReferenceError: Cannot access 'a' before initialization


let a = 10;
console.log(a); // 10

// console.log(b); // ReferenceError: b is not defined
const b = 15;
console.log(b); //15
