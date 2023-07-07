// console.log('Hello')

//Class objects inheritance

//object tanımlama
const cars:{
    type:string,
    model:string,
    year:number
} = {
    type: 'Audi',
    model: 'A5',
    year:2000
}

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
abstract class Vehicle {

    year: number;
    color: string;
    constructor(year: number, color: string) {
      this.year = year;
      this.color = color;
    }
  
    startEngine(): void {
      console.log(`Engine Started`)
    }
  
    abstract stopEngine(): void;
  }
  
  
  class Car extends Vehicle {
    
    model: string;
    numOfDoors: number

    constructor(year: number, color: string, model: string, numOfDoors: number) {
      super(year, color);
      this.model = model;
      this.numOfDoors = numOfDoors
    }
  
    stopEngine(): void {
        console.log(' Car stopped !')
    }
  
  }
  
  
  const car = new Car(1984, 'blue', 'bmw', 4);
  
  console.log(car.color);
  car.startEngine();
  car.stopEngine();

  //protected

/* class Employee {
  public empName: string;
  protected empCode: number;
  private id = Math.random();
  constructor(empCode: number, name: string) {
    this.empCode = empCode;
    this.empName = name
  }
}

class DevelopmentEmployee extends Employee {
  private department: string;

  constructor(code: number, name: string, dep: string) {
    super(code, name);
    this.department = dep;
    this.id = 100
    this.empCode = 20
  }
 }

let emp = new DevelopmentEmployee(100, "John", "Backend")
console.log(emp.department) // Compiler Error
console.log(emp.empCode) // Compiler Error */


//static

/* class Circle {
    static pi: number = 3.14;
  
    static calcArea(radius:number) {
      return this.pi * radius * radius
    }
}

console.log(Circle.pi)
console.log(Circle.calcArea(5)) */

//Interface

interface Color {
    color: {r: number, g: number, b: number};
}

const red:Color = {color: {r: 255, g:0, b:0}}

console.log(red)

interface Shape {
    area: number;
}

let shape1: Shape = {area:255}

shape1.area = 366

class Square implements Color, Shape {
    constructor( public color: {r: number, g: number, b:number}, public area: number){
    }
}

const sq = new Square({r:255,g:255,b:0} , 255)
console.log(sq);

//ınterfaces as a function types

interface Sum{
    (num1: number, num2: number): number;
}

function add(n1: number, n2: number): number{
    return n1+ n2;
}

function conC(n1: string, n2: string): string{
    return n1+n2;
}

let arithemticAdd:Sum = add;

console.log(arithemticAdd(2,5)); 

let conct:Sum = conC //Hata