/*
 * Операторы сравнения
 */

// console.log(15 < 3);

/*
 * Приведение (преобразование) типов к числу
 */

// console.log('10' > 5);

/*
 * Операторы равенства (== и ===) и неравества (!= и !==)
 * ✅ «ВСЕГДА ИСПОЛЬЗУЕМ СТРОГОЕ РАВЕНСТВО (===) и НЕРАВЕНСТВО (!==)»
 */

const isEqual = 1 === true;

console.log(isEqual);


console.log(1===true);
console.log(1==true);
// console.log(Boolean(0));
// к false в логическом преобразовании: 0, NaN, null, undefined, пустая строка: "" или '', false.Абсолютно все остальное приводится к true.
 console.log('0',Boolean(0));
 console.log('NaN',Boolean(NaN));
 console.log('null',Boolean(null));
 console.log('undefined',Boolean(undefined));
 console.log('""',Boolean(""));
 console.log("''",Boolean(''));
 console.log('false',Boolean(false));