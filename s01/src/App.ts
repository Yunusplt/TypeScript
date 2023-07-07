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


let fruits:string[] = ['orange']

fruits.push('apple')
// fruits.push(45)

//Generic array
let numbers:Array<number>= [1,2,3]

// numbers.push('Hello')
numbers.push(4)

//empty array

let score = [] //any tipte oluşur

let score2:number[] = [] // number veya istenilen tipte boş array oluşturur. 


//tuples

let myTuple: [number,string,boolean]

myTuple = [1,'Mark',true] //Ok
//myTuple = [1,'Mark',3] // hata

// myTuple[2]=4 // Hata
// myTuple[2]=false // OK

myTuple.push('Merhaba') //OK

let m2: [number,string]

m2 = [0, 'Hello']

m2.push(false) // Hata
m2.push(3) // OK
console.log(m2)

//Array of tuple

let arrTuple: [number,string][]

arrTuple = [[1,'mark'],[2,'Ashley']]

arrTuple.push([3,'Ethan']) //ok
arrTuple.push(['Cedric',4]) //hata


//enum number

// enum Role {
//     User,
//     Admin,
//     Tester
// }

const enum Role {
    User,
    Admin,
    Tester
}


let mark: Role = Role.Admin

console.log('Mark = '+ mark)

mark = Role.Tester


const enum StatusCodes {
    NotFound = 404, 
    Success = 200, 
    Accepted = 202, 
    BadRequest = 400,
    ServerError = 500
}

const request: StatusCodes = StatusCodes.Accepted

console.log(request)



//enum string

enum Size{
    Small = 'S',
    Medium = 'M',
    Large = 'L',
    XLarge = 'XL'
}

let tshirt: Size = Size.Small

console.log({tshirt})

let skirt: Size = Size.Large

console.log(`skirt ${skirt}`)

//enum mix

const enum SizeMix{
    Small = 'S',
    Medium = 'M',
    Large = 40,
    XLarge = Large+2,
    XXLarge
}


const head:SizeMix= SizeMix.XLarge

console.log(`head ${head}`)