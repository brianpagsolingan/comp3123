// Callback function examples

function sayHello(name){
    console.log(`Hello, ${name}!`)
}

function welcome(name){
    console.log(`Welcome, ${name}!`)
}

function greet(name, callback){
    callback(name);
}

greet("Brian", sayHello) // output : hello brian
greet("Bob", welcome) // welcom bob

setInterval(()=>{
    console.log('This message is displaved every second')
}, 1000)

// SImulating an asybnc operation

function fetchData(callback){
    setTimeout(() => {
        const data = {id: 1, name: 'Sample Data'};
        callback(data);
    }, 1500)
}

fetchData((data)=>{
    console.log('Data fetched' , data);
})