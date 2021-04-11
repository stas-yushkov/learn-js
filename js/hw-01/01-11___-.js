// logo
// Автопроверка домашних заданий по JavaScript

// Задача 11 / 36
// Модуль: 
// 1


// Скрыть задание
// Обратная связь
// ↔
// Математические операторы 2.0
// Задание
// Функция calculateTotalPrice считает и возвращает общую сумму покупки. Она принимает два параметра, значения которых будут задаваться во время её вызова.

// orderedQuantity - количество единиц товара в заказе;
// pricePerItem - цена одной единицы товара.
// Дополни код функции так, чтобы в переменную totalPrice записывалась общая сумма покупки, результат умножения кол-ва товаров на цену одного.

// Тесты
// Объявлена функция calculateTotalPrice (orderedQuantity, pricePerItem).
// Вызов calculateTotalPrice(5, 100) возвращает 500.
// Вызов calculateTotalPrice(8, 60) возвращает 480.
// Вызов calculateTotalPrice('3, 400) возвращает 1200.
// Вызов calculateTotalPrice(1, 3500) возвращает 3500.
// Вызов calculateTotalPrice(12, 70) возвращает 840.
// Вызов функции со случайными, но валидными аргументами, возвращает правильное значение.
// Редактор JavaScript:
// 1
// function calculateTotalPrice (orderedQuantity, pricePerItem) {
// 2
//   // Пиши код ниже этой строки
// 3
//   const totalPrice = ;
// 4
// ​
// 5
//   // Пиши код выше этой строки
// 6
//   return totalPrice;
// 7
// };
// Проверить
// Сбросить
// Скрыть секцию результатов
// Результаты:
// (обновляются при нажатии на кнопку - Проверить)

// ©
// 2020
// |
// Политика конфиденциальности

function calculateTotalPrice (orderedQuantity, pricePerItem) {
  // Пиши код ниже этой строки
  const totalPrice = orderedQuantity * pricePerItem;
  console.log(totalPrice)
  // Пиши код выше этой строки
  return totalPrice;
};


calculateTotalPrice(1,2);