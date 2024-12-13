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

//! ФУНКЦІЇ

//* Example 1 - Індекс маси тіла
// Напиши функцію calcBMI(weight, height) яка розраховує та повертає індекс маси тіла людини. Для цього необхідно розділити вагу в кілограмах на квадрат висоти людини в метрах.

// Вага та висота будуть спеціально передані як рядки. Не цілі числа можуть бути задані у вигляді 24.7 або 24,7, тобто як роздільник дробової частини може бути кома.

// Індекс маси тіла необхідно округлити до однієї цифри після коми;

// const bmi = calcBMI('88,3', '1.75');

// function calcBMI(weight, height) {
//   weight = weight.replace(",", ".");
//   height = height.replace(",", ".");

//   const bmi = weight / (height * height);
//   return Number(bmi.toFixed(1));
// }

// console.log(bmi); // 28.8

//* Example 2 - Найменше з чисел
// Напиши функцію min(a,b), яка повертає найменше з чисел a та b.

// console.log(min(2, 5)); // 2
// console.log(min(3, -1)); // -1
// console.log(min(1, 1)); // 1

// function min(a, b) {
//   if (a < b) {
//     return a;
//   } else {
//     return b;
//   }
// }

// function min(a, b) {
//   return a < b ? a : b;
// }

// function min(a, b) {
//   return Math.min(a, b)
// }

//* Example 3 - Площа прямокутника
// Напиши функцію getRectArea(dimensions) для обчислення площі прямокутника зі сторонами, значення яких будуть передані до параметра dimensions у вигляді рядка. Значення гарантовано розділені пробілом.

// function getRectArea(dimensions) {
// const arr = dimensions.split(' ');
// const a = Number(arr[0]);
// const b = Number(arr[1]);

// return a * b
// }

// console.log(getRectArea('8 11'));

//* Example 4 - Логування елементів
// Напиши функцію logItems(items), яка отримує масив та використовує цикл for, який для кожного елемента масиву буде виводити в консоль повідомлення у форматі <номер елемента> - <значення елемента>. Нумерація елементів повинна починатися з 1.

// Наприклад для першого елемента масиву ['Mango', 'Poly', 'Ajax'] з індексом 0 буде виведено 1 - Mango, а для індексу 2 виведе 3 - Ajax.

// function logItems(items) {
//   for (let i in items) {
//     i = Number(i);
//     console.log(`${i + 1} - ${items[i]}`);
// return `${i + 1} - ${items[i]}`
//   }

//   //    for (let i = 0; i < items.length; i += 1) {
//   //      console.log(`${i + 1}: ${items[i]}`);
//   // }
// }

// logItems(["Mango", "Poly", "Ajax"]);
// logItems(["🍎", "🍇", "🍑", "🍌", "🍋"]);

//* Example 5 - Логування контактів
// Напиши функцію printContactsInfo(names, phones) яка виводить у консоль ім'я та телефонний номер користувача. У параметри names та phones будуть передані рядки імен та телефонних номерів, розділені комами. Порядковий номер імен та телефонів у рядках вказують на відповідність. Кількість імен та телефонів гарантовано однакова.

// function printContactsInfo(names, phones) {
//   const name = names.split(',');
//   const phone = phones.split(',');

//   for (let i = 0; i < name.length; i += 1) {
//     return `${name[i]} : ${phone[i]}`
//   }
// }

// printContactsInfo(
//   'Jacob,William,Solomon,Artemis',
//   '89001234567,89001112233,890055566377,890055566300',
// );

//* Example 6 - Пошук найбільшого елемента
// Напиши функцію findLargestNumber(numbers)яка шукає найбільше число в масиві.

// function findLargestNumber(numbers) {
//   // const arr = numbers.join(' ');
//   // const bigNum = Math.max(arr);
//   let max = numbers[0];

//   for (let i = 0; i < numbers.length; i += 1) {
//     if (numbers[i] > max) {
//       max = numbers[i];
//     }
//   }

//   return max;
// }

