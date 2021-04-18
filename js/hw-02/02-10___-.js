// logo
// Автопроверка домашних заданий по JavaScript

// Задача 10 / 32
// Модуль: 
// 2


// Скрыть задание
// Обратная связь
// ↔
// Метод строк split()
// Метод split(delimeter) позволяет превратить строку в массив, «разбив» его по разделителю delimeter. Если разделитель это пустая строка, то получится массив отдельных символов. Разделителем может быть один или несколько символов.

// const name = 'Манго';
// console.log(name.split('')); // ['M', 'a', 'н', 'г', 'о']

// const message = 'JavaScript это интересно';
// console.log(message.split(' ')); // ['JavaScript', 'это', 'интересно']
// Задание
// Дополни код функции splitMessage(message, delimeter) так, чтобы она возвращала в переменной words результат разделения строки message по разделителю delimeter - массив строк.

// Тесты
// Объявлена функция splitMessage(message, delimeter).
// Вызов splitMessage('Манго спешит на поезд', ' ') возвращает ['Манго', 'спешит', 'на', 'поезд'].
// Вызов splitMessage('Манго', '') возвращает ['М', 'а', 'н', 'г', 'о'].
// Вызов splitMessage('лучшее_за_неделю', '_') возвращает ['лучшее', 'за', 'неделю'].
// Редактор JavaScript:
// 1
// function splitMessage(message, delimeter) {
// 2
//   let words;
// 3
//   // Пиши код ниже этой строки
// 4
  
// 5
  
// 6
  
// 7
//   // Пиши код выше этой строки
// 8
//   return words;
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

function splitMessage(message, delimeter) {
  let words;
  // Пиши код ниже этой строки
  switch (delimeter) {
    case ' ':
      words = message.split(delimeter);
      break;
        
    case '':
      words = message.split(delimeter);
      break;

    case '_':
      words = message.split(delimeter);
      break;
  
    default:
      words = message.split(delimeter);
      break;
  }

  
  
  // Пиши код выше этой строки
  return words;
}

// Вызов splitMessage('Манго спешит на поезд', ' ') возвращает ['Манго', 'спешит', 'на', 'поезд'].
// Вызов splitMessage('Манго', '') возвращает ['М', 'а', 'н', 'г', 'о'].
// Вызов splitMessage('лучшее_за_неделю', '_') возвращает ['лучшее', 'за', 'неделю'].