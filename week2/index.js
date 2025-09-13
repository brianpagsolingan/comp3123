

function getPromise(x){
        let myPromise = new Promise((resolve, reject) => {
        if (x > 10){
            resolve(`promise resolved: ${x} `);
        }else{
            reject('Promise rejected: x is not greater than 10');
        }
    })
    return myPromise;
}

// Promise consumption
// getPromise(15).then((message) =>{
//     console.log(message);
// }, (error) => {
//     console.log(error);
// })

// ANother way to handle rejecton using .catch()

// getPromise(5)
//     .then((message) =>{
//         console.log(message); // this will run if promise is resolved
//     })
//     .catch((error) =>{
//         console.log(error); // will run if promise rejected
//     })
//     .finally(()=>{ // this will run regardless
//         console.log("promise jhas been settled (either resolved or not)")
//     });

// Promuse chaining
// getPromise(20)
//     .then((message) =>{
//         console.log(message);
//         return getPromise(15); // Returning another promse
//     })
//     .then((message) => {
//         console.log('Chained promise resolved: ', message);
//     })
//     .catch((error)=>{
//         console.log('Error in chained promise: ', error);
//     })


// Promise.all() parallel execution
Promise.all([getPromise(12), getPromise(15), getPromise(12)])
    .then((messages) =>{
        console.log('All promises resolved ', messages);
    })
    .catch((error) => {
        console.log('One of the promises reejected ', error);
    });

// Promise Race - First to settle
function getPromiseForRace(time){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(`Resolved after ${time} ms`);
        }, time)
    });
}

Promise.race([getPromiseForRace(5000), getPromiseForRace(10000), getPromiseForRace(1000)])
    .then((messages) =>{
        console.log('All promises resolved ', messages);
    })
    .catch((error) => {
        console.log('One of the promises reejected ', error);
    });