// console.log(findLargestNumber([2, 17, 94, 1, 23, 37])); // 94
// console.log(findLargestNumber([49, 4, 7, 83, 12])); // 83

//* Example 7 - Середнє значення
//Напишіть функцію calAverage() яка приймає довільну кількість аргументів і повертає їхнє середнє значення. Усі аргументи будуть лише числами.

// function calAverage() {
//   const length = arguments.length;
//   let sum = 0;

//   for (const num of arguments) {
//     sum += num;
//   }

//   return sum / length;
// }

// console.log(calAverage(1, 2, 3, 4)); // 2.5
// console.log(calAverage(14, 8, 2)); // 8
// console.log(calAverage(27, 43, 2, 8, 36)); // 23.2

//* Example 8 - Форматування часу
// Напиши функцію formatTime(minutes) яка переведе значення minutes (кількість хвилин) у рядок у форматі годин та хвилин HH:MM.

//   1. конвертуємо кількість хвилин у години (/60) та хвилини (%60)
//   2. додати 0 на початок, якщо результат це 1 символ
//   3. сформувати рядок у вигляді гг:хх

// function formatTime(totalMinutes) {
//   const hours = Math.floor(totalMinutes / 60);
//   const minutes = totalMinutes % 60;
//   const formattedHours = String(hours).padStart(2, 0);
//   const formattedMinutes = String(minutes).padStart(2, 0);
//   return `${formattedHours}:${formattedMinutes}`;
// }

// console.log(formatTime(35)); // "00:35"
// console.log(formatTime(60)); // "01:00"
// console.log(formatTime(70)); // "01:10"
// console.log(formatTime(450)); // "07:30"
// console.log(formatTime(1441)); // "24:01"

//* Example 9 - Колекція курсів (includes, indexOf, push і т. д.)
// Напишіть функції для роботи з колекцією навчальних курсів courses:

//? addCourse(name) - додає курс до кінця колекції
//? removeCourse(name) - видаляє курс із колекції
//? updateCourse(oldName, newName) - змінює ім'я на нове

// const courses = ["HTML", "CSS", "JavaScript", "React", "PostgreSQL"];

// addCourse("Express");
// console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL', 'Express']
// addCourse("CSS"); // 'Ви вже маєте такий курс'

// removeCourse("React");
// console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'PostgreSQL', 'Express']
// removeCourse("Vue"); // 'Курс із таким ім'ям не знайдено'

// updateCourse("Express", "NestJS");
// console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'PostgreSQL', 'NestJS']
// updateCourse("Vue", "Angular"); // 'Курс із таким ім'ям не знайдено'
// updateCourse("JavaScript", "Python");

// function addCourse(name) {
//   if (courses.includes(name)) {
//     console.log(`Курс ${name} вже існує!`);
//   } else {
//     courses.push(name);
//   }
// }

// function removeCourse(name) {
//   console.log(`Курсу ${name} не існує!`);
// if (!courses.includes(name)) {
// } else {
//   const index = courses.indexOf(name);
//   courses.splice(index, 1);
// }

//   const index = courses.indexOf(name);
//   if (index === -1) {
//     console.log(`Курсу ${name} не існує!`);
//   } else {
//     courses.splice(index, 1);
//   }
// }

// function updateCourse(oldName, newName) {
//   const index = courses.indexOf(oldName);
//   if (index === -1) {
//     console.log(`Курсу ${oldName} не існує!`);
//   } else {
//     courses[index] = newName;
//   }
// }

//! ОБЄКТИ

//* Example 1 - Основи об'єктів
// Напиши скрипт, який для об'єкта user, послідовно:

// додає поле mood зі значенням 'happy'
// замінює значення hobby на 'skydiving'
// замінює значення premium на false
// виводить вміст об'єкта user у форматі ключ:значення використовуючи Object.keys() та for...of
// Код
// const user = {
//   name: 'Mango',
//   age: 20,
//   hobby: 'html',
//   premium: true,
// };

