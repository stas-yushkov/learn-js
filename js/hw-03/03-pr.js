// // // // // // // const qwe = { someKey: 'qwe' };

// // // // // // // console.log(qwe);
// // // // // // ////////////////////////////////////////////////////////////////
// // // // // // const user = {
// // // // // //   name: 'John',
// // // // // //   age: 20,
// // // // // //   hobby: 'tennis',
// // // // // //   premium: true,
// // // // // // };

// // // // // // // user.mood = 'asdsa';
// // // // // // // user['mood'] = 'hdfr';

// // // // // // function changeUser(obj) {
// // // // // //   obj.mood = 'happy';
// // // // // //   obj.hobby = 'skydiving';
// // // // // //   obj.premium = false;

// // // // // //   for (const key of Object.keys(obj)) {
// // // // // //     console.log(`${key}: ${obj[key]}`);
// // // // // //   }

// // // // // //   return obj;
// // // // // // }

// // // // // // console.log(changeUser(user));

// // // // // // ////////////////////////////////////////////////////////////////
// // // // // const salaries = {
// // // // //   John: 100,
// // // // //   Ann: 160,
// // // // //   Pete: 130,
// // // // // };

// // // // // // console.log(typeof null);

// // // // // function sumSalaries(objSalaries) {
// // // // //   if (!objSalaries) return 0; //если обьект пуст, тоесть null, вернуть ноль
// // // // //   let sum = 0;

// // // // //   // const objSalaries = {};

// // // // //   // console.log({}); //{}
// // // // //   // console.log(typeof {}); //object
// // // // //   // console.log(Boolean({})); //true
// // // // //   // console.log(objSalaries); //{John: 100, Ann: 160, Pete: 130}
// // // // //   // console.log(!objSalaries); //false

// // // // //   for (const value of Object.values(objSalaries)) {
// // // // //     // console.log(value);
// // // // //     sum += value;
// // // // //   }

// // // // //   return sum;
// // // // // }

// // // // // console.log(sumSalaries(salaries));

// // // // // // ////////////////////////////////////////////////////////////////
// // // // const stones = [
// // // //   { name: 'Изумруд', price: 1300, quantity: 4 },
// // // //   { name: 'Бриллиант', price: 2700, quantity: 3 },
// // // //   { name: 'Сапфир', price: 400, quantity: 7 },
// // // //   { name: 'Щебень', price: 200, quantity: 2 },
// // // // ];

// // // // function calcTotalPrice(stones, stoneName) {
// // // //   let sum = 0;
// // // //   for (const stone of stones) {
// // // //     if (stone['name'] === stoneName) {
// // // //       sum = stone['price'] * stone['quantity'];
// // // //     }
// // // //   }
// // // //   return sum;
// // // // }

// // // // console.log(calcTotalPrice(stones, 'Щебень'));

// // // // // // ////////////////////////////////////////////////////////////////

// // // const calculator = {
// // //   read(a, b) {
// // //     this.value1 = a;
// // //     this.value2 = b;
// // //   },
// // //   sum() {
// // //     return !this.value1 || this.value2 ? false : this.value1 + this.value2; // TODO: переписать проверку на &&
// // //   },
// // //   mult() {
// // //     return !this.value1 || this.value2 ? false : this.value1 * this.value2;
// // //   },
// // // };

// // // // console.log(calculator);
// // // console.log(calculator.sum());
// // // console.log(calculator.read(2, 3));
// // // console.log(calculator);
// // // console.log(calculator.sum());
// // // console.log(calculator.mult());
// // // console.log(undefined + 1); //NaN

// // // // // // ////////////////////////////////////////////////////////////////

// // // const updateObj = (obj, removeKey) => {
// // //   let newObj = { ...obj };

// // //   delete newObj[removeKey];

// // //   return newObj;
// // // };

// // // console.log(updateObj({ a: 1, b: 2 }, 'b'));

// // // // // // ////////////////////////////////////////////////////////////////

// // const updateObj = (obj, ...removeKeys) => {
// //   let newObj = { ...obj };

