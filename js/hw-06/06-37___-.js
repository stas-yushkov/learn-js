// logo
// Автопроверка домашних заданий по JavaScript

// Задача 37 / 44
// Модуль:
// 6

// Скрыть задание
// Обратная связь
// ↔
// Сортировка объектов
// При работе с массивом объектов сортировка выполняется по числовому или строчному значению какого-то свойства. Например, есть группа студентов с баллами за тест. Необходимо отсортировать массив объектов по возрастанию и убыванию количества баллов, и по имени студента.

// const students = [
//   { name: 'Манго', score: 83 },
//   { name: 'Поли', score: 59 },
//   { name: 'Аякс', score: 37 },
//   { name: 'Киви', score: 94 },
// ];

// const inAscendingScoreOrder = students.sort(
//   (firstStudent, secondStudent) => firstStudent.score - secondStudent.score
// );

// const inDescendingScoreOrder = students.sort(
//   (firstStudent, secondStudent) => secondStudent.score - firstStudent.score
// );

// const inAlphabeticalOrder = students.sort((firstStudent, secondStudent) =>
//   firstStudent.name.localeCompare(secondStudent.name)
// );
// Задание
// Дополни код так, чтобы:

// В переменной sortedByAuthorName получился массив книг отсортированный по имени автора в алфавитном порядке.
// В переменной sortedByReversedAuthorName получился массив книг отсортированный по имени автора в обратном алфавитном порядке.
// В переменной sortedByAscendingRating получился массив книг отсортированный по возрастанию рейтинга.
// В переменной sortedByDescentingRating получился массив книг отсортированный по убыванию рейтинга.
// Тесты
// Объявлена переменная books.
// Значение переменной books это исходный массив объектов книг.
// Объявлена переменная sortedByAuthorName.
// Значение переменной sortedByAuthorName это массив книг отсортированный по имени автора в алфавитном порядке.
// Объявлена переменная sortedByReversedAuthorName.
// Значение переменной sortedByReversedAuthorName это массив книг отсортированный по имени автора в обратном алфавитном порядке.
// Объявлена переменная sortedByAscendingRating.
// Значение переменной sortedByAscendingRating это массив книг отсортированный по возрастанию рейтинга.
// Объявлена переменная sortedByDescentingRating.
// Значение переменной sortedByDescentingRating это массив книг отсортированный по убыванию рейтинга.
// Для перебора массива books используется метод sort().
// Редактор JavaScript:
// 1
// const books = [
// 2
//   { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
// 3
//   { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
// 4
//   { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
// 5
//   { title: 'Красна как кровь', author: 'Ли Танит', rating: 7.94 },
// 6
//   { title: 'Враг Божий', author: 'Бернард Корнуэлл', rating: 8.67 }
// 7
// ];
// 8
// // Пиши код ниже этой строки
// 9
// ​
// 10
// const sortedByAuthorName = books;
// 11
// ​
// 12
// const sortedByReversedAuthorName = books;
// 13
// ​
// 14
// const sortedByAscendingRating = books;
// 15
// ​
// 16
// const sortedByDescentingRating = books;
// Проверить
// Сбросить
// Скрыть секцию результатов
// Результаты:
// (обновляются при нажатии на кнопку - Проверить)

// ©
// 2020
// |
// Политика конфиденциальности

const books = [
  { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
  { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
  { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
  { title: 'Красна как кровь', author: 'Ли Танит', rating: 7.94 },
  { title: 'Враг Божий', author: 'Бернард Корнуэлл', rating: 8.67 },
];
// Пиши код ниже этой строки

const sortedByAuthorName = [...books].sort((a, b) =>
  a.author.localeCompare(b.author),
);
console.log('🚀 ~ sortedByAuthorName', sortedByAuthorName);

const sortedByReversedAuthorName = [...books].sort((a, b) =>
  b.author.localeCompare(a.author),
);
console.log('🚀 ~ sortedByReversedAuthorName', sortedByReversedAuthorName);

const sortedByAscendingRating = [...books].sort((a, b) => a.rating - b.rating);
console.log('🚀 ~ sortedByAscendingRating', sortedByAscendingRating);

const sortedByDescentingRating = [...books].sort((a, b) => b.rating - a.rating);
console.log('🚀 ~ sortedByDescentingRating', sortedByDescentingRating);