// user.mood = "happy"; // user["mood"] = "happy"
// user.hobby = "skydiving";
// user.premium = false;

// const userKeys = Object.keys(user);
// console.log(userKeys);
// console.log(user);

// for (const key of userKeys) {
//   console.log(`${key}: ${user[key]}`);
// }

//* Example 2 - метод Object.values()
// У нас є об'єкт, де зберігаються зарплати нашої команди. Напишіть код для підсумовування всіх зарплат і збережіть результат у змінній sum. Повинно вийти 390. Якщо об'єкт salaries порожній, то результат має бути 0.

// Код
// const salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130,
// };

// const values = Object.values(salaries);
// let sum = 0;

// for (const value of values) {
//   sum += value;
// }

// console.log(sum);

//* Example 3 - Масив об'єктів
// Напишіть функцію calcTotalPrice(stones, stoneName), яка приймає масив об'єктів та рядок з назвою каменю. Функція рахує і повертає загальну вартість каміння з таким ім'ям, ціною та кількістю з об'єкта

// Код
// const stones = [
//   { name: 'Смарагд', price: 1300, quantity: 4 },
//   { name: 'Діамант', price: 2700, quantity: 3 },
//   { name: 'Сапфір', price: 400, quantity: 7 },
//   { name: 'Щебінь', price: 200, quantity: 2 },
// ];

// function calcTotalPrice(stones, stoneName) {
//   //     1. запустити цикл на перебір масиву каменів
//   //     1.1. Порівняємо stoneName з ключем name у поточному обʼєкті
//   //     1.2. Якщо успішно - повернути добуток ціни на кількість
//   //   2. Повернути 0

//     for (const stone of stones) {
//       if (stone.name === stoneName) {
//         return stone.quantity * stone.price;
//       }
//     }

//     console.log(stoneName)

//     return 0;
//   }

//   console.log(calcTotalPrice(stones, "Сапфір")); // 2800
//   console.log(calcTotalPrice(stones, "Смарагд")); // 5200
//   console.log(calcTotalPrice(stones, "Рубін")); // 0
//   console.log(calcTotalPrice(stones, "Щебінь")); // 0

//* Example 4 - Комплексні завдання
// Напиши скрипт управління особистим кабінетом інтернет банку. Є об'єкт account в якому необхідно реалізувати методи для роботи з балансом та історією транзакцій.

// /*
//  * Типів транзакцій всього два.
//  * Можна покласти чи зняти гроші з рахунку.
//  */

// const TRANSACTIONS = {
//   DEPOSIT: "deposit",
//   WITHDRAW: "withdraw",
// };

// /*
//  * Кожна транзакція це об'єкт із властивостями: id, type та amount
//  */

// const account = {
//   // Поточний баланс рахунку
//   balance: 0,

//   // Історія транзакцій
//   transactions: [],

//   /*
//    * Метод створює та повертає об'єкт транзакції.
//    * Приймає суму та тип транзакції.
//    */
//   createTransaction(amount, type) {
//     return {
//       amount,
//       type,
//       id: this.transactions.length,
//       currentBalance: this.balance,
//     };
//   },

//   /*
//    * Метод, що відповідає за додавання суми до балансу.
//    * Приймає суму транзакції.
//    * Викликає createTransaction для створення об'єкта транзакції
//    * після чого додає його до історії транзакцій
//    */
//   deposit(amount) {
//     this.balance += amount;
//     const transaction = this.createTransaction(amount, TRANSACTIONS.DEPOSIT);
//     this.transactions.push(transaction);
//   },

//   /*
//    * Метод, що відповідає за зняття суми з балансу.
//    * Приймає суму транзакції.
//    * Викликає createTransaction для створення об'єкта транзакції
//    * після чого додає його до історії транзакцій.
//    *
//    * Якщо amount більше ніж поточний баланс, виводь повідомлення
//    * про те, що зняття такої суми не можливе, недостатньо коштів.
//    */
//   withdraw(amount) {
//     if (amount > this.balance) {
//       console.log(`Недостаньо коштів! Поточний баланс: ${this.balance}`);
//     } else {
//       this.balance -= amount;
//       const transaction = this.createTransaction(amount, TRANSACTIONS.WITHDRAW);
//       this.transactions.push(transaction);
//     }
//   },

