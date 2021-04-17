// logo
// Автопроверка домашних заданий по JavaScript

// Задача 33 / 36
// Модуль: 
// 1


// Скрыть задание
// Обратная связь
// ↔
// Форматирование сообщения
// Задание
// Функция formatMessage(message, maxLength) принимает строку (параметр message) и форматирует её, если длина превышает значение в параметре maxLength.

// Дополни код функции так, что если длина строки:

// не превышает maxLength, функция возвращает её в исходном виде.
// больше maxLength, то функция обрезает строку до maxLength символов и добавляет в конец троеточие '...', после чего возвращает укороченную версию.
// Тесты
// Объявлена функция formatMessage(message, maxLength).
// Вызов функции formatMessage('Curabitur ligula sapien', 16) возвращает 'Curabitur ligula...'.
// Вызов функции formatMessage('Curabitur ligula sapien', 23) возвращает 'Curabitur ligula sapien'.
// Вызов функции formatMessage('Vestibulum facilisis purus nec', 20) возвращает 'Vestibulum facilisis...'.
// Вызов функции formatMessage('Vestibulum facilisis purus nec', 30) возвращает 'Vestibulum facilisis purus nec'.
// Вызов функции formatMessage('Nunc sed turpis a felis in nunc fringilla', 15) возвращает 'Nunc sed turpis...'.
// Вызов функции formatMessage('Nunc sed turpis a felis in nunc fringilla', 41) возвращает 'Nunc sed turpis a felis in nunc fringilla'.
// Редактор JavaScript:
// 1
// function formatMessage(message, maxLength) {
// 2
//   let result;
// 3
// // Пиши код ниже этой строки
// 4
// ​
// 5
// // Пиши код выше этой строки
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

  function formatMessage(message, maxLength) {
    let result;
  // Пиши код ниже этой строки
    result = (message.length <= maxLength) ? message : (message.slice(0, maxLength) + '...');
  // Пиши код выше этой строки
    return result;
  }
  
function formatMessage1(message, maxLength) {
    let result;
  // Пиши код ниже этой строки
     if (message.length <= maxLength ) {
      result = message;
    } else {
      result = (message.slice(0, maxLength) + '...');
    }
      

  // Пиши код выше этой строки
    return result;
  }


let ggg = formatMessage1('Curabitur ligula sapien', 16) ;

  alert(ggg) ;
  console.log(`Вызов функции formatMessage('Curabitur ligula sapien', 16) возвращает 'Curabitur ligula...'.`, formatMessage('Curabitur ligula sapien', 16));
  console.log(`Вызов функции formatMessage('Vestibulum facilisis purus nec', 20) возвращает 'Vestibulum facilisis...'.`, formatMessage('Vestibulum facilisis purus nec', 20));
  console.log(`Вызов функции formatMessage('Vestibulum facilisis purus nec', 30) возвращает 'Vestibulum facilisis purus nec'.`, formatMessage('Vestibulum facilisis purus nec', 30));
  console.log(`Вызов функции formatMessage('Nunc sed turpis a felis in nunc fringilla', 15) возвращает 'Nunc sed turpis...'.`, formatMessage('Nunc sed turpis a felis in nunc fringilla', 15));
  console.log(`Вызов функции formatMessage('Nunc sed turpis a felis in nunc fringilla', 41) возвращает 'Nunc sed turpis a felis in nunc fringilla'.`, formatMessage('Nunc sed turpis a felis in nunc fringilla', 41));