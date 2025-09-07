console.log('JS Objects')

obj1 = {
    sid: 101,
    sName: "Alice",
    marks: 85,
    isAdmin: false,
    1000: "one thousand",
    null: "Null value",
    true: "Boolean True",
    "city name": "New York",

    display: function(){
        console.log(this) // obj1 
        console.log(this.sid, this.sName)
    },
    print: () => {
        console.log(this); // {}
    }
}
obj1.country = "Austria"

console.log(obj1);
console.log(typeof obj1);
console.log(obj1.sid);// 101
console.log(obj1.sName); // Alice
console.log(obj1['sName']); // Alice
//console.log(obj1.1000); // error must use square brackets
console.log(obj1[1000]); // one thousand
let k1 = 1000
console.log(obj1[k1]); // one thousand
console.log(obj1.null);// Null value
console.log(obj1.true); // Boolean VAlue
obj1.display(); //  191 Alice
obj1.print(); // {}

// Function Constructor

function Employee(eId, eName, salary){
    this.eId = eId;
    this.eName = eName;
    this.salary = salary;
    this.show = function(){
        console.log(this.eId, this.eName, this.salary, this.bonus)
    }
}
Employee.prototype.bonus= 1000;
//emp1.showBonus(); // error
Employee. prototype.showBonus = function(){
    console.log("Bonus: ", this.bonus)
}
let emp1 = new Employee(101, "Brian", 50000000)
emp1.show() // 101 Brian 50000000 1000
emp1.showBonus();