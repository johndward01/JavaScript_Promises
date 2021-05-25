console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
let watching = new Promise((resolve, reject) => {
    let userWatchingLiveStream;
    if (userWatchingLiveStream) {
        resolve("Thumbs up and Subscirbe!")
    }
    else {
        reject("User left")
    }
});

watching.then((message) => {
    console.log(`Message: ${message}`);
}).catch((message) => {
    console.log(`Error Message: ${message}`);
})