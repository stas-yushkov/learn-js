// logo
// Автопроверка домашних заданий по JavaScript
// Задача 1 / 32
// Модуль: 
// 2


// Скрыть задание
// Обратная связь
// ↔
// Ранний возврат
// В функции может быть больше одного оператора return. Главное помнить, что выполнение функции прерывается когда интерпретатор встречает возврат, и весь код после него будет проигнорирован в текущем вызове функции.

// Возьмём уже знакомую нам функцию проверки совершеннолетия. Она работает, но здесь есть «лишний» код, то есть тело функции можно оптимизировать. В данном случае подойдёт приём (паттерн) «ранний возврат».

// function checkAge(age) {
//   let message;

//   if (age >= 18) {
//     message = 'Вы совершеннолетний человек';
//   } else {
//     message = 'Вы не совершеннолетний человек';
//   }

//   return message;
// }
// Если условие в if выполняется, то есть приводится к true, возвращаем строку 'Вы совершеннолетний человек' и код ниже уже не исполнится.
// Если условие в if не выполняется, то есть приводится к false, возвращаем строку 'Вы не совершеннолетний человек'.
// Используя паттерн «ранний возврат» и то, что выполнение функции прерывается на операторе return, мы избавляемся от лишней переменной и блока else. То есть этот приём помогает «разгладить» ветвления.

// Задание
// Запиши условие в инструкции if так, чтобы функция работала правильно.

// Тесты
// Объявлена функция checkAge(age).
// В выражении проверки возраста использован оператор >=.
// Вызов checkAge(20) возвращает 'Вы совершеннолетний человек'.
// Вызов checkAge(8) возвращает 'Вы не совершеннолетний человек'.
// Вызов checkAge(14) возвращает 'Вы не совершеннолетний человек'.
// Вызов checkAge(38) возвращает 'Вы совершеннолетний человек'.
// Редактор JavaScript:
// 1
// function checkAge(age) {
// 2
//   if () { // Дополни эту строку
// 3
//     return 'Вы совершеннолетний человек';
// 4
//   }
// 5
// ​
// 6
//   return 'Вы не совершеннолетний человек';
// 7
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


function checkAge(age) {
  if (age >= 18) { // Дополни эту строку
    return 'Вы совершеннолетний человек';
  }

  return 'Вы не совершеннолетний человек';
}


console.log(`Вызов checkAge(20) возвращает 'Вы совершеннолетний человек'.`, checkAge(20));
console.log(`Вызов checkAge(8) возвращает 'Вы не совершеннолетний человек'.`, checkAge(8));
console.log(`Вызов checkAge(14) возвращает 'Вы не совершеннолетний человек'.`, checkAge(14));
console.log(`Вызов checkAge(38) возвращает 'Вы совершеннолетний человек'.`, checkAge(38));