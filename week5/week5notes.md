# Testing and Debugging

Errors and bugs will always be there. A programmer will have to identify and deal with them.

### errors, exceptions, warnings

Errors are usually caused by one of the following: system error, programmer error, or user error.

### Exceptions

An exception is an error that produces a return value that can then be used by the program to deal with the error. Example:
```JavaScript
unicorn();
<< ReferenceError: unicorn is not defined
```
Exceptions also produce stack traces. A stack trace is a sequence of functions or method calls that lead to the point where the error occurred. Example:
```JavaScript
function three(){ unicorn(); }
function two(){ three(); }
function one(){ two(); }
one();

<< index.html:13 Uncaught ReferenceError: unicorn is not defined
    at three (index.html:13)
    at two (index.html:17)
    at one (index.html:21)
    at index.html:24`
```

### Linting Tools

Linting tools can be used to test the quality of JavaScript code, beyond using strict mode (a mode that produces more exceptions and warnings). They can enforce a style guide as well. They can be very unforgiving and use opinionated coding conventions.

### Feature Detection

The recommended way to determine browser support for a feature is to use feature detection. This is done through an if statement to see if an object or method exists before trying to actually call the method.

### Error objects

An error object can be created by the host environment when an exception occurs, or it can be created in the code using a constructor function, like so:
```JavaScript
const error = new Error();
```
There are some more error objects that can be used, which are EvalError, RangeError, ReferenceError, SyntaxError, TypeError, URIError, InternalError.

### Throwing Exceptions

It is possible to throw your own exceptions using the throw statement. This will allow any problems to be dealt with rather than to be unnoticed. Example:
```JavaScript
function squareRoot(number) {
    'use strict';
    if (number < 0) {
        throw new RangeError('You can't find the square root of negative numbers')
    }
    return Math.sqrt(number);
};
```
It is best practice to throw an error object, like above. This can be caught in a catch block.

### Exception Handling

When an exception occurs, the program ends with an error message. This is ideal in development, but not ideal in production as it will appear as if the program crashed.
If we suspect a piece of code will result in an exception, we can wrap it in a try block. If an exception occurs, it will pass the error object that is thrown into a catch block. The catch block will only run if an exception is thrown in the try block. A finally block can be added after the catch. It will always be executed after try or catch. Example:
```JavaScript
function imaginarySquareRoot(number) {
    'use strict';
    let answer;
    try {
        answer = String(squareRoot(number));
    } catch(error) {
        answer = squareRoot(-number)+"i";
    } finally {
        return `+ or - ${answer}`;
    }
}
```

### Testing

Testing can sometimes be simple, such as running a function to see if it works right.

### Test-driven development

Test driven development is writing tests before any code is written. Then, you write code that will pass the tests. Then, code is refactored to be faster, more readable, and to remove repetition.

The workflow is as follows: 
1. write tests
2. write code to pass tests
3. refactor the code
4. test refactored code
5. write more tests for new features

Test-driven development is considered to be best practice. However, it often isn't always used.