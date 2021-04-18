// logo
// Автопроверка домашних заданий по JavaScript

// Задача 11 / 32
// Модуль: 
// 2


// Скрыть задание
// Обратная связь
// ↔
// Гравировка украшений
// Задание
// Сервису гравировки украшений нужна функция, которая бы автоматически считала цену гравировки, в зависимости от количества слов и цены за слово.

// Объявлена функция calculateEngravingPrice(message, pricePerWord). Эта функция принимает строку, состоящую из слов разделённых только пробелами (параметр message) и цену гравировки одного слова (параметр pricePerWord).

// Напиши тело функции, чтобы она возвращала общую стоимость гравировки всех слов в строке.

// Тесты
// Объявлена функция calculateEngravingPrice(message, pricePerWord).
// Вызов calculateEngravingPrice('JavaScript у меня в крови', 10) возвращает 50.
// Вызов calculateEngravingPrice('JavaScript у меня в крови', 20) возвращает 100.
// Вызов calculateEngravingPrice('Веб-разработка это творческая работа', 40) возвращает 160.
// Вызов calculateEngravingPrice('Веб-разработка это творческая работа', 20) возвращает 80.
// Редактор JavaScript:
// 1
// function calculateEngravingPrice(message, pricePerWord) {
// 2
//   // Пиши код ниже этой строки
// 3
// ​
// 4
// ​
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

function calculateEngravingPrice(message, pricePerWord) {
  // Пиши код ниже этой строки

  return Number(pricePerWord) * message.split(' ').length;

  // Пиши код выше этой строки
}

console.log(`Вызов calculateEngravingPrice('JavaScript у меня в крови', 10) возвращает 50.`, calculateEngravingPrice('JavaScript у меня в крови', 10));
console.log(`Вызов calculateEngravingPrice('JavaScript у меня в крови', 20) возвращает 100.`, calculateEngravingPrice('JavaScript у меня в крови', 20));
console.log(`Вызов calculateEngravingPrice('Веб-разработка это творческая работа', 40) возвращает 160.`, calculateEngravingPrice('Веб-разработка это творческая работа', 40));
console.log(`Вызов calculateEngravingPrice('Веб-разработка это творческая работа', 20) возвращает 80.`, calculateEngravingPrice('Веб-разработка это творческая работа', 20));