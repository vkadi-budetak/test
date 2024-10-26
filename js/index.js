//! ЛОГІЧНІ ОПЕРАТОРИ
//* Логічне І - && - повертає перше false
//* Логічне АБО - || - повертає перше true
//* в іншому випадку - повертається останнє значення
//* Логічне НІ - ! - змінює логічний тип значення на зворотній

//* ПЕРЕТВОРЕННЯ ТИПІВ BOOL
//* TRUE: будь-які числа чи цифри, окрім 0, будь-які рядки у яких є символи
//* FALSE: 0, пустрий рядок, null, undefined, NaN

//?____________________
// поверне парні значення

// for (let i = 1; i <= 10; i += 1) {
//   if (i % 2 === 0) console.log(i);
// }

/*
1. 
for (let i = 1; i <= 10; i += 1) {
  if (1 % 2 === 0) console.log(i);
  1 === 0 -> false
}
2. 
for (let i = 2; i <= 10; i += 1) {
  if (2 % 2 === 0) console.log(i);
  0 === 0 -> true -> i = 2
}
3. 
for (let i = 3; i <= 10; i += 1) {
  if (3 % 2 === 0) console.log(i);
  1 === 0 -> false 
} */

// поверне непарні значення

//   for (let i = 1; i <= 10; i += 1) {
//   if (i % 2 === 0) continue;
//   console.log(i);
// }

/*
1.
for (let i = 1; i <= 10; i += 1) {
    if (1 % 2 === 0) break;
    console.log(i = 1); 1 === 0 -> false
    }
2.
for (let i = 2; i <= 10; i += 1) {
  if (2 % 2 === 0) break; 0 === 0 -> True
  console.log(i); 
}
*/

// for (let i = 1; i <= 10; i += 1) {
//   if (i % 2 === 0) break;
//   console.log(i);
// }

//* Example 9 - Значення за замовчуванням та оператор нульового злиття
// Отрефактори код так, щоб у змінну value присвоювалося значення змінної incomingValue, якщо воно не рівне undefined або null.
//В іншому випадку має присвоюватися значення defaultValue.
//Перевір роботу скрипта для наступних значень змінної incomingValue: null, undefined, 0, false.
//Використовуй оператор ?? (nullish coalescing operator).

// const incomingValue = false;
// const defaultValue = 10;

// // const value = incomingValue || defaultValue;

// if (incomingValue === undefined || incomingValue === null) {
//     console.log(incomingValue)
// }
// else {
//     console.log(defaultValue)
// }

// const value = incomingValue ?? defaultValue;

// console.log(value);

//* Example 10 - Оператор % та методи рядків
// Напиши скрипт, який переведе значення totalMinutes (кількість хвилин) в рядок у форматі годин та хвилин HH:MM.
// 70 покаже 01:10
// 450 покаже 07:30
// 1441 покаже 24:01
// const totalMinutes = 70;

/*
const hours = Math.floor(totalMinutes / 60);
const minutes = totalMinutes % 60;
console.log(hours);
console.log(minutes);

const doubleDigitHours = String(hours).padStart(2, 0);
const doubleDigitMinutes = String(minutes).padStart(2, 0);
console.log(`${doubleDigitHours}:${doubleDigitMinutes}`); 
*/

//* Example 1 - Введення користувача та розгалуження
//Використовуючи конструкцію if..else та prompt, напиши код, який питатиме: "Яка офіційна назва JavaScript?".
//Якщо користувач вводить ECMAScript, то показуй alert з рядком "Правильно!", в іншому випадку - "Не знаєте? ECMAScript!"

// const QESTION = prompt('Яка офіційна назва JavaScript?');

// const answer = 'ECMAScript';

// if (QESTION.toLowerCase() === answer.toLowerCase()) {
//     console.log('Правильно')
// }
// else {
//     console.log('Не знаєте? ECMAScript!')
// }

//* Example 2 - Відображення часу (if...else)
// Напиши скрипт для відображення годин та хвилин у консолі браузера у вигляді рядка формату "14 г. 26 хв.".
// Якщо значення змінної minutes дорівнює 0, то виводь рядок "14 г.", без хвилин.

// const hours = 14;
// const minutes = 0;
// let timestring;

// if (minutes > 0) {
//   timestring = `${hours} г. ${minutes} хв.`;
// } else {
//   timestring = `${hours} г.`;
// }
// console.log(timestring);

//* Example 3 - Розгалуження
// Напиши скрипт, який виводить у консоль рядок "Це позитивне число", якщо у prompt користувач ввів число більше нуля.
// Якщо було введено нуль, виводь в консоль рядок "Це нуль". Якщо передали від'ємне число, у консолі повинен бути рядок
// "Це негативне число".

// const userInput = Number(prompt("Введіть число"));

// if (Number.isNaN(userInput)) {
//   console.log("Ви ввели не число!!!");
// } else {
//   if (Number(userInput) > 0) {
//     console.log("Це позитивне число");
//   } else if (userInput < 0) {
//     console.log("Це негативне число");
//   } else {
//     console.log("Це нуль");
//   }
// }

//* Example 4 - Вкладені розгалуження
// Напиши скрипт, який порівнює числа у змінних a та b. Якщо обидва значення більше 100, 
//то виведи в консоль максимальне з них. В протилежному випадку у консолі повинна бути сума значення b та числа 512.

const a = 120;
const b = 180;