// logo
// Автопроверка домашних заданий по JavaScript

// Задача 21 / 32
// Модуль: 
// 2


// Скрыть задание
// Обратная связь
// ↔
// Поиск самого длинного слова
// Задание
// Напиши функцию findLongestWord(string) которая принимает произвольную строку состоящую только из слов разделённых пробелом (параметр string) и возвращает самое длинное слово в этой строке.

// Тесты
// Объявлена функция findLongestWord(string).
// Вызов функции findLongestWord('The quick brown fox jumped over the lazy dog') возвращает jumped.
// Вызов функции findLongestWord('Google do a roll') возвращает Google.
// Вызов функции findLongestWord('May the force be with you') возвращает force.
// Вызов функции findLongestWord() со случайной строкой возвращает правильное значение.
// Редактор JavaScript:
// 1
// function findLongestWord(string) {
// 2
//   // Пиши код ниже этой строки
// 3
  
// 4
  
// 5
// ​
// 6
//   // Пиши код выше этой строки
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



// function findLongestWord(string) {
//   // Пиши код ниже этой строки
//   const words = string.split(' ');
//   let wordIndex = 0;
//   for (let i = 0; i  < words.length; i  += 1) {
//     // wordIndex  = words[i];
//     if (words[wordIndex].length < words[i].length) {
//       wordIndex = i;
//     }

//   }
  
//   return words[wordIndex];

//   // Пиши код выше этой строки
// }

// console.log('LongestWord :', findLongestWord('The quick brown fox jumped over the lazy dog'));

// Напиши функцию findLongestWord(string) которая 
// принимает произвольную строку
// состоящую только из слов разделённых пробелом(параметр string) и
// возвращает 
// самое длинное 
// слово в этой строке.

// Вызов функции findLongestWord('The quick brown fox jumped over the lazy dog') возвращает jumped.

// разделить параметр на слова по пробелу и записать в массив
// создать переменную wordIndex = 0
// перебрать массив и если длинна i-го элемента больше чем у wordIndex, wordIndex  = i.
// в ретурн массив[wordIndex]

function findLongestWord(string) {
  // Пиши код ниже этой строки
  const words = string.split(' ');
  let LongestWord = words[0];

  for (const word of words) {
    if (LongestWord.length < word.length) {
      LongestWord = word;
    }
  }
  
  return LongestWord;
  // Пиши код выше этой строки
}

console.log('LongestWord :', findLongestWord('The quick brown fox jumped over the lazy dog'));