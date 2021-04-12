// logo
// Автопроверка домашних заданий по JavaScript

// Задача 14 / 36
// Модуль: 
// 1


// Скрыть задание
// Обратная связь
// ↔
// Операторы сравнения === и !==
// «Нестрогие» операторы == и != выполняют преобразование типов сравниваемых значений, что может привести к ошибкам, особенно у начинающих.

// // ❌ Плохо, выполняется приведение типов
// console.log(5 == '5'); // true
// console.log(5 != '5'); // false
// console.log(1 == true); // true
// console.log(1 != true); // false
// Поэтому для проверки равенства или неравенства двух значений используются операторы === (строгое равенство) и !== (строгое неравенство), которые не выполняют приведение типов операндов.

// // ✅ Хорошо, приведение типов не выполняется
// console.log(5 === '5'); // false
// console.log(5 === 5); // true
// console.log(5 !== '5'); // true
// console.log(5 !== 5); // false
// console.log(1 === true); // false
// console.log(1 !== true); // true
// Задание
// Функция `isValidPassword(password)` проверяет равенство сохранённого и введённого паролей и возвращает результат проверки - буль `true` или `false`. Переменная `SAVED_PASSWORD` хранит значение ранее сохраненного пароля. Введённый пароль передаётся в параметр `password`.
// Присвой переменной isMatch выражение проверки равенства введённого и сохранённого ранее паролей. Результатом выражения проверки должно быть true, если значения совпадают, и false, если нет.

// Тесты
// Объявлена функция isValidPassword(password).
// В выражении проверки паролей использован оператор ===.
// Вызов isValidPassword('mangodab3st') возвращает false.
// Вызов isValidPassword('kiwirul3z') возвращает false.
// Вызов isValidPassword('jqueryismyjam') возвращает true.
// Редактор JavaScript:
// 1
// function isValidPassword(password) {
// 2
//   const SAVED_PASSWORD = 'jqueryismyjam';
// 3
//   // Пиши код ниже этой строки
// 4
//   const isMatch = ;
// 5
// ​
// 6
//   // Пиши код выше этой строки
// 7
//   return isMatch;
// 8
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

function isValidPassword(password) {
  const SAVED_PASSWORD = 'jqueryismyjam';
  // Пиши код ниже этой строки
  const isMatch = SAVED_PASSWORD === password;
  console.log(isMatch);
  // Пиши код выше этой строки
  return isMatch;
}

isValidPassword('mangodab3st')
isValidPassword('kiwirul3z')
isValidPassword('jqueryismyjam')