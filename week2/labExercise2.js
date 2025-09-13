//1
const greeter = (myArray, counter) => {
  const greetText = 'Hello';
  for (const name of myArray) {
    console.log(`${greetText} ${name}`);
  }
};

greeter(['Randy Savage', 'Ric Flair', 'Undertakerr'], 3)

//2

const capitalize = ([first, ...rest]) =>
    first.toUpperCase() + rest.join("");

console.log(capitalize("brian"));
console.log(capitalize('bertha'));

//3

const colors = ['red', 'green', 'blue'];
const capitalizedColors = colors.map(colors => capitalize(colors));

console.log(capitalizedColors);

//4 

const values = [1, 60, 34, 20 , 5]
const filterLessThanTwenty = (values) =>
    values.filter(num => num < 20);
console.log(filterLessThanTwenty(values))

//5 

const nums = [1,2,3,4]
const calculateSum = nums.reduce((acc, num) => acc + num , 0)
const calculateProduct = nums.reduce((acc,num) => acc * num, 1)

console.log(calculateSum);
console.log(calculateProduct);

//6

class Car {
    constructor(model, year){
        this.model = model;
        this.year = year;
    }
    details(){
       return `Model: ${this.model} ${this.year}`;
    }
}

class Sedan extends Car{
    constructor(model, year, balance){
        super(model, year)
        this.balance = balance
    }
    info(){
        return `${this.model} has a balance of $${this.balance}`;
    }
}
const car2 = new Car('Pontiac Firebird' , 1976);
console.log(car2.details());

const sedan = new Sedan('Volvo SD', 2018, 30000);
console.log(sedan.info());