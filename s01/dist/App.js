"use strict";
// console.log('Hello World');
// const button = document.getElementById('submit')!;
// const a = document.getElementById('input1')! as HTMLInputElement;
// const b = document.getElementById('input2')! as HTMLInputElement;
// const result = document.getElementById('result')!;
// const test = document.querySelector('p')!;
// const test2 = document.querySelector('a')!;
// function add(a:number, b:number) {
//     return a + b;
// }
// button.addEventListener('click', function () {
//     result.innerText = `${add(+a.value, +b.value)}`;
// });
//ES5 ile  uygun compile edilir.
// const x = 5;
// let y = 6;
// const carp = (c,d)=>{
//     c*d
// }
// let message: string = 'Hello'
// let message = 'Hello'
// message = 5;
// message = false;
// let msg;
// msg = 6;
// msg = 'hello'
// msg = false
//Data Types - Array
let fruits = ['orange'];
fruits.push('apple');
// fruits.push(45)
//Generic array
let numbers = [1, 2, 3];
// numbers.push('Hello')
numbers.push(4);
//empty array
let score = []; //any tipte oluşur
let score2 = []; // number veya istenilen tipte boş array oluşturur. 
//tuples
let myTuple;
myTuple = [1, 'Mark', true]; //Ok
//myTuple = [1,'Mark',3] // hata
// myTuple[2]=4 // Hata
// myTuple[2]=false // OK
myTuple.push('Merhaba'); //OK
let m2;
m2 = [0, 'Hello'];
m2.push(false); // Hata
m2.push(3); // OK
console.log(m2);
//Array of tuple
let arrTuple;
arrTuple = [[1, 'mark'], [2, 'Ashley']];
arrTuple.push([3, 'Ethan']); //ok
arrTuple.push(['Cedric', 4]); //hata
let mark = 1 /* Role.Admin */;
console.log('Mark = ' + mark);
mark = 2 /* Role.Tester */;
const request = 202 /* StatusCodes.Accepted */;
console.log(request);
//enum string
var Size;
(function (Size) {
    Size["Small"] = "S";
    Size["Medium"] = "M";
    Size["Large"] = "L";
    Size["XLarge"] = "XL";
})(Size || (Size = {}));
let tshirt = Size.Small;
console.log({ tshirt });
let skirt = Size.Large;
console.log(`skirt ${skirt}`);
const head = 42 /* SizeMix.XLarge */;
console.log(`head ${head}`);
