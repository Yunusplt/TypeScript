"use strict";
// console.log('Hello')
//Class objects inheritance
//object tanımlama
const cars = {
    type: 'Audi',
    model: 'A5',
    year: 2000
};
//Inheritance
/*
class Person{
    name: string;
    constructor(name: string){
        this.name = name
    }
    display(){
        console.log(` Name: ${this.name}`)
    }
}

class Employee extends Person{
    emplyCode: number;
    constructor(emplyCode: number, name: string){
        super(name);
        this.emplyCode = emplyCode;
    }

    displayCode():void{
        console.log(` Name: ${this.name}  - code ${this.emplyCode}`)
    }
}

const emply1 = new Employee(100, 'Mark')
// const emply2 = new Employee(200, 'Ashley')
// const emply2 = new Employee('100', 'Mark') //hata

// console.log(emply1)

emply1.displayCode()
emply1.display()
// emply2.display()

const per1 = new Person('Mike')

per1.display() */
//abstract
class Vehicle {
    constructor(year, color) {
        this.year = year;
        this.color = color;
    }
    startEngine() {
        console.log(`Engine Started`);
    }
}
class Car extends Vehicle {
    constructor(year, color, model, numOfDoors) {
        super(year, color);
        this.model = model;
        this.numOfDoors = numOfDoors;
    }
    stopEngine() {
        console.log(' Car stopped !');
    }
}
const car = new Car(1984, 'blue', 'bmw', 4);
console.log(car.color);
car.startEngine();
car.stopEngine();
const red = { color: { r: 255, g: 0, b: 0 } };
console.log(red);
let shape1 = { area: 255 };
shape1.area = 366;
class Square {
    constructor(color, area) {
        this.color = color;
        this.area = area;
    }
}
const sq = new Square({ r: 255, g: 255, b: 0 }, 255);
console.log(sq);
function add(n1, n2) {
    return n1 + n2;
}
function conC(n1, n2) {
    return n1 + n2;
}
let arithemticAdd = add;
console.log(arithemticAdd(2, 5));
let conct = conC; //Hata
