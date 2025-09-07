console.log("gello worldsadf");

// allowed
var a = 5;
var a = "hello";
var b = 10;
console.log("sum: ", a + b);

// not allowed

let x = 100;
//let x = "hello"

{
    var a = 20;
    console.log(a)
    let x = 'JavaScript'   
    console.log(x) // JavaScript
}
console.log(a);
console.log(x) // 100

// Function declaration

function greet(){
    console.log(this) // {}
    console.log(arguments)// error
    console.log("Greetings")
}
function add (a, b){
    return a + b;
}

// Function expression

hello = function(){ // use const or let
    console.log(this) // {}
    console.log(arguments)// error
    console.log("HI there")
}
// Arrow function
hi = () => {
    console.log(this) // {}
    console.log(arguments)// error
    console.log("HI there")
}
hello();
hi();
console.log(typeof greet) // function