//   /*
//    * Метод повертає поточний баланс
//    */
//   getBalance() {
//     return this.balance;
//   },

//   /*
//    * Метод шукає та повертає об'єкт транзакції по id
//    */
//   getTransactionDetails(id) {
//     /*
//       1. перебрати масив транзакцій
//         1.1. порівнюємо поточне айді транзакції з айді параметру, якщо рівне - повертаємо обʼєкт
//       2. повернути пустий обʼєкт
//     */
//     for (const transaction of this.transactions) {
//       if (transaction.id === id) {
//         return transaction;
//       }
//     }
//     return {};
//   },

//   /*
//    * Метод повертає кількість коштів
//    * певного типу транзакції з усієї історії транзакцій
//    */
//   getTransactionTotal(type) {
//     /*
//     1. створюємо накопичувач транзакцій
//     2. перебрати масив транзакцій
//       2.1. Перевірка типу транзакції(якщо поточний тип транзакції в масиві дорівнює параметру type, то - додаємо суму в накопичував)
//     3. повертаємо накопичувач
//     */
//     let total = 0;
//     for (const transaction of this.transactions) {
//       if (transaction.type === type) {
//         total += transaction.amount;
//       }
//     }
//     return total;
//   },
// };
// account.deposit(500);
// account.withdraw(400);
// account.withdraw(400);
// account.deposit(1000);
// account.withdraw(100);
// account.withdraw(100);
// account.deposit(100);
// account.withdraw(1000);
// account.deposit(100);
// console.log(account);

// console.log(account.getTransactionDetails(0));
// console.log(account.getTransactionTotal(TRANSACTIONS.WITHDRAW));
// console.log(account.getTransactionTotal(TRANSACTIONS.DEPOSIT));

// // this це обʼєкт, який викликає ф-цію

//! Об'єкти. Операції rest та spread

//* Example 1 - Деструктуризація
// Перепиши функцію так, щоб вона приймала один об'єкт параметрів замість набору незалежних аргументів.

// function calcBMI({ weight, height }) {
//   const numericWeight = Number(weight.replace(",", "."));
//   const numericHeight = Number(height.replace(",", "."));
//   return Number((numericWeight / numericHeight ** 2).toFixed(1));
// }

// // Було
// // console.log(calcBMI('88,3', '1.75'));
// // console.log(calcBMI('68,3', '1.65'));
// // console.log(calcBMI('118,3', '1.95'));

// // Очікується
// console.log(
//   calcBMI({
//     weight: "88,3",
//     height: "1.75",
//   })
// );
// console.log(
//   calcBMI({
//     weight: "68,3",
//     height: "1.65",
//   })
// );
// console.log(
//   calcBMI({
//     weight: "118,3",
//     height: "1.95",
//   })
// );

//* Example 2 - Деструктуризація
// Перепиши функцію так, щоб вона приймала один об'єкт параметрів замість набору незалежних аргументів.

// function printContactsInfo({ names, phones }) {
//   const nameList = names.split(",");
//   const phoneList = phones.split(",");
//   for (let i = 0; i < nameList.length; i += 1) {
//     console.log(`${nameList[i]}: ${phoneList[i]}`);
//   }
// }

// // Було
// // printContactsInfo(
// //   'Jacob,William,Solomon,Artemis',
// //   '89001234567,89001112233,890055566377,890055566300',
// // );

// // Очікується
// printContactsInfo({
//   names: "Jacob,William,Solomon,Artemis",
//   phones: "89001234567,89001112233,890055566377,890055566300",
// });

//* Example 3 - Глибока деструктуризація
// Перепиши функцію так, щоб вона приймала один об'єкт параметрів замість набору незалежних аргументів.

