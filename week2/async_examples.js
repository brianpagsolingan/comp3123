async function sayHello(){
    return new Promise((resolve) =>{
        setTimeout(()=>{
            resolve("Hello world");
        }, 1000);
    });
}

// sayHello().then((message)=>{
//     console.log(message);
// });


async function getPromise(x){
        let myPromise = new Promise((resolve, reject) => {
        if (x > 10){
            resolve(`promise resolved: ${x} `);
        }else{
            reject('Promise rejected: x is not greater than 10');
        }
    })
    return myPromise;
}

async function callPromise(){
    console.log("---START---");
    try {
        let result = await getPromise(15);
        console.log(result);;
        //this will throw an error and jump to the catch
        result = await getPromise(5);
        console.log(result);
        // this will be executed if the above code is reolved
        result = await getPromise(12);
        console.log(result)
    } catch (error) {
        console.log("caught an error" , error);
    }finally{
        console.log("Promise has been settled");
    }
    
    console.log("---END---");
}

callPromise();