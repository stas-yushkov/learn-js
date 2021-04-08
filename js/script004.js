"use strict"
let name;

/*
 * Переменная name объявлена, но не инициализирована, поэтому
 * ее значение undefined (не определено), тогда как переменная age
 * не была объявлена, поэтому доступ к ней вызывает ошибку ReferenceError
 */
console.log(name); // undefined
console.log(age); // ReferenceError: age is not defined