// function getBotReport({
//   companyName,
//   bots: { repair: repairBots, defence: defenceBots },
// }) {
//   return `${companyName} has ${repairBots + defenceBots} bots in stock`;
// }

// // Було
// // console.log(getBotReport('Cyberdyne Systems', 150, 50));

// // Очікується
// console.log(
//   getBotReport({
//     companyName: "Cyberdyne Systems",
//     bots: {
//       repair: 150,
//       defence: 50,
//     },
//   })
// ); // "Cyberdyne Systems has 200 bots in stock"

// const user = {
//   username: "Vlad",
//   age: 43,
// };

// const { age } = user;
// // const age = user.age (43)

// const { username: name } = user;
// // const name = user.username (Vlad)
// console.log(user)

//* Example 5 - Операція spread
// Доповни функцію createContact(partialContact) так, щоб вона повертала новий об'єкт контакту з доданими властивостями id та createdAt, а також list зі значенням "default" якщо в partialContact немає такої властивості.

// function createContact(partialContact) {
//   return {
//     list: "default",
//     ...partialContact,
//     id: generateId(),
//     createdAt: new Date(),
//   };
// }

// console.log(
//   createContact({
//     name: "Mango",
//     email: "mango@mail.com",
//     list: "friends",
//   })
// );
// console.log(
//   createContact({
//     name: "Poly",
//     email: "poly@hotmail.com",
//   })
// );

// function generateId() {
//   return "_" + Math.random().toString(36).substr(2, 9);
// }

//* Example 6 - Операція rest
// Напиши функцію transformUsername(user) так, щоб вона повертала новий об'єкт із властивістю fullName, замість firstName та lastName.

// function transformUsername({ firstName, lastName, ...restProps }) {
//   return {
//     fullname: `${firstName} ${lastName}`,
//     ...restProps,
//   };
// }

// console.log(
//   transformUsername({
//     id: 1,
//     firstName: "Jacob",
//     lastName: "Mercer",
//     email: "j.mercer@mail.com",
//     friendCount: 40,
//   })
// );

// /*
// {
//     id: 1,
//     fullName: "Jacob Mercer",
//     email: "j.mercer@mail.com",
//     friendCount: 40,
// }
// */

// console.log(
//   transformUsername({
//     id: 2,
//     firstName: "Adrian",
//     lastName: "Cross",
//     email: "a.cross@hotmail.com",
//     friendCount: 20,
//   })
// );

// function findMatches(arr, ...args) {
//   const result = [];
//   for (const num of args) {
//     if (arr.includes(num)) {
//       result.push(num);
//     }
//   }

//   return result;
// }

// console.log(findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7, 4));

// function add(...args) {
//   const total = 0;
//   for (const arg of args) {
//     total += arg;
//   }
//   return total;
// }

// console.log(add(1, 5, 3));

//! Коллбеки. Стрілочні функції. forEach.

//* Example 1 - Коллбек функції

// Напишіть наступні функції:

//? createProduct(obj, callback) - приймає об'єкт товару без id, а також коллбек. Функція створює об'єкт товару, додаючи йому унікальний ідентифікатор у властивість id та викликає коллбек передаючи йому створений об'єкт.

//? logProduct(product) - колббек приймаючий об'єкт продукту і логуючий його в консоль

//? logTotalPrice(product) - колббек, що приймає об'єкт продукту і логіює загальну вартість товару в консоль

//? Виконайте рефакторинг коду за допомогою стрілочних функцій.

/*
{
    name: string,
    amount: number,
    price: number
}
*/

// function createProduct(obj, callback) {
//   const newObj = { ...obj, id: Date.now() };
//   callback(newObj);
// }

// // function logProduct(product) {
// //   console.log(product);
// // }

// // function logTotalPrice({ amount, price }) {
// //   console.log(amount * price);
// // }

// const logProduct = (product) => console.log(product);

// const logTotalPrice = ({ amount, price }) => console.log(amount * price);

