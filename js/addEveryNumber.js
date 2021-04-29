const addEveryNumber = function (lastDay, firstDay = 1) {
  let total = 0;

  for (let day = firstDay; day <= lastDay; day++) {
    total += day;
  }

  return total;
};

console.log(addEveryNumber(365, 365 - 31));
console.log(addEveryNumber(Math.round(365 / 2)));
console.log(addEveryNumber(31, 1) * 12);
console.log(Math.round(365 / 2));

console.log(`11000*12= ${11000 * 12} + 9000*12 ${9000 * 12}`);

console.log(addEveryNumber(31, 1) * 12);
