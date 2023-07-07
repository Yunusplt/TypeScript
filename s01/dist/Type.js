"use strict";
/* //Any

let x;

x = false;
x = 'Hello'
x = 5;

let y: any;

y = 5;
y = false;
y = 'Hello'


let c :number = x

//unknown


let notSure: unknown = 4;

let d: number = notSure

notSure = 'four'
let e :string = notSure

let f : any = notSure // Unknown sadece any ye atanabilir

 */
//void 
// Değişkenlerde kullanmıyoruz. fonksiyon dönüş tipidir
// return ıu olmayan fonksiyonların dönüş tipi.
function myFunc() {
    console.log('Hello');
    return undefined;
}
//Never
// function myF2():never{
//     while(true){
//     }
// }
// console.log(myF2())
// console.log('Hello')
// function error(message: string): never{
//     throw new Error(message);
// }
// let output = error('New Error')
// console.log(output)  //return nothing - printing nothing 
//union Type
let code = 123;
code = 'abc';
code = false; // error
//type narrowing
function add(a, b) {
    a.toString;
    if (typeof a === 'number') {
        a.toFixed(2);
    }
    else {
        a.length;
    }
}
function add2(a, b) {
    if (typeof a === 'number') {
        a.toFixed(2);
    }
    else {
        a.length;
    }
}
//String Literals
/*
type Car = 'BMW' | 'Audi' | 'Mercedes'

let arac1: Car = 'Audi';
let arac2: Car = 'BMW';
let arac3: Car = 'Mercedes';
let arac4: Car = 'Ferrari';


 */
// Intersection
// type Book = {
//     book_id:number;
//     book_name:string;
// }
// type Author = {
//     author_id:number;
//     author_name:string;
//     getId():number
// }
// type sales = Book & Author
// let lotr: sales = {
//     book_name: 'Lord of The Rings',
//     book_id: 1234,
//     author_name: 'J.R.R Tolkien',
//     author_id: 1892,
//     getId(){
//         console.log(this.book_id)
//         return this.book_id
//     }
// }
// lotr.book_name = 2
//Type assertions
// let scr2: unknown = '350';
// console.log((scr2 as string).split(''))
// let scr3:string = scr2 as string
// console.log((<number>scr2))
// console.log(250)
//functions
// function greet ( mesaj:string, isim:string):string{
//     return `${mesaj + ' ' + isim}`
// }
// console.log(greet('Günaydın','DE05'))
// console.log(greet('Günaydın')) // Hata
// console.log(greet('Günaydın','DE05','merhaba')) //Hata
//optional parametres
/* function greet2 ( mesaj:string, isim?:string):string{
    if(!isim){
        isim = 'User'
    }
    return `${mesaj + ' ' + isim}`
}

console.log(greet2('Günaydın','DE05'))
console.log(greet2('Günaydın')) */
//function overloading
// function topla (a:number, b:string):string;
// function topla (a:string, b:string):string;
// function topla (a:number, b:number):number;
// function topla (a:any, b:any):any{
//     return a+b
// }
// console.log(topla('Hello','World'))
// console.log(topla(10,'20')) 
// console.log(topla(10,20))
//rest parameters
function topla2(n, ...nums) {
    let toplam = n;
    nums.forEach(num => toplam += num);
    console.log(toplam);
}
topla2(2);
topla2(2, 3, 4, 5, 6, 70, 80, 90, 100);