// const product = {
//   name: "Cheese",
//   price: 20,
//   amount: 100,
// };

// createProduct(product, logProduct);
// createProduct(product, logTotalPrice);

//* Example 3 - Коллбек функції

//? Напишіть функцію each(array, callback), яка першим параметром очікує масив, а другим - функцію, яка застосовується до кожного елемента масиву. Функція each повинна повернути новий масив, елементами якого будуть результати виклику коллбека.

//? Виконайте рефакторинг коду за допомогою стрілочних функцій.

// function each(array, callback) {
//   /*
//     1. створюємо пустий масив
//     2. перебираємо всі елементи масиву за допомогою циклу
//         2.1. створюємо новий елемент масиву викликаючи колбек ф-цію на поточному елементі масиву
//         2.2. додати цей елемент в новий масив
//     3. повернути новий масив
//     */
//   const newArray = [];
//   for (const el of array) {
//     const newEl = callback(el);
//     newArray.push(newEl);
//   }
//   return newArray;
// }

// //------

// function square(el) {
//   return el * el;
// }

// const arr = [1, 2, 3, 4, 5];

// console.log(each(arr, square)); // [1, 4, 9, 16, 25]

// console.log(each(arr, (el) => el + 1));
// console.log(each(arr, (el) => Math.sqrt(el)));
// console.log(each(arr, (el) => 5 * el));
// console.log(each(arr, (el) => el % 2 === 0));

//* порахувати середнє арифметичне всіх елементів масиву за допомогою forEach

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

// let sum = 0;

// arr.forEach((el) => (sum += el));

// console.log(sum / arr.length);

//? map - повертає новий масив, кожен елемент якого був змінений умовою колбек ф-ції
// // arr.map((el, i, arr) => body);

// const arr = [1, 2, 3, 4, 5];
// const newArr = arr.map((el) => el * el);
// console.log(arr);
// console.log(newArr);

//? filter - повертає новий масив, який містить тільки ті елементи, які задовольняють умову колбек ф-ції

// const arr = [6, -8, 99, 3, -90, 111, -87, 56, 44, -42];
// const newArr = arr.filter((el) => el > 0);

// console.log(arr);
// console.log(newArr);

//? find - повертає перший елемент з масиву, який підходить умові колбек ф-ції, якщо такого елементу не було знайдено - поверне undefined

// const arr = [
//   { name: "Oleg", status: "user" },
//   { name: "Alex", status: "admin" },
//   { name: "Vika", status: "user" },
// ];

// // const adminUser = arr.find((user) => user.status === "admin");
// // aбо

// const adminUser = arr.find(({ status }) => status === "admin");

// console.log(adminUser);

//? findIndex - повертає індекс першого елементу з масиву, який підходить умові колбек ф-ції, якщо такого елементу не було знайдено - поверне -1

// const arr = [
//   { name: "Oleg", status: "user" },
//   { name: "Alex", status: "admin" },
//   { name: "Vika", status: "user" },
// ];

// const adminUserIndex = arr.findIndex(({ status }) => status === "admin");

// console.log(adminUserIndex);

//? every - повертає true якщо кожен елемент масиву проходить перевірку умовою колбек ф-ції, інакше - повертає false

// const arr = [5, 95, 65, 90, 100, 55, 15, 85, 150];
// const check = arr.every((el) => el % 5 === 0);
// console.log(check);

//? some - повертає true якщо хоча б один елемент масиву проходить перевірку умовою колбек ф-ції, інакше - повертає false

// const arr = [-6, -10, -99, -88, 22, -96];
// const check = arr.some((el) => el > 0);
// console.log(check);

//? sort - сортує масив за умовою колбек ф-ції(якщо без ф-ції - сортує в лексикографічному порядку) - мутує масив

// const arr = [6, -8, 99, 3, -90, 111, -87, 56, 44, -42];

// arr.sort((a, b) => a - b); // сортування масиву за зростанням
// arr.sort((a, b) => b - a); // сортування масиву за спаданням

