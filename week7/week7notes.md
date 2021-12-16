# Further Functions

Functions are very flexible in JavaScript, due to them being first-class objects.

### functions properties and methods

Functions have properties and methods themselves. For example, all functions have a length property that returns the number of parameters.

### call and apply methods

The call() method can be used to set the value of 'this' inside a function to an object that is provided as the first argument.

### memoization

If a function takes some time to compute a return value, the result can be saved in a cache property. Result caching is called memoization. example:
```JavaScript
function square(x){
    square.cache = square.cache || {};
    if (!square.cache[x]) {
        square.cache[x] = x*x;
    }
    return square.cache[x]
}
```

### immediately invoked function expression

An anonymous function that is invoked as soon as it is defined. they are useful for performing a task while keeping variables wrapped up in the scope of the function so that the global namespace isn't polluted with lots of variable names. Example:
```JavaScript
(function(){
const temp = 'World';
console.log(`Hello ${temp}`);
})();
<< 'Hello World'
```

### init time branching

Used with feature detection. Avoids checking for features every time. Example:
```JavaScript
function ride(){
    if (window.unicorn) { 
        ride = function(){
        // some code that uses the brand new and sparkly unicorn methods
        return 'Riding on a unicorn is the best!';
        }
    } else {
        ride = function(){
        // some code that uses the older pony methods
        return 'Riding on a pony is still pretty good';
        }
    }
    return ride();
}
```

## Callbacks

Callbacks are functions that are passed to other functions as arguments and then invoked inside the function they are passed to.

### Event-driven Asynchronous Programming

JavaScript is a single-threaded environment. Only one piece of code is run at a time. Instead of waiting for an event, a callback can be created that's invoked when the event happens.

## Promises

A promise represents the future result of an asynchronous operation.

### Promise life cycle

When a promise is created, it calls an asynchronous operation and is said to be pending. It remains in this state while the operation is taking place. It is unsettled in this state. When the operation has completed, it is settled. A settled promise results in the two following possibilities:
1. resolved
2. rejected

### async functions

Preceded by the async keyword and allows the writing of asynchronous code as if it was synchronous. The await operator is needed before an asynchronous function. The next line of code is not executed until the promise is resolved.

## Closures

Closures are references to a variable that was created inside the scope of another function, but is then kept alive and used in another part of the program.

## Generators

Generators are special functions used to produce iterators that maintain the state of a value. Generator function definitions require an asterisk, like so:
```JavaScript
function* exampleGenerator() {
// code for the generator goes here
}
```

## Functional programming

Functional programming is a programming paradigm. One key aspect is to use pure functions. Pure functions must:
1. the return value of a pure function should only depend on the values provided as arguments. It doesn't rely on values from somewhere else in the program.
2. There are no side effects. It doesn't change values elsewhere in the program.
3. Referential Transparency. Given the same arguments, a pure function will always return the same result.
Pure functions help make programs more predictable and precise.