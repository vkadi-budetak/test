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

// const a = 120;
// const b = 10;

// if (a > 100 && b > 100) {
//     console.log(Math.max(a, b))
// } else {
//     console.log(b + 512)
// };

//* Example 5 - Форматування посилання (endsWith)
// Напиши скрипт який перевіряє чи закінчується значення змінної link символом /. Якщо ні, додай до кінця значення link цей символ.
// Використовуй конструкцію if...else.

// let link = "https://my-site.com/about";
// // Пиши код нижче за цей рядок

// if (link.endsWith('/')) {
//     console.log('Закінчуєтся символом "/" ');
//   } else {
//       console.log(link + '/')
//   }

// // Пиши код вище за цей рядок
// // console.log(link);

//* Example 6 - Форматування посилання (includes та логічне «І»)
// Напиши скрипт який перевіряє чи закінчується значення змінної link символом /.
//Якщо ні, додай до кінця значення link цей символ, але тільки в тому випадку, якщо в link є підрядок "my-site".
//Використовуй конструкцію if...else.

// let link = 'https://somesite.com/about/my-site';
// // Пиши код нижче за цей рядок

//   if (link.includes("my-site") && !link.endsWith("/")) {
//     console.log(link + "/");
// }
// // Пиши код вище за цей рядок
// console.log(link);

//* Example 7 - Форматування посилання (тернарний оператор)
//Виконай рефакторинг коду задачі номер 4, використовуючи тернарний оператор.

// let link = 'https://somesite.com/about';

// link = link.includes('my-site') && !link.endsWith('/') ? link += '/' : link;
// // if (link.includes('my-site') && !link.endsWith('/')) {
// //   link += '/';
// // }
// console.log(link);

//* Example 8 - Напиши скрипт який виводитиме в консоль браузера рядок залежно від значення змінної hours.

// Якщо значення змінної hours:
// менше 17, виводь рядок "Pending"
// більше або дорівнює 17 і менше або дорівнює 24, виводь рядок "Expires"
// більше 24 , виводь рядок "Overdue"

// const hours = 10;

// if (hours < 17) {
//     console.log("Pending")
// } else if(hours >= 17 && hours <= 24) {
//     console.log("Expires")
// } else {
//    console.log("Overdue")
// }

//* Example 9 - Дедлайн здачі проекту (if...else)
//Напиши скрипт для відображення часу дедлайну здачі проекту. Використовуй конструкцію if...else.

// Якщо до дедлайну 0 днів - виведи рядок "Сьогодні"
// Якщо до дедлайну 1 день - виведи рядок "Завтра"
// Якщо до дедлайну 2 дні - виведи рядок "Післязавтра"
// Якщо до дедлайну 3+ днів - виведи рядок "Дата у майбутньому"

// const daysUntilDeadline = 2;

// if (daysUntilDeadline === 0) {
//   console.log("Дедлайн Сьогодні");
// } else if(daysUntilDeadline === 1) {
//   console.log("Дедлайн Завтра");
// } else if(daysUntilDeadline === 2) {
//   console.log("Дедлайн Післязавтра");
// } else {
//   console.log("Дата у майбутньому");
// }

//* Example 10 - Дедлайн здачі проекту (switch)
//Виконай рефакторинг коду задачі номер 5 використовуючи switch.

// if (daysUntilDeadline === 0) {
//   console.log("Сьогодні");
// } else if (daysUntilDeadline === 1) {
//   console.log("Завтра");
// } else if (daysUntilDeadline === 2) {
//   console.log("Післязавтра");
// } else {
//   console.log("Дата у майбутньому");
// }

// const daysUntilDeadline = 1;

// switch (daysUntilDeadline) {
//   case 0:
//     console.log("Сьогодні");
//     break;
//   case 1:
//     console.log("Завтра");
//     break;
//   case 2:
//     console.log("Післязавтра");
//     break;
//   default:
//     console.log("Дата у майбутньому");
// }

//* Example 11 - Цикл for
//Напиши цикл for, який виводить у консоль браузера числа за зростанням від min до max, але тільки якщо число кратне 5.

// const max = 100;
// const min = 20;

// for (let i = min; i <= max; i += 5) {
//   console.log(i);
// }

// const num = 10;

// for (let i = 0; i < num; i += 1) {
//   console.log(`${num} % ${i} = `, num % i);
// }

//* Example 12 - Введення користувача та розгалуження
// Напиши скрипт, який питатиме логін за допомогою prompt та логувати результат у консоль браузера.

// Якщо відвідувач вводить "Адмін", то prompt запитує пароль
// Якщо нічого не введено або натиснуто клавішу Esc - вивести рядок "Скасовано"
// В іншому випадку вивести рядок "Я вас не знаю"
// Пароль перевіряти так:

// Якщо введено пароль "Я адмін", то вивести рядок "Здрастуйте!"
// Інакше виводити рядок "Невірний пароль"

// const userLogin = prompt("Введіть свій логін...?");

// if (userLogin === "Admin") {
//   const pass = prompt("Введіть свій пароль: ");

