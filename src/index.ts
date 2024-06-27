// practice

let age: number = 50;

let weight: number = 150.3;

let myName: string = "Yasin";

let greeting: string = `Hello ${myName}!`;

let isAdult: boolean = true;

let numbers: number[] = [1, 2, 3, 4]

console.log(numbers.length)

let person: [string, number] = ["John", 88]

enum Color {Red, Green, Blue}

let myColor: Color = Color.Blue;

enum Role {ADMIN, USER, MARKETER}

let currentUser: Role = Role.ADMIN

let variable: any = "myVariable";

variable = 2021
variable = "String"

function logMessage(message: string): void {
    console.log(message)
}

logMessage("Hey")

function greet(name: string) : string {
    return `Hello ${name}`
}

const add : (a: number, b: number) => number  = function(a, b) {
    return a + b
}

const subtract: (a: number, b:number) => number = (a, b) => {
    return a - b
}

subtract(50, 10)

function createGreeting(name: string, age?: number): string {
    return `Hello I'm ${name} and I am ${age} years old`
}

createGreeting("Yasin", 17)