// //   for (const removeKey of removeKeys) {
// //     delete newObj[removeKey];
// //   }

// //   return newObj;
// // };

// // // const objTest = { a: 1, b: 2, c: 3, d: { e: 111 } };

// // // console.log(objTest.d.e);//111

// // // let newTestObj = { ...objTest };

// // // console.log(newTestObj.d.e);//111

// // // newTestObj.d.e = 222;

// // // console.log(objTest.d.e);//222
// // // console.log(newTestObj.d.e);//222
// // console.log(updateObj(objTest, 'b', 'a'));
// // // // // // ////////////////////////////////////////////////////////////////
// const objData = {
//   name: 'John',
//   surName: 'Stones',
//   age: 25,
//   hobby: 'football',
//   merried: false,
// };

// function changeObj(obj) {
//   const newObj = Object.entries(obj);
//   console.log(newObj);
// }

// changeObj(objData); //TODO: сделать тожесамое но без Object.entries, может через полифил
// // // // // // ////////////////////////////////////////////////////////////////

/*
 * Типов транзацкий всего два.
 * Можно положить либо снять деньги со счета.
 */
const Transaction = {
  DEPOSIT: 'deposit',
  WITHDRAW: 'withdraw',
};

let transactionID = 0;

/*
 * Каждая транзакция это объект со свойствами: id, type и amount
 */

const account = {
  // Текущий баланс счета
  balance: 0,

  // История транзакций
  transactions: [],

  /*
   * Метод создает и возвращает объект транзакции.
   * Принимает сумму и тип транзакции.
   */
  createTransaction(type, amount) {
    transactionID += 1;
    return {
      type,
      amount,
    };
  },

  /*
   * Метод отвечающий за добавление суммы к балансу.
   * Принимает сумму транзакции.
   * Вызывает createTransaction для создания объекта
   * транзакции
   * после чего добавляет его в историю транзакций
   */
  deposit(amount) {
    this.balance += amount;
    const transaction = this.createTransaction(Transaction.DEPOSIT, amount);
    this.transactions.push(transaction);
  },

  /*
   * Метод отвечающий за снятие суммы с баланса.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта
   * транзакции
   * после чего добавляет его в историю транзакций.
   *
   * Если amount больше чем текущий баланс, выводи
   * сообщение
   * о том, что снятие такой суммы не возможно,
   *  недостаточно средств.
   */
  withdraw(amount) {
    if (amount > this.balance) {
      return 'no money';
    } else {
      this.balance -= amount;
      const transaction = this.createTransaction(Transaction.WITHDRAW);
    }
  },

  /*
   * Метод возвращает текущий баланс
   */
  getBalance() {
    return this.balance;
  },

  /*
   * Метод ищет и возвращает объект транзации по id
   */
  getTransactionDetails(id) {},

  /*
   * Метод возвращает количество средств
   * определенного типа транзакции из всей истории
   * транзакций
   */
  getTransactionTotal(type) {},
};

account.deposit(3000);

account.withdraw(1000);

console.log(account.getBalance());

console.log();

// // // // // // ////////////////////////////////////////////////////////////////

// // // // // // ////////////////////////////////////////////////////////////////

// // // // // // ////////////////////////////////////////////////////////////////

// // // // // // ////////////////////////////////////////////////////////////////

// // // // // // ////////////////////////////////////////////////////////////////

// // // // // // ////////////////////////////////////////////////////////////////

// // // // // // ////////////////////////////////////////////////////////////////

// // // // // // ////////////////////////////////////////////////////////////////

// // // // // // ////////////////////////////////////////////////////////////////

// // // // // // ////////////////////////////////////////////////////////////////

// // // // // // ////////////////////////////////////////////////////////////////

// // // // // // ////////////////////////////////////////////////////////////////

// // // // // // ////////////////////////////////////////////////////////////////

// // // // // // ////////////////////////////////////////////////////////////////

// // // // // // ////////////////////////////////////////////////////////////////

// // // // // // ////////////////////////////////////////////////////////////////

// // // // // // ////////////////////////////////////////////////////////////////

// // // // // // ////////////////////////////////////////////////////////////////