// console.log(arr);

// const arr = ["c", "p", "o", "h", "a", "y", "e", "b", "A"];

// const sort1 = [...arr].sort((a, b) => a.localeCompare(b)); // сортування в алфавітному порядку
// const sort2 = [...arr].sort((a, b) => b.localeCompare(a)); // сортування в звороньому алфавітному порядку

// console.log(arr)
// console.log(sort1)
// console.log(sort2)

//? reduce - ітерує масив і в залежності від умови та початкового значення повертає те, що потрібно розробнику

// const arr = [1, 2, 3, 4, 5];
// const sum = arr.reduce((acc, el) => el + acc, 0);
// console.log(sum);

// 1 коли є початкове значення

// 1. arr.reduce((acc = 0, el = 1) => 1 + 0, 0);
// 2. arr.reduce((acc = 1, el = 2) => 1 + 2, 0);
// 3. arr.reduce((acc = 3, el = 3) => 3 + 3, 0);
// 4. arr.reduce((acc = 6, el = 4) => 6 + 4, 0);
// 5. arr.reduce((acc = 10, el = 5) => 10 + 5, 0);
// result: 15

//2 коли немає початкового значення

// 1. arr.reduce((acc = 1, el = 2) => 1 + 2);
// 2. arr.reduce((acc = 3, el = 3) => 3 + 3);
// 3. arr.reduce((acc = 6, el = 4) => 6 + 4);
// 4. arr.reduce((acc = 10, el = 5) => 10 + 5);
// result: 15

//! ========================================

const cars = [
  {
    make: "Honda",
    model: "CR-V",
    type: "suv",
    amount: 14,
    price: 24045,
    onSale: true,
  },
  {
    make: "Honda",
    model: "Accord",
    type: "sedan",
    amount: 2,
    price: 22455,
    onSale: true,
  },
  {
    make: "Mazda",
    model: "Mazda 6",
    type: "sedan",
    amount: 8,
    price: 24195,
    onSale: false,
  },
  {
    make: "Mazda",
    model: "CX-9",
    type: "suv",
    amount: 7,
    price: 31520,
    onSale: true,
  },
  {
    make: "Toyota",
    model: "4Runner",
    type: "suv",
    amount: 19,
    price: 34210,
    onSale: false,
  },
  {
    make: "Toyota",
    model: "Sequoia",
    type: "suv",
    amount: 16,
    price: 45560,
    onSale: false,
  },
  {
    make: "Toyota",
    model: "Tacoma",
    type: "truck",
    amount: 4,
    price: 24320,
    onSale: true,
  },
  {
    make: "Ford",
    model: "F-150",
    type: "truck",
    amount: 11,
    price: 27110,
    onSale: true,
  },
  {
    make: "Ford",
    model: "Fusion",
    type: "sedan",
    amount: 13,
    price: 22120,
    onSale: true,
  },
  {
    make: "Ford",
    model: "Explorer",
    type: "suv",
    amount: 6,
    price: 31660,
    onSale: false,
  },
];

//* Example 1 - Метод map
// Нехай функція getModels повертає масив моделей (поле model) всіх автомобілів.

// const getModels = (cars) => cars.map(({ model }) => model);

// console.table(getModels(cars));

//! ========================================

//* Example 2 - Метод map
// Нехай функція makeCarsWithDiscount повертає новий масив об'єктів із змінним значенням властивості price залежно від переданої знижки.

// const makeCarsWithDiscount = (cars, discount) =>
//   cars.map((car) => ({ ...car, price: car.price * (1 - discount) }));

// console.table(makeCarsWithDiscount(cars, 0.2));
// console.table(makeCarsWithDiscount(cars, 0.4));

// console.table(cars)

//! ========================================

//* Example 5 - Метод filter
// Нехай функція getCarsWithType повертає масив автомобілів тип яких збігається зі значенням параметра type.

// const getCarsWithType = (cars, carType) => cars.filter((car) => car.type === carType);