//   if (pass === "I am admin") {
//     console.log("Hello");
//   } else {
//     console.log("Wrong password");
//   }
// } else if (userLogin === "") {
//   console.log("Скасовано");
// } else {
//   console.log("Я вас не знаю");
// }

//! МАСИВИ

//* Example 1 - Базові операції з масивом
// Створіть масив genres з елементами «Jazz» та «Blues».
// Додайте «Рок-н-рол» до кінця.
// Виведіть у консоль перший елемент масиву.
// Виведіть у консоль останній елемент масиву. Код повинен працювати для масиву довільної довжини.
// Видаліть перший елемент та виведіть його в консоль.
// Вставте «Country» та «Reggae» на початок масиву.

// const genres = ['Jazz', 'Blues'];
// genres.push('Рок-н-рол');

// console.log(genres);
// console.log(genres[0]);
// console.log(genres[genres.length -1]);
// console.log(genres.shift());
// console.log(genres.unshift('Country', 'Reggae')); 

//* Example 2 - Масиви та рядки
// Напиши скрипт для обчислення площі прямокутника зі сторонами, значення яких зберігаються у змінній values у вигляді рядка. Значення гарантовано розділені пробілом.

// const values = '8 11';
// const arr = values.split(" ")
// const a = Number(arr[0]);
// const b = Number(arr[1]);

// console.log(a * b);

//* Example 3 - Перебір масиву
// Напиши скрипт для перебору масиву fruits циклом for. Для кожного елемента масиву виведи в консоль рядок у форматі номер_елемента: значення_елемента. Нумерація елементів повинна починатися з 1.

// const fruits = ['🍎', '🍇', '🍑', '🍌', '🍋'];

// for (let i in fruits) {
//   i = Number(i);
//   console.log(`${i + 1}: ${fruits[i]}`);
// }

// for (let i = 0; i < fruits.length; i += 1) {
//   console.log(`${i + 1}: ${fruits[i]}`);
// }

// console.log(fruits);

//* Example 4 - Масиви та цикли
// Напиши скрипт, який виводить у консоль ім'я та телефонний номер користувача. У змінних names та phones зберігаються рядки імен та телефонних номерів, розділені комами. Порядковий номер імен та телефонів у рядках вказують на відповідність. Кількість імен та телефонів гарантовано однакова.

// const names = 'Jacob,William,Solomon,Artemis';
// const phones = '89001234567,89001112233,890055566377,890055566300';

// const contactName = names.split(',');
// const contactPhone = phones.split(',');

// for (let i = 0; i < contactName.length; i += 1) {
//   console.log(`${contactName[i]}: ${contactPhone[i]}`);
// }

// console.log(contactName)
// console.log(contactPhone)

//* Example 5 - Масиви та рядки
// Напиши скрипт, який виводить у консоль усі слова рядка крім першого і останнього. Результуючий рядок не повинен починатися або закінчуватися символ пробілу. Скрипт повинен працювати для будь-якого рядка.

// const string = 'Welcome to the future';

// const arr = string.split(' ');
// arr.shift();
// arr.pop();

// console.log(arr.join(' '))

//* Example 6 - Масиви та рядки
// Напиши скрипт, який «розгортає» рядок (зворотний порядок букв) і виводить його в консоль.

// const string = 'Welcome to the future';

// const stringRever = string.split(" ").reverse().join(" ")

// console.log(stringRever)

//* Example 7 - Сортування масиву із циклом
// Напиши скрипт сортування масиву рядків в алфавітному порядку за першою літерою елемента.

// const langs = ['python', 'javascript', 'c++', 'haskel', 'php', 'ruby'];

// console.log("Sort: ", langs.sort());

// for (let i = 0; i < langs.length; i += 1) {
//   for (let k = i + 1; k < langs.length; k += 1) {
//     if (langs[i] > langs[k]) {
//       const temp = langs[i];
//       langs[i] = langs[k];
//       langs[k] = temp;
//     }
//   }
// }

// console.log("Our: ", langs);

/*
1. i = 0
  1.1 k = 1
     if (langs[0] > langs[1]) { python > javascript true
      const temp = langs[0];
      langs[0] = langs[1];
      langs[1] = temp;
     }
      ["javascript", "python", "c++", "haskel", "php", "ruby"];
    1.2 k = 2
     if (langs[0] > langs[2]) { javascript > python false
     ----
    1.3 k = 3
    if (langs[0] > langs[3]) { javascript > haskel true
      const temp = langs[0];
      langs[0] = langs[3];
      langs[3] = temp;
     }
      ["haskel", "python", "c++", "javascript", "php", "ruby"];
*/

//* Example 8 - Пошук елемента
// Напиши скрипт пошуку найменшого числа у масиві. Код повинен працювати для будь-якого масиву чисел. Використовуй цикл для розв'язання задачі.

// const numbers = [2, 17, 94, 1, 23, 37];
// let min = numbers[0];

// for (const number of numbers) {
//   if (number < min) {
//     min = number;
//   }
// }

// console.log(min); // 1