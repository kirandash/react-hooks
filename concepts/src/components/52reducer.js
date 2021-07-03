const myArray = [1,2,3,4,5];

const add = (x, y) => x + y;

// reduce the myArray using add fn with initial value
const sum = myArray.reduce(add, 0); 

console.log(sum);

// Redux concept
function reducer(state, action) {
    return state + action
}