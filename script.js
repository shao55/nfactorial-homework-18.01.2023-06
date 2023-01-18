// Перепишите функцию, используя оператор '?' или '||'
// 1 вариант
function checkAge(age) {
    return age > 18 ? true : confirm('Родители разрешили?');
  }
// 2 вариант
function checkAge(age) {
    return age > 18 || confirm('Родители разрешили?');
  }

//Функция pow(x,n)
let pow = (x, n) => x * (x * n);
console.log(pow(3,2));

//Перепишите с использованием функции-стрелки
function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();
  }
  
  ask(
    "Вы согласны?",
    () => alert("Вы согласились."),
    () => alert("Вы отменили выполнение.")
  );

//Сортировать в порядке по убыванию
let arr = [5, 2, 1, -10, 8];
function sortf(a, b) {
    return (b - a);
};
arr.sort(sortf)
alert( arr );

// Трансформировать в массив имён
let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let users = [ vasya, petya, masha ];

let names = users.map(item => item.name);

alert( names );

// Трансформировать в объекты
let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
let petya = { name: "Петя", surname: "Иванов", id: 2 };
let masha = { name: "Маша", surname: "Петрова", id: 3 };

let users = [ vasya, petya, masha ];

let usersMapped = users.map(user => ({
    fullName: `${user.name} ${user.surname}`,
    id: user.id
  }));

/*
usersMapped = [
  { fullName: "Вася Пупкин", id: 1 },
  { fullName: "Петя Иванов", id: 2 },
  { fullName: "Маша Петрова", id: 3 }
]
*/

alert( usersMapped[0].id ) // 1
alert( usersMapped[0].fullName ) // Вася Пупкин

// Получить средний возраст

function getAverageAge(users) {
    return users.reduce((prev, user) => prev + user.age, 0) / users.length;
  }
  
  let vasya1 = { name: "Вася", age: 25 };
  let petya1 = { name: "Петя", age: 30 };
  let masha1 = { name: "Маша", age: 29 };
  
  let arr1 = [ vasya, petya, masha ];
  
  alert( getAverageAge(arr) );
  