// logo
// Автопроверка домашних заданий по JavaScript

// Задача 4 / 41
// Модуль:
// 3

// Скрыть задание
// Обратная связь
// ↔
// Доступ к вложенным свойствам
// const user = {
//   name: 'Jacques Gluke',
//   tag: 'jgluke',
//   location: {
//     country: 'Jamaica',
//     city: 'Ocho Rios',
//   },
//   hobbies: ['swiming', 'music', 'sci-fi'],
// };
// Для доступа к вложенным свойствам используется цепочка обращений «через точку». Например, если необходимо получить значение страны пользователя, записываем user.location.country, где user.location это обращение (путь) к объекту в свойстве location, а user.locaton.country обращение к свойству country в этом объекте. То есть, «точка» указывает следующую вложенность.

// const location = user.location;
// console.log(location); // Объект location

// const country = user.location.country;
// console.log(country); // 'Jamaica'
// Если значение свойства это массив, то в нашем примере user.hobbies - обращение к этому массиву. Далее, можно получить доступ к его элементам через квадратные скобки и индекс или использовать свойства и методы.

// const hobbies = user.hobbies;
// console.log(hobbies); // ['swiming', 'music', 'sci-fi']

// const firstHobby = user.hobbies[0];
// console.log(firstHobby); // 'swiming'

// const numberOfHobbies = user.hobbies.length;
// console.log(numberOfHobbies); // 3
// Задание
// Дополни код присвоив объявленным переменным выражения обращения к соответствующим свойствам обьекта apartment.

// ownerName - имя владельца;
// ownerPhone - телефон владельца;
// ownerEmail - почта владельца;
// numberOfTags - количество элементов массива в свойстве tags;
// firstTag - первый элемент массива в свойстве tags;
// lastTag - последний элемент массива в свойстве tags.
// Тесты
// Объявлена переменная apartment с помощью 'const'.
// Значение переменной apartment это объект.
// Объявлена переменная ownerName с помощью 'const'.
// Значение переменной ownerName это строка 'Генри'.
// Объявлена переменная ownerPhone с помощью 'const'.
// Значение переменной ownerPhone это '982-126-1588'.
// Объявлена переменная ownerEmail с помощью 'const'.
// Значение переменной ownerEmail это 'henry.carter@aptmail.com'.
// Объявлена переменная numberOfTags с помощью 'const'.
// Значение переменной numberOfTags это 3.
// Объявлена переменная firstTag с помощью 'const'.
// Значение переменной firstTag это 'premium'.
// Объявлена переменная lastTag с помощью 'const'.
// Значение переменной lastTag это 'top'.
// Редактор JavaScript:
// 1
// const apartment = {
// 2
//   imgUrl: 'https://via.placeholder.com/640x480',
// 3
//   descr: 'Просторная квартира в центре',
// 4
//   rating: 4,
// 5
//   price: 2153,
// 6
//   tags: ['premium', 'promoted', 'top'],
// 7
//   owner: {
// 8
//     name: 'Генри',
// 9
//     phone: '982-126-1588',
// 10
//     email: 'henry.carter@aptmail.com',
// 11
//   },
// 12
// };
// 13
// ​
// 14
// // Пиши код ниже этой строки
// 15
// const ownerName = apartment;
// 16
// const ownerPhone = apartment;
// 17
// const ownerEmail = apartment;
// 18
// const numberOfTags = apartment;
// 19
// const firstTag = apartment;
// 20
// const lastTag = apartment;
// 21
// // Пиши код выше этой строки
// Проверить
// Сбросить
// Скрыть секцию результатов
// Результаты:
// (обновляются при нажатии на кнопку - Проверить)

// ©
// 2020
// |
// Политика конфиденциальности

const apartment = {
  imgUrl: 'https://via.placeholder.com/640x480',
  descr: 'Просторная квартира в центре',
  rating: 4,
  price: 2153,
  tags: ['premium', 'promoted', 'top'],
  owner: {
    name: 'Генри',
    phone: '982-126-1588',
    email: 'henry.carter@aptmail.com',
  },
};

// Пиши код ниже этой строки
const ownerName = apartment.owner.name;
const ownerPhone = apartment.owner.phone;
const ownerEmail = apartment.owner.email;
const numberOfTags = apartment.tags.length;
const firstTag = apartment.tags[0];
const lastTag = apartment.tags[apartment.tags.length - 1];
// Пиши код выше этой строки

// ownerName - имя владельца;
// ownerPhone - телефон владельца;
// ownerEmail - почта владельца;
// numberOfTags - количество элементов массива в свойстве tags;
// firstTag - первый элемент массива в свойстве tags;
// lastTag - последний элемент массива в свойстве tags.
