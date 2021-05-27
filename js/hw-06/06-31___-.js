// logo
// Автопроверка домашних заданий по JavaScript

// Задача 31 / 44
// Модуль:
// 6

// Скрыть задание
// Обратная связь
// ↔
// Метод reduce() и массив объектов
// При работе с массивом объектов выполняется редуцирование по значению какого-то свойства. Например, есть массив студентов с баллами за тест. Необходимо получить средний бал.

// const students = [
//   { name: 'Манго', score: 83 },
//   { name: 'Поли', score: 59 },
//   { name: 'Аякс', score: 37 },
//   { name: 'Киви', score: 94 },
//   { name: 'Хьюстон', score: 64 },
// ];

// // Название аккумулятора может быть произвольным, это просто параметр функции
// const totalScore = students.reduce((total, student) => {
//   return total + student.score;
// }, 0);

// const averageScore = totalScore / students.length;
// Задание
// Нашему сервису необходимо рассчитать среднее время проведённое в одной игре для каждого игрока, и получить общую сумму этих времён. Рассчитать время для каждого из игроков, можно разделив его время (свойство playtime) на количество игр (свойство gamesPlayed).

// Тесты
// Объявлена переменная players.
// Значение переменной players это массив объектов игроков.
// Объявлена переменная totalAveragePlaytimePerGame.
// Значение переменной totalAveragePlaytimePerGame это число 1023.
// Для перебора массива players используется метод reduce().
// Редактор JavaScript:
// 1
// const players = [
// 2
//   { name: 'Манго', playtime: 1270, gamesPlayed: 4 },
// 3
//   { name: 'Поли', playtime: 469, gamesPlayed: 2 },
// 4
//   { name: 'Аякс', playtime: 690, gamesPlayed: 3 },
// 5
//   { name: 'Киви', playtime: 241, gamesPlayed: 1 },
// 6
// ];
// 7
// // Пиши код ниже этой строки
// 8
// ​
// 9
// const totalAveragePlaytimePerGame = players;
// 10
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

const players = [
  { name: 'Манго', playtime: 1270, gamesPlayed: 4 },
  { name: 'Поли', playtime: 469, gamesPlayed: 2 },
  { name: 'Аякс', playtime: 690, gamesPlayed: 3 },
  { name: 'Киви', playtime: 241, gamesPlayed: 1 },
];
// Пиши код ниже этой строки

const totalAveragePlaytimePerGame = players.reduce(
  (averagePlayersPlaytime, { playtime, gamesPlayed }) => {
    return (averagePlayersPlaytime += playtime / gamesPlayed);
  },
  0,
);
console.log('🚀 ~ totalAveragePlaytimePerGame', totalAveragePlaytimePerGame);
