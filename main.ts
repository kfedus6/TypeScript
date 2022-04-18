
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