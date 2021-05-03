// // // // // const playlist = {
// // // // //   tracks: [],
// // // // // };

// // // // // const propName = 'tracks';

// // // // // console.log(playlist[propName]);

// // // // // const users = ['mango', 'poly'];

// // // // // console.table(users);
// // // // // console.log(users.length);

// // // // // users.push('ajax');
// // // // // console.table(users);
// // // // // console.log(users.length);
// // // // ///////////////////////////////////////////////////////////////////////////////////////////
// // MOCK - тестовые данные (faker, chance)
// // https://cdnjs.com/libraries/Faker
// // https://dev.to/iainfreestone/20-resources-for-generating-fake-and-mock-data-55g1

// // STUB - заглушка
// // console.log(faker.address.country());

// function createUserMock() {
//   return {
//     userName: faker.internet.userName(),
//     country: faker.address.country(),
//     city: faker.address.city(),
//   };
// }

// const users = [];

// for (let index = 0; index < 10; index++) {
//   const user = createUserMock();
//   users.push(user);
// }

// console.table(users); //https://prnt.sc/127k962
// // // // ///////////////////////////////////////////////////////////////////////////////////////////
// // // // // SCHEMA - о том какой нобор чего будет.
// // // // ///////////////////////////////////////////////////////////////////////////////////////////
// // // // // уметь в декомпозицию задачи
// // // // ///////////////////////////////////////////////////////////////////////////////////////////
// // // // // const vehicles = [
// // // // //   { make: 'Honda', model: 'CR-V', type: 'suv', price: 24045 },
// // // // //   { make: 'Honda', model: 'Accord', type: 'sedan', price: 22455 },
// // // // //   { make: 'Mazda', model: 'Mazda 6', type: 'sedan', price: 24195 },
// // // // //   { make: 'Mazda', model: 'CX-9', type: 'suv', price: 31520 },
// // // // //   { make: 'Toyota', model: '4Runner', type: 'suv', price: 34210 },
// // // // //   { make: 'Toyota', model: 'Sequoia', type: 'suv', price: 45560 },
// // // // //   { make: 'Toyota', model: 'Tacoma', type: 'truck', price: 24320 },
// // // // //   { make: 'Ford', model: 'F-150', type: 'truck', price: 27110 },
// // // // //   { make: 'Ford', model: 'Fusion', type: 'sedan', price: 22120 },
// // // // //   { make: 'Ford', model: 'Explorer', type: 'suv', price: 31660 },
// // // // // ];
// // // // // console.table(vehicles);

// // // // // const models = [];

// // // // // for (const vehicle of vehicles) {
// // // // //   models.push(vehicle.model);
// // // // // }

// // // // // console.log(models);

// // // // // console.log(Object.keys(vehicles[0]));

// // // // // function getModels(cars) {
// // // // //   // vehicles// недоступна допустим
// // // // //   // console.table(cars);
// // // // //   const models = [];

// // // // //   for (const car of cars) {
// // // // //     models.push(car.model);
// // // // //   }
// // // // //   return models;
// // // // // }

// // // // // console.log(getModels(vehicles));

// // // // ///////////////////////////////////////////////////////////////////////////////////////////
// // // // const vehicles = [
// // // //   { make: 'Honda', model: 'CR-V', type: 'suv', price: 24045 },
// // // //   { make: 'Honda', model: 'Accord', type: 'sedan', price: 22455 },
// // // //   { make: 'Mazda', model: 'Mazda 6', type: 'sedan', price: 24195 },
// // // //   { make: 'Mazda', model: 'CX-9', type: 'suv', price: 31520 },
// // // //   { make: 'Toyota', model: '4Runner', type: 'suv', price: 34210 },
// // // //   { make: 'Toyota', model: 'Sequoia', type: 'suv', price: 45560 },
// // // //   { make: 'Toyota', model: 'Tacoma', type: 'truck', price: 24320 },
// // // //   { make: 'Ford', model: 'F-150', type: 'truck', price: 27110 },
// // // //   { make: 'Ford', model: 'Fusion', type: 'sedan', price: 22120 },
// // // //   { make: 'Ford', model: 'Explorer', type: 'suv', price: 31660 },
// // // // ];
// // // // console.table(vehicles);

// // // // const changeModelName = function (vehicles, oldModelName, newModelName) {
// // // //   for (const vehicle of vehicles) {
// // // //     if (vehicle.model === oldModelName) {
// // // //       // console.log(vehicle);
// // // //       // console.log(vehicle.model === oldModelName);
// // // //       vehicle.model = newModelName;
// // // //     }
// // // //   }
// // // // };

// // // // const oldModelName = 'Mazda 6';
// // // // const newModelName = 'Hello World';
// // // // console.log(changeModelName(vehicles, oldModelName, newModelName));

// // // // console.table(vehicles);

// // // // ///////////////////////////////////////////////////////////////////////////////////////////
// // // // обьясните,пожалуйста, в чем ошибка (Текст ошибки: apartment.location.country = 'Ямайка'; TypeError: Cannot set property 'country' of undefined) вроде бы легкая задача,но понять не могу.
// // // const apartment = {
// // //   imgUrl: 'https://via.placeholder.com/640x480',
// // //   descr: 'Просторная квартира в центре',
// // //   rating: 4.7,
// // //   price: 5000,
// // //   tags: ['premium', 'promoted', 'top', 'trusted'],
// // //   owner: {
// // //     name: 'Генри Сибола',
// // //     phone: '982-126-1588',
// // //     email: 'henry.carter@aptmail.com',
// // //   },
// // //   // location: {},
// // // };

// // // apartment.area = 60;
// // // apartment.rooms = 3;

// // // apartment.location = {};
// // // apartment.location.country = 'Ямайка';
// // // apartment.location.city = 'Кингстон';
// // // // ///////////////////////////////////////////////////////////////////////////////////////////
// // const vehicles = [
// //   { make: 'Honda', model: 'CR-V', type: 'suv', price: 24045 },
// //   { make: 'Honda', model: 'Accord', type: 'sedan', price: 22455 },
// //   { make: 'Mazda', model: 'Mazda 6', type: 'sedan', price: 24195 },
// //   { make: 'Mazda', model: 'CX-9', type: 'suv', price: 31520 },
// //   { make: 'Toyota', model: '4Runner', type: 'suv', price: 34210 },
// //   { make: 'Toyota', model: 'Sequoia', type: 'suv', price: 45560 },
// //   { make: 'Toyota', model: 'Tacoma', type: 'truck', price: 24320 },
// //   { make: 'Ford', model: 'F-150', type: 'truck', price: 27110 },
// //   { make: 'Ford', model: 'Fusion', type: 'sedan', price: 22120 },
// //   { make: 'Ford', model: 'Explorer', type: 'suv', price: 31660 },
// // ];
// // console.table(vehicles);

// // // получить общую цену всех машин

// // // функция получит массив обьектов
// // // переберет его
// // //
// // function getTotalPrice(cars) {
// //   let totalPrice = 0;

// //   for (const car of cars) {
// //     totalPrice += car.price;
// //   }

// //   return totalPrice;
// // }

// // console.log('total Price:', getTotalPrice(vehicles));

// // // // ///////////////////////////////////////////////////////////////////////////////////////////
