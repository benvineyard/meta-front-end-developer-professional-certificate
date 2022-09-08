// Task 1
// Step 1. You are given an array of dairy products:
// var dairy = ['cheese', 'sour cream', 'milk', 'yogurt', 'ice cream', 'milkshake']
// Create a function called logDairy. Within it, console log each of the items in the dairy array, using the for...of loop.
// The expected output should be:
// cheese
// sour cream
// milk
// yogurt
// ice cream
// milkshake
//
var dairy = ['cheese', 'sour cream', 'milk', 'yogurt', 'ice cream', 'milkshake']

function logDairy() {
    for (const iterator of dairy) {
        console.log(iterator);
    }
}

// Test logDairy function
logDairy(dairy);

// Task 2
// Step 2. You are given the following starter code:
// const animal = {

// canJump: true

// };

// const bird = Object.create(animal);

// bird.canFly = true;

// bird.hasFeathers = true;
//
// Create a function called birdCan, within it, loop over the bird object's properties and console 
// log each one, using the for...of loop.Remember, you need to console log both the key and the 
// value of each of the bird object's properties.
//
const animal = {
    canJump: true
};

const bird = Object.create(animal);

bird.canFly = true;

bird.hasFeathers = true;

function birdCan() {
    for (const [key, val] of Object.entries(bird)) {
        console.log(key + ": ", val);
    }
}

// Test function birdCan
birdCan(bird);

// Task 3
// Step 3. Using the same starter code as in task 2, create a function called `animalCan` and 
// within it, loop over all the properties in both the bird object and its prototype - the 
// animal object - using the for...in loop.
// 
function animalCan() {
    for (const key in bird) {
        const value = bird[key];
        console.log(key + ": ", value);
    }
}

// Test animalCan function
animalCan(bird);