// logo
// Автопроверка домашних заданий по JavaScript

// Задача 17 / 36
// Модуль: 
// 1


// Скрыть задание
// Обратная связь
// ↔
// Оператор присвоения с добавлением/вычитанием/умножением/делением
// Комбинированные операторы это более краткий способ присвоить переменной новое значение основываясь на её предыдущем значении.

// Будем увеличивать значение переменной age на единицу от предыдущего, имитируя обновление возраста после дня рождения пользователя.

// let age = 25;
// // Классическая запись
// age = age + 1;
// console.log(age); // 26
// Сначала выполняется правая часть выражения. Вместо age подставляется 25, выполняется операция сложения и в переменную age записывается 26.

// Выполним рефакторинг операции обновления возраста, используя комбинированный оператор присвоения с добавлением.

// let age = 25;
// // Просто более краткая запись, работает также
// age += 1;
// console.log(age); // 26
// Задание
// Замени выражения со стандартными математеческими операторами на комбинированный оператор присвоения с добавлением, вычитанием, умножением и делением.

// Тесты
// Значение переменной a равно 7.
// Использован оператор +=.
// Значение переменной b равно 6.
// Использован оператор -=.
// Значение переменной c равно 45.
// Использован оператор *=.
// Значение переменной d равно 2.
// Использован оператор /=.
// Редактор JavaScript:
// let a = 5;
// let b = 10;
// let c = 15;
// let d = 20;

// // Пиши код ниже этой строки
// a = a + 2;
// b = b - 4;
// c = c * 3;
// d = d / 10;
// 1
// let a = 5;
// 2
// let b = 10;
// 3
// let c = 15;
// 4
// let d = 20;
// 5
// ​
// 6
// // Пиши код ниже этой строки
// 7
// a = a + 2;
// 8
// b = b - 4;
// 9
// c = c * 3;
// 10
// d = d / 10;
// Проверить
// Сбросить
// Скрыть секцию результатов
// Результаты:
// (обновляются при нажатии на кнопку - Проверить)

// ©
// 2020
// |
// Политика конфиденциальности

let a = 5;
let b = 10;
let c = 15;
let d = 20;

// Пиши код ниже этой строки
a += 2;
b -= 4;
c *= 3;
d /= 10;

console.log("a",a)
console.log("b",b)
console.log("c",c)
console.log("d",d)