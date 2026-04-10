console.log("Hello World");


let message:string = "Hello TypeScript";
console.log(message); 

console.log("Hello Type");

function add(a:number, b:number):number {
    return a + b;
}
console.log(add(5, 3));

// interface

interface Person{
  name:string;
  age:number;
}

let user:Person = {
  name:"John",
  age:30
}

console.log(user.name);
console.log(user.age);


// array

let numbers:number[] = [1 , 2 , 3 , 4  ,5]

numbers.forEach(num => console.log(num))

console.log(numbers);

let value: string | number;

value = "Hello";
value = 42;

console.log(value); 