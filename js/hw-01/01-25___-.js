// logo
// Автопроверка домашних заданий по JavaScript

// Задача 25 / 36
// Модуль: 
// 1


// Скрыть задание
// Обратная связь
// ↔
// Тернарный оператор
// Тернарный оператор используется как более синтаксически краткая замена инструкции if...else, когда одной и той же переменной необходимо присвоить разные значения по условию.

// <условие> ? <выражение если условие истинно> : <выражение если условие ложно>
// Работает по такой схеме:

// Вычисляется условие.
// Если условие истинно, то есть приводится к true, вычисляется выражение после ?.
// Если условие ложно, то есть приводится к false, вычисляется выражение после :.
// Значение вычисленного выражения возвращается как результат работы тернарного оператора.
// let type;
// const age = 20;

// if (age >= 18) {
//   type = 'adult';
// } else {
//   type = 'child';
// }

// console.log(type); // 'adult'
// Выполним рефакторинг, заменив if...else тернарным оператором.

// const age = 20;
// const type = age >= 18 ? 'adult' : 'child';
// console.log(type); // 'adult'
// Внимание
// Тернарный оператор должен использоваться в простых операциях присваивания или возврата. Применять его для замены сложных ветвлений — плохая практика (антипаттерн).

// Задание
// Выполни рефакторинг решения задачи «Склад товаров», заменив инструкцию if...else тернарным оператором.

// Тесты
// Объявлена функция checkStorage(available, ordered).
// Использован тернарный оператор.
// Вызов checkStorage(100, 50) возвращает 'Заказ оформлен, с вами свяжется менеджер'.
// Вызов checkStorage(100, 130) возвращает 'На складе недостаточно товаров!'.
// Вызов checkStorage(200, 20) возвращает 'Заказ оформлен, с вами свяжется менеджер'.
// Вызов checkStorage(200, 150) возвращает 'Заказ оформлен, с вами свяжется менеджер'.
// Вызов checkStorage(150, 180) возвращает 'На складе недостаточно товаров!'.
// Редактор JavaScript:
// 1
// function checkStorage(available, ordered) {
// 2
//   let message;
// 3
//   // Пиши код ниже этой строки
// 4
// ​
// 5
//   if (ordered > available) {
// 6
//     message = 'На складе недостаточно товаров!';
// 7
//   } else {
// 8
//     message = 'Заказ оформлен, с вами свяжется менеджер';
// 9
//   }
// 10
// ​
// 11
//   // Пиши код выше этой строки
// 12
//   return message;
// 13
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

function checkStorage(available, ordered) {
  let message;
  // Пиши код ниже этой строки
  message = ordered > available ? 'На складе недостаточно товаров!' : 'Заказ оформлен, с вами свяжется менеджер';
  // Пиши код выше этой строки
  return message;
}


console.log("Вызов checkStorage(100, 50) возвращает 'Заказ оформлен, с вами свяжется менеджер'", checkStorage(100, 50))
console.log("Вызов checkStorage(100, 130) возвращает 'На складе недостаточно товаров!'", checkStorage(100, 130))
console.log("Вызов checkStorage(200, 20) возвращает 'Заказ оформлен, с вами свяжется менеджер'", checkStorage(200, 20))
console.log("Вызов checkStorage(200, 150) возвращает 'Заказ оформлен, с вами свяжется менеджер'", checkStorage(200, 150))
console.log("Вызов checkStorage(150, 180) возвращает 'На складе недостаточно товаров!'", checkStorage(150, 180))