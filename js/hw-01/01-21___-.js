// logo
// Автопроверка домашних заданий по JavaScript

// Задача 21 / 36
// Модуль: 
// 1


// Скрыть задание
// Обратная связь
// ↔
// Логическое «И» (оператор &&)
// Логические операторы используются для проверки условий с множественными выражениями, например в ветвлениях.

// Оператор && приводит все операнды к булю и возвращает значение одного из них. Левый операнд, если его можно привести к false, и правый в остальных случаях.

// выражение && выражение
// В следующем примере оба условия вернут true, поэтому результатом всего выражения будет true - вернётся значение правого операнда.

// const age = 20;
// console.log(age > 10 && age < 30); // true && true -> true
// Если хотя бы один из операндов будет приведён к false, результатом выражения будет этот операнд.

// const age = 50;
// console.log(age > 10 && age < 30); // true && false -> false
// console.log(age > 80 && age < 120); // false && true -> false
// То есть логическое «И» запинается на лжи и возвращает то, на чём запнулось или последний операнд.

// console.log(true && false); // false
// console.log(false && true); // false
// console.log(true && true); // true

// console.log(3 && false); // false
// console.log(false && 3); // false
// console.log(3 && true); // true
// console.log(true && 3); // 3
// Полезно
// Запомните шесть значений, которые в булевом преобразовании приводятся к `false`: `0`, `NaN`, `null`, `undefined`, пустая строка `""` или `''` и само значение `false`. Абсолютно всё остальное приводится к `true`.

// console.log(1 && 5); // true && true -> 5
// console.log(5 && 1); // true && true -> 1
// console.log(0 && 2); // false && true -> 0
// console.log(2 && 0); // true && false -> 0
// console.log('' && 'Манго'); // false && true -> ''
// console.log('Манго' && ''); // true && false -> ''
// console.log('Манго' && 'Поли'); // true && true -> 'Поли'
// console.log('Поли' && 'Манго'); // true && true -> 'Манго'
// Задание
// Функция isNumberInRange(start, end, number) проверяет, входит ли число в промежуток. Она объявляет три параметра, значения которых будут задаваться во время её вызова:

// number - число, вхождение которого проверяется
// start - начало числового промежутка
// end - конец числового промежутка
// Присвой переменной isInRange выражение проверки вхождения number в числовой промеждуток от srart до end. То есть число должно быть больше либо равно start и меньше либо равно end. Результатом выражения проверки будет буль true или false.

// Тесты
// Объявлена функция isNumberInRange(start, end, number).
// В выражении проверки использован оператор &&.
// Вызов isNumberInRange(10, 30, 17) возвращает true.
// Вызов isNumberInRange(10, 30, 5) возвращает false.
// Вызов isNumberInRange(20, 50, 24) возвращает true.
// Вызов isNumberInRange(20, 50, 76) возвращает false.
// Редактор JavaScript:
// 1
// function isNumberInRange(start, end, number) {
// 2
//   const isInRange = ; // дополни эту строку
// 3
// ​
// 4
//   return isInRange;
// 5
// }
// Проверить
// Сбросить
// Скрыть секцию результатов
// Результаты:
// (обновляются при нажатии на кнопку - Проверить)

// ©
// 2020
// |
// Политика конфиденциальности

// console.log(true && false); // false
// console.log(false && true); // false
// console.log(true && true); // true

// console.log(3 && false); // false
// console.log(false && 3); // false
// console.log(3 && true); // true
// console.log(true && 3); // 3
// console.log('left' && 'right'); // 3
// console.log('first' && 'second' && 'last'); // 3
// console.log('first' && false && 'last'); // 3

// console.log(1 && 5); // true && true -> 5
// console.log(5 && 1); // true && true -> 1
// console.log(0 && 2); // false && true -> 0
// console.log(2 && 0); // true && false -> 0
// console.log('' && 'Манго'); // false && true -> ''
// console.log('Манго' && ''); // true && false -> ''
// console.log('Манго' && 'Поли'); // true && true -> 'Поли'
// console.log('Поли' && 'Манго'); // true && true -> 'Манго'


// Запомните шесть значений, которые в булевом преобразовании приводятся к `false`: `0`, `NaN`, `null`, `undefined`, пустая строка `""` или `''` и само значение `false`. Абсолютно всё остальное приводится к `true`.
// console.log(false && 0 && NaN && null && undefined && "" && '' && false && true);
// console.log('false' && '0' && 'NaN' && 'null' && 'undefined' && "7" && '7' && 'false' && true && '22');

// console.log(1, '   false    ', typeof(false));
// console.log(2, '   0        ', typeof(0));
// console.log(3, '   NaN      ', typeof (NaN));
// console.log(4, "   null     ", typeof (null));
// console.log(5, "   undefined", typeof (undefined)); // console.log('cvd', typeof (cvd));
// console.log(6.1, ` ""       `, typeof (""));
// console.log(6.2, ` ''       `, typeof (''));



function isNumberInRange(start, end, number) {
  const isInRange = (number >= start) && (number <= end) ; // дополни эту строку

  return isInRange;
}



// console.log(isNumberInRange(10, 30, 17));
// console.log(isNumberInRange(10, 30, 5) );
// console.log(isNumberInRange(20, 50, 24));
// console.log(isNumberInRange(20, 50, 76));


let start = 10;
let end = 30;
let number = 17;
console.log(`start = ${start}, end = ${end}, number = ${number}, so it's ${isNumberInRange(start, end, number)} that number is in range`);

start = 10;
end = 30;
number =5;
console.log(`start = ${start}, end = ${end}, number = ${number}, so it's ${isNumberInRange(start, end, number)} that number is in range`);

start = 20;
end = 50;
number = 24;
console.log(`start = ${start}, end = ${end}, number = ${number}, so it's ${isNumberInRange(start, end, number)} that number is in range`);

start = 20;
end = 50;
number = 76;
console.log(`start = ${start}, end = ${end}, number = ${number}, so it's ${isNumberInRange(start, end, number)} that number is in range`);

