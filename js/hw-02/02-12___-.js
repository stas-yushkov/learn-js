// logo
// Автопроверка домашних заданий по JavaScript

// Задача 12 / 32
// Модуль: 
// 2


// Скрыть задание
// Обратная связь
// ↔
// Метод массива join()
// Метод массивов join(delimeter) позволяет соединить элементы массива в строку. В строке элементы будут разделены символом или группой символов указанных в delimeter. То есть это операция обратная методу строк split(delimeter).

// const words = ['JavaScript', 'это', 'интересно'];
// console.log(words.join('')); // 'JavaScriptэтоинтересно'
// console.log(words.join(' ')); // 'JavaScript это интересно'
// console.log(words.join('*')); // 'JavaScript*это*интересно'
// Задание
// Дополни код функции makeStringFromArray(array, delimeter) так, чтобы она возвращала в переменной string результат соединения элементов массива array c разделителем delimeter - строку.

// Тесты
// Объявлена функция makeStringFromArray(array, delimeter).
// Вызов makeStringFromArray(['Манго', 'спешит', 'на', 'поезд'], ' ') возвращает 'Манго спешит на поезд'.
// Вызов makeStringFromArray(['М', 'а', 'н', 'г', 'о'], '')) возвращает 'Манго'.
// Вызов makeStringFromArray(['лучшее', 'за', 'неделю'], '_') возвращает 'лучшее_за_неделю'.
// Редактор JavaScript:
// 1
// function makeStringFromArray(array, delimeter) {
// 2
//   let string;
// 3
//   // Пиши код ниже этой строки
// 4
 
// 5
 
// 6
 
// 7
//   // Пиши код выше этой строки
// 8
//   return string;
// 9
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


function makeStringFromArray(array, delimeter) {
  let string;
  // Пиши код ниже этой строки
 
  switch (delimeter) {
    case ' ':
      string = array.join(delimeter)
      break;
  
    case '':
      string = array.join(delimeter)
      break;
  
    case '_':
      string = array.join(delimeter)
      break;
  
    default:
      string = array.join(delimeter)
      break;
  }
 
  // Пиши код выше этой строки
  return string;
}

// Вызов makeStringFromArray(['Манго', 'спешит', 'на', 'поезд'], ' ') возвращает 'Манго спешит на поезд'.
// Вызов makeStringFromArray(['М', 'а', 'н', 'г', 'о'], '')) возвращает 'Манго'.
// Вызов makeStringFromArray(['лучшее', 'за', 'неделю'], '_') возвращает 'лучшее_за_неделю'.