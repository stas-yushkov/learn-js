// logo
// Автопроверка домашних заданий по JavaScript

// Задача 36 / 36
// Модуль: 
// 1


// Скрыть задание
// Обратная связь
// ↔
// Проверка спама
// Задание
// Функция checkForSpam(message) принимает строку (параметр message), проверяет её на содержание запрещенных слов spam и sale, и возвращает результат проверки. Слова в строке параметра message могут быть в произвольном регистре, например SPAM или sAlE.

// Если нашли запрещенное слово (spam или sale) то функция возвращает буль true.
// Если в строке нет запрещенных слов, функция возвращает буль false.
// Тесты
// Объявлена функция checkForSpam(message).
// Вызов функции checkForSpam('Latest technology news') возвращает false.
// Вызов функции checkForSpam('JavaScript weekly newsletter')возвращает false.
// Вызов функции checkForSpam('Get best sale offers now!') возвращает true.
// Вызов функции checkForSpam('Amazing SalE, only tonight!') возвращает true.
// Вызов функции checkForSpam('Trust me, this is not a spam message') возвращает true.
// Вызов функции checkForSpam('Get rid of sPaM emails. Our book in on sale!') возвращает true.
// Вызов функции checkForSpam('[SPAM] How to earn fast money?') возвращает true.
// Редактор JavaScript:
// 1
// function checkForSpam(message) {
// 2
//   let result;
// 3
//   // Пиши код ниже этой строки
// 4
 
// 5
//   // Пиши код выше этой строки
// 6
//   return result;
// 7
// }
// 8
// ​
// Проверить
// Сбросить
// Скрыть секцию результатов
// Результаты:
// (обновляются при нажатии на кнопку - Проверить)

// ©
// 2020
// |
// Политика конфиденциальности


function checkForSpam(message) {
  let result;
  // Пиши код ниже этой строки
  result = message.toLowerCase().includes('spam') || message.toLowerCase().includes('sale')
 
  // Пиши код выше этой строки
  return result;
}



console.log(`Вызов функции checkForSpam('JavaScript weekly newsletter')возвращает false.`, checkForSpam('JavaScript weekly newsletter'));
console.log(`Вызов функции checkForSpam('Latest technology news') возвращает false.`, checkForSpam('Latest technology news') );
console.log(`Вызов функции checkForSpam('Get best sale offers now!') возвращает true.`, checkForSpam('Get best sale offers now!') );
console.log(`Вызов функции checkForSpam('Amazing SalE, only tonight!') возвращает true.`, checkForSpam('Amazing SalE, only tonight!') );
console.log(`Вызов функции checkForSpam('Trust me, this is not a spam message') возвращает true.`, checkForSpam('Trust me, this is not a spam message') );
console.log(`Вызов функции checkForSpam('Get rid of sPaM emails. Our book in on sale!') возвращает true.`, checkForSpam('Get rid of sPaM emails. Our book in on sale!') );
console.log(`Вызов функции checkForSpam('[SPAM] How to earn fast money?') возвращает true.`, checkForSpam('[SPAM] How to earn fast money?') );