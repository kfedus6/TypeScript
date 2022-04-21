
//let x: number = 2;
//let y: boolean = true;
//console.log(x + y);

//string number boolean null undefined array
// +TS tuple, Enum, Any, Never
// type

//let words: string[] = ["hello", "workd", "pasha"] // typeof words == array
//let objects: any[] = ['5', 12, true]

//typeof - возвращает тип данных (строка)

//void - когда функция ничего не возвращает

/*
function send(name?: string): void {
   if (name) {
      console.log(`name:${name}`)
   } else {
      console.log('name not enter')
   }
}

send()
*/

/*
function getInfoId(n: any): void {
   console.log(`ваш ид ${n}`);
}

getInfoId(3) // Ваш ид 3
getInfoId("4") //Ваш ид 4
*/

/*
function getSum(n1?: number, n2?: number): string {
   if (n1 && n2) {
      return (`Ответ: ${17}`)
   } else if (n1) {
      return `Ответ: ${n1}`
   } else {
      return `Ответ: ${0}`
   }
}

console.log(getSum(4, 13)) //Ответ: 17
console.log(getSum(4)) //Ответ: 4
console.log(getSum()) //Ответ: 0
*/

/*
let nums: number[] = [1, 2, 3, 4, 5, 6, 7];

function numb(arr: number[]): number[] {
   let maxNum = Math.max(...arr);
   let minNum = Math.min(...arr);
   let res = arr.reduce((sum: number, current: number) => {
      return sum + current;
   })
   let newArr = [];
   newArr.push(minNum, maxNum, res / arr.length);
   return newArr
}

console.log(numb(nums));

function words(str: string): any[] {
   let strSplit = str.split(' ');
   let word = strSplit.reduce((a: string, b: string) => (b.length > a.length) ? b : a);
   let arrStr = [];
   arrStr.push(strSplit.length, word)
   return arrStr;
}

console.log(words('hello google'));
*/
/*
function n(str: string): string[] {
   return str.match(/\d/g)
}

console.log(n('ascas323f3cx23'));
*/

/*
const n = (str: string): string[] => {
   return str.match(/\d/g)
}

console.log(n('ascas323f3cx23'));
*/


//union = |

/*
let numbers: number | string
numbers = '748328423';
numbers = 3281371
*/

/*
const s = (): boolean | string => {
   return asdnajs
}
*/

// ? - необязательное поле

//let user: { name: string; age?: number } = { name: "Pasha", age: 23 };
//user = { name: "Pasha" }

/*
interface Intercity {
   name: string,
   population: number
}

const getInfoCity = (city: Intercity): string => {
   return `city name ${city.name}, population - ${city.population}`
}

let city = { name: "Pavlograd", population: 123123 };
getInfoCity(city) // city name Pavlograd, population - 1231231
*/

/*
type id = number | string

let userId:id = '3'
let carId:id = 2
*/


/*
Cоздать функцию которая принимает массив объектов. Где каждый объект является машиной.
Перебрать все машины марки bmw. и вернуть их массивом. Предусмотреть то, что машины могут не передаться в функцию
Тогда вернуть строку - Машины не были переданы.
Использовать TS и типизацию
*/

/*
interface carObj {
   name: string,
   price: number
}

const car = [
   { name: 'bmw', price: 2999 },
   { name: 'mazda', price: 40000 },
   { name: 'opel', price: 5000 },
]

Array<number> = number[]

const cars = (car?: Array<carObj>): string | Array<carObj> => {
   let arrCar = [];
   if (car == undefined) {
      return 'Машины не были переданы'

   }
   for (let item of car) {
      if (item.name === 'bmw') {
         arrCar.push(item)
         return arrCar
      }
   }
}


console.log(cars());
*/

/*
interface contact{
   phone:string,
   curs:string
}

let student: [string,contact,boolean] = ["Pasha",{phone:"83921123",curs:"17381273"},true]
*/

/*
enum Season {
   Winter = 'Зима',
   Spring = 'Весна',
   Summer = 'Лето',
   Autumn = 'Осень'
}

console.log(Season.Summer)
*/

/*
enum, interface, type | ?

Меню
1-Открыть счет
   Логин Пароль
2-Посмотреть баланс
   Логин Пароль
3-Снять деньги с баланса
   Логин Пароль
4-Пополнить баланс
   Логин
5-Выйти
*/

interface user {
   login: string,
   password: number,
   sum: number
}

let arrUser: Array<user> = [];

const addUser = (): Array<user> => {
   let newLogin = prompt('Login:');
   let newPassword = +prompt('Password:');
   let sum = 0
   arrUser[arrUser.length] = { login: newLogin, password: newPassword, sum: sum }
   return arrUser;
}

const watchBalance = (): void => {
   let login = prompt('Login:');
   let password = +prompt('Password:');
   arrUser.filter(item => {
      if (item.login === login && item.password === password) {
         console.log(`${item.login}: ${item.sum}`);
      } else {
         console.log('неверний логин или пароль');
      }
   })
}

const takeMoney = (): Array<user> => {
   let login = prompt('Login:');
   let password = +prompt('Password:');
   arrUser.forEach(item => {
      if (item.login === login && item.password === password) {
         let money = +prompt('Снять деньги с баланса:');
         item.sum -= money;
         console.log(`${item.login}: ${item.sum}`)
      } else {
         console.log('неверний логин или пароль');
      }
   })
   return arrUser;
}

const addSum = () => {
   let login = prompt('Login:');
   arrUser.forEach(item => {
      if (item.login === login) {
         let money = +prompt('Пополнить баланс:');
         item.sum += money;
         console.log(`${item.login}: ${item.sum}`)
      } else {
         console.log('неверний логин');
      }
   })
}

type nb = number | boolean

let menu: nb;
let exit: nb;

do {
   menu = parseInt((prompt("1-Открыть счет\n 2-Посмотреть баланс\n 3-Снять деньги с баланса\n 4-Пополнить баланс\n 5-Выйти")))
   switch (menu) {
      case 1: {
         console.log(addUser());
         break;
      }
      case 2: {
         watchBalance()
         break;
      }
      case 3: {
         takeMoney()
         break;
      }
      case 4: {
         addSum()
         break;
      }
      case 5: {
         exit = true;
         console.log('Ви вийшли');
         break;
      }
      default: {
         console.log('error')
         break;
      }
   }

} while (!exit);

