// logo
// Автопроверка домашних заданий по JavaScript

// Задача 16 / 41
// Модуль:
// 3

// Скрыть задание
// Обратная связь
// ↔
// Задача. Расходы на зарплату
// Задание
// Напиши функцию countTotalSalary(salaries) которая принимает объект зарплат, где имя свойства это имя сотрудника, а значение свойства это зарплата. Функция должна рассчитать общую сумму зарплат сотрудников и вернуть её. Используй переменную totalSalary для хранения общей суммы зарплаты.

// Тесты
// Объявлена функция countTotalSalary(salaries).
// Вызов countTotalSalary({}) возвращает 0.
// Вызов countTotalSalary({ mango: 100, poly: 150, alfred: 80 }) возвращает 330.
// Вызов countTotalSalary({ kiwi: 200, poly: 50, ajax: 150 }) возвращает 400.
// Функция учитывает только собственные свойства объекта.
// Редактор JavaScript:
// 1
// function countTotalSalary(salaries) {
// 2
//   let totalSalary = 0;
// 3
//   // Пиши код ниже этой строки
// 4
// ​
// 5
//   // Пиши код выше этой строки
// 6
//   return totalSalary;
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

function countTotalSalary(salaries) {
  let totalSalary = 0;
  // Пиши код ниже этой строки
  for (const salary of Object.values(salaries)) {
    totalSalary += salary;
  }
  // Пиши код выше этой строки
  return totalSalary;
}

console.log(countTotalSalary({ mango: 100, poly: 150, alfred: 80 }));
