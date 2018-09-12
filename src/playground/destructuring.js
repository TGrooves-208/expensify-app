//
// Object destructuring
//

// const person = {
//   name: 'Gil',
//   age: 42,
//   location: {
//     city: 'Boise',
//     temp: 97
//   }
// };
//
// const { name: firstName = 'Anonymous', age } = person;
// console.log(`${firstName} is ${age}.`);
//
// const { city, temp: temperature } = person.location;
//
// if (city && temperature) {
//   console.log(`It's ${temperature} in ${city}.`);
// }

// const book = {
//   title: 'Ego is the Enemy',
//   author: 'Ryan Holiday',
//   publisher: {
//     //name: 'Penguin'
//   }
// };
//
// const { name: publisherName = 'Self-Published' } = book.publisher;
//
// console.log(publisherName); // Penguin, Self-Published

//
// Array destructuring
//

const address = ['1299 S Yo Momma Street', 'Boise', 'Idaho', '83709'];

const [, city, state] = address;

console.log(`You are in ${city} ${state}.`);

const item = ['Coffee (iced)', '$3.00', '$3.75', '$4.75'];

// grab the first and thrid items using array destructuring
const [itemName, , mediumPrice] = item;

console.log(`A medium ${itemName} costs ${mediumPrice}`);