// console.table(getCarsWithType(cars, "suv"));
// console.table(getCarsWithType(cars, "sedan"));

//! ========================================

//* Example 6 - Метод find
// const getCarByModel = (cars, carModel) =>
//   cars.find((car) => car.model === carModel);

// console.log(getCarByModel(cars, "F-150"));
// console.log(getCarByModel(cars, "CX-9"));

//! ========================================

//* Example 8 - Метод sort
// Нехай функція sortByDescendingPrice повертає новий масив автомобілів відсортований за зменшенням значення властивості price.

// const sortByDescendingPrice = cars => [...cars].sort((a, b) => b.price - a.price);

// console.table(sortByDescendingPrice(cars));

//! ========================================

//* Example 9 - Метод sort
// Нехай функція sortByModel повертає новий масив автомобілів відсортований за назвою моделі в алфавітному та зворотному алфавітному порядку, в залежності від значення параметра order.

// const sortByModel = (cars, order) =>
//   [...cars].sort((a, b) =>
//     order === "asc"
//       ? b.model.localeCompare(a.model)
//       : a.model.localeCompare(b.model)
//   );

// const sortByModel = (cars, order) =>
//   [...cars].sort((a, b) => {
//     switch (order) {
//       case "asc":
//         return b.model.localeCompare(a.model);
//       case "desc":
//         return a.model.localeCompare(b.model);
//     }
//   });

// console.table(sortByModel(cars, "asc"));
// console.table(sortByModel(cars, "desc"));

//! ========================================

//* Example 10 - Метод reduce
// Нехай функція getTotalAmount повертає загальну кількість автомобілів (значення властивостей amount).

// const getTotalAmount = (cars) => cars.reduce((acc, car) => acc + car.amount, 0);

// console.log(getTotalAmount(cars));

//! ========================================

//* Example 11 - Ланцюжки методів
// Нехай функція getAvailableCarNames повертає масив моделей автомобілів, але тільки тих, які зараз на розпродажі.

// const getModelsOnSale = cars => cars.filter(car => car.onSale).map(car => car.model);

// console.table(getModelsOnSale(cars));

//! ========================================

//* Example 12 - Ланцюжки методів
// Нехай функція getSortedCarsOnSale повертає масив автомобілів на розпродажі (Властивість onSale), відсортованих за зростанням ціни.

// const getSortedCarsOnSale = (cars) =>
//   cars.filter((car) => car.onSale).sort((a, b) => a.price - b.price);

// console.table(getSortedCarsOnSale(cars));

//! ========================================

// const friends = ["Sharron Pace", "Briana Decker", "Sharron Pace"];

// const uniqueFriends = [...new Set(friends)];
// console.log(uniqueFriends);

// const uniqueFriends = friends.filter(
//   (friend, index, array) => array.indexOf(friend) === index
// );

// console.log(uniqueFriends);

/* ["Sharron Pace", "Briana Decker"]
1. friends.filter(
  (friend = "Sharron Pace", index = 0, array) => array.indexOf("Sharron Pace") === 0 // 0 === 0 - true
);
2. friends.filter(
  (friend = "Briana Decker", index = 1, array) => array.indexOf("Briana Decker") === 1 // 1 === 1 - true
);
3. friends.filter(
  (friend = "Sharron Pace", index = 2, array) => array.indexOf("Sharron Pace") === 2 // 0 === 2 - false - елемент не піде в новий масив, тому що він вже там існує
);

*/

//! ========================================

// const students = [
//   { name: "Манго", courses: ["математика", "фізика"] },
//   { name: "Полі", courses: ["інформатика", "математика"] },
//   { name: "Ківі", courses: ["фізика", "біологія"] },
// ];

// const courses = students.flatMap((student) => student.courses);

// console.log(courses);

// const courses = [
//   [
//     "математика",
//     "фізика",
//     ["фізика", "біологія", ["інформатика", "математика", [0, 3, [[[[4, 3]]]]]]],
//   ],
// ];

// console.log(courses.flat(Infinity));
