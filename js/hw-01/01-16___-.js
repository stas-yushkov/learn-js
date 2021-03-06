// logo
// Автопроверка домашних заданий по JavaScript

// Задача 16 / 36
// Модуль: 
// 1


// Скрыть задание
// Обратная связь
// ↔
// Задача: склад товаров
// Задание
// Функция checkStorage(available, ordered) проверяет возможность оформления заказа и возвращает сообщение о результате. Она объявляет два параметра, значения которых будут задаваться во время её вызова:

// available - общее количество товаров на складе
// ordered - единиц товара в заказе
// Используя ветвления дополни код функции так, что:

// Если в заказе указано число, превышающее количество товаров на складе, в переменную message записывается строка 'На складе недостаточно товаров!'.
// В противном случае записывается строка 'Заказ оформлен, с вами свяжется менеджер'.
// Тесты
// Объявлена функция checkStorage(available, ordered).
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
//   // Пиши код выше этой строки
// 6
//   return message;
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


function checkStorage(available, ordered) {
  let message;
  // Пиши код ниже этой строки
  if (ordered > available) {
    message = 'На складе недостаточно товаров!';
  } else {
    message = 'Заказ оформлен, с вами свяжется менеджер';
  }

  // Пиши код выше этой строки
  return message;
}

console.log("available 2 ordered 12", checkStorage(2,12) )
console.log("available 12 ordered 12", checkStorage(12,12) )
console.log("available 12 ordered 33", checkStorage(12,33) )
