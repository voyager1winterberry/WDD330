# Week 2 Notes

# Programming Basics

## The Importance of Well-Commented Code

### Comments

**Examples of comments:**
```JavaScript
// this is a short comment
```
```JavaScript
/* This is a longer comment
anything here will be ignored
This is a useful place to put notes
*/
```

## JavaScript Grammar -- Expressions, Statements, Semicolons, and Whitespace

The grammar is a C-style syntax. Statements can end with either a semicolon or new line.

Examples of grammar:
```JavaScript
const message = 'Hello World!'
alert(message)
```

A block is a group of statements enclosed by curly brackets:
```JavaScript
{
// this is a block containing 2 statements
    const message = 'Hello!';
    alert(message);
}
```
They do not need to be terminated by a semicolon.

**Reserved Words**
The following are reserved words:
```JavaScript
abstract, await, boolean, break, byte, case, catch, char, class, const, continue, debugger, default, delete, do, double, else, enum, export, extends, false, final, finally, float, for, function, goto, if, implements, import, in instanceof, int, interface, let, long, native, new, null, package, private, protected, public, return, short, static, super, switch, synchronized, this, throw, throws, transient, true, try, typeof, var, volatile, void, while, with, yield
```
Reserved words are used by the language itself. However, some are not used by the language. There are also some words which perhaps should
have been reserved by the language, which are:
```JavaScript
undefined, NaN, Infinity
```

## Primitive Data Types

JavaScript has 7 different data types. 6 of thme are primitive data types. The primitive data types are:

*String, Symbol, Number, Boolean, Undefined, Null*

Any value that isn't one of the primitive data types is an object. This would include arrays, functions, and object literals.

You can find out the type of a value using `typeof`. Example:
```JavaScript
typeof 'hello'
<< 'string'
```

### Operators, unary, binary, ternary

An operator applies an operation to a value, which is known as the *operand*. A *unary* operator only requires one operand.
For example:
```JavaScript
typeof 'hello'
```
The operator is `typeof` and the string `'hello'` is the operand.
A *binary* operator requires two operands.
For example:
```JavaScript
3 + 5
```
The operator is `+` and the numbers `3` and `5` are the operands.

Operators can also be ternary as well.

## Variables

The purpose of variables is to store values in memory.

### Declaring and Assigning

Variables must be declared before being used. JavaScript uses `const` and `let` to declare variables. The old way to declare variables still work.
`const` is used if the variable will not be reassigned later, as a `const` variable cannot change. `let` is used if the variable will change later, 
as `let` will allow the variable to change.
To assign a value, we use `=`.
This example shows the declaration of a variable and the assigning of a value to it:
```JavaScript
const name = 'Magnificent'
```

Using const to declare a non-primitive data type, such as an array, function, or object, does not make it immutable. The data inside the object is
mutable. However, you cannot assign a const variable to another object.

### Scope

Scope refers to where a constant or variable is accessible by the program. Variables declared with 'const' and 'let' are block scoped, meaning their value only exists inside the block they are declared in.

### Global Scope

Variables declared outside of a block have global scope, meaning that the variable can be accessed anywhere in the program. It is not considered good practice, as global variable names can clash with others in the program or libraries.

If variables are declared without 'let' or 'const', then they have global scope, like this:

```JavaScript
{ c = 5; c; }
<< 5
```

### Local Scope

Variables declared with 'const' or 'let' within a block have local scope. Those variables will only be able to be accessed within that same block.

### Naming Constants & Variables

Give unique, sensible names to variables. For example, 'answer' could be better than just 'x'. If you were to look at someone else's code that you need to work with and their variables are just 'x', 'i', 'w', etc., then it will be difficult to work with.

### Direct Assignment and Assignment By Reference

When assigning a primitive value to a variable, this assignment is done directly. Any changes made to that variable are made directly to that value. Example: 

```JavaScript
const a = 1;
let b = a; // a = 1, b = 1
b = 2; // a = 1, b = 2
```

When assigning a non-primitive value to a variable, this is assignment is done by reference. Thus, any changes made to that variable will effect *all* references to that object. Example: 

```JavaScript
const c = { value: 1 };
let d = c; // c.value = 1, d.value = 1
d.value = 2; // c.value = 2, d.value = 2
```

## Strings -- String Literals, String Properties, and Methods

String: A collection of characters, such as letters and symbols.
String literal: inside quotes.
string object:
```JavaScript
new String("hello")
```
String objects are the same as string literals but will be classed as an object, not a primitive.
Single quotes inside double quotes works.
The escape character is \
#### String properties and methods:
properties = information about object
methods = an action done on the object or value
example of property: length
```JavaScript
name.length
// OR
name['length']
```
example of method: toUpperCase
```JavaScript
name.toUpperCase()
```
Template literals use the ` character. With template literals, javascript expressions can be placed within ${}.
#### Symbols
Symbols are newer primitive values. They can help create unique values, to avoid any naming collisions. They do not have a literal form and must be created with the Symbol() function:
```JavaScript
const uniqueID = Symbol();
```
A description of the symbol is recommended:
```JavaScript
const uniqueID = Symbol('This is a unique ID');
```
Two variables can point to same symbol with for() method.
```JavaScript
const A = Symbol.for('shared symbol');
const B = Symbol.for('shared symbol');
```

## Declaring and Assigning constants and variables
## Numbers -- Decimal, Hexademical, Octal, Binary, and Exponent Form, Infinity, and NaN

numbers can be integers or floating point numbers. JavaScript doesn't distinguish between the two. However, isInter() can check if it is an integer.

#### octal, hexadecimal
If starting with 0x, it is hexadecimal (base 16).
If starting with 0o, it is octal (base 8).
If starting with 0b, it is binary (base 2).

#### exponential notation/scientific notation
example:
```JavaScript
1e6 // means 1 multiplied by 10 to the power of 6
<< 1000000
2E3 // 2 multiplied by 10^3
<< 2000
2.5e-3 // means 2.5 multiplied by 10 to the power of 3
<< 0.0025
```

#### Number Methods
Integers will need a space, dot, writing the number in parenthesis, assigning the number to a constant, or writing the number as a float to use a method.

## Logical Operators
AND -> &&
OR -> ||
NOT -> !
Bitwise Operators work with operands that are 32-bit integers.
Bitwise NOT -> ~
Bitwise AND -> &
Bitwise OR -> |
Bitwise XOR -> ^
Bitwise shift -> << and >>

#### Equality
Equality: =
Soft Equality: == 
Hard Equality: ===
Hard equality not only checks for equality but also tests to see if both are of the same data type.

# Arrays, Logic, and Loops

## Arrays
Array: ordered list of values. To make a literal:
```JavaScript
const myArray = [];
```
A constructor function can also be used, but literals are generally preferable.
To discover a value, we write its position in the square brackets:
```JavaScript
myArray[0]
```
Adding Values:
```JavaScript
heroes[0] = 'Superman';
```
More values can be added by assigning them to other indices.
Typing the name of the array into the console prints out its contents.

#### Array literals
Array literals can be created like so:
```JavaScript
const avengers = ['Captain America', 'Iron Man', 'Thor', 'Hulk'];
<< ['Captain America', 'Iron Man', 'Thor', 'Hulk']
```
Arrays can hold a variety of data types.
Delete will remove an item from an array. This will leave 'undefined'.

#### Destructuring arrays
```JavaScript
const [x,y] = [1,2];
```
x and y will also exist outside the array.

## Array properties and methods
properties accessed with dot notation.
Methods accessed with dot and parenthesis.
Index of arrays start with 0.

#### pop, push, shift, unshift
Pop method returns the last item of the array, with the array no longer containing it.
Push method appends a new value to end of array.
Shift method, similar to pop, removes first item in array.
unshift method, similar to push, appends a new item to the beginning of the array.

#### slice and splice
These methods allow taking chunks out of arrays.

#### sorting, reversing
reverse() reverses the order of array.
sort() sorts alphabetically by default.

#### multidimensional
Arrays can be multidimensional and have two indices.

#### Sets
Sets are data structures that represent a collection of unique values, so it cannot have duplicates. Any duplicates will not make it into the set, as they will be eliminated. non-primitive values are considered unique, so this appears to allow duplicate values. Sets can be strong or weak.

#### Map
Similar to objects, they have some differences:
Objects are limited to strings for key values. Maps are not.
Maps can use 'size' to efficiently find the number of key value pairs. Objects are not efficient in this.
Objects can be accessed directly & maps require using get().

## Logic
```JavaScript
if (condition) {
// code to run if condition is true
}
```
#### else
```JavaScript
if (condition) {
// code to run if condition is true
} else {
// code to run if condition is false
}
```
#### Ternary Operator
This is a shorthand version of if else.
```JavaScript
condition ? (//code to run if condition is true) : (//code to run if condition is false)
```
#### switch
```JavaScript
switch (number) {
    case 4: // if number is a 4
    console.log('You rolled a four');
    break;
    case 5: // if its a 5
    console.log('You rolled a five');
    break;
    case 6: // so on
    console.log('You rolled a six');
    break;
    default:
    console.log('You rolled a number less than four');
    break;
}
```

#### loops
while loop:
```JavaScript
while (condition) {
// do something
}
```
Do While Loop:
```JavaScript
do {
    do something
} while(condition)
```
For Loops:
```JavaScript
for (initialization ; condition ; after) { do something }
```
Looping over arrays:
```JavaScript
for(let i=0, max=avengers.length; i < max; i++){
console.log(avengers[i]);
}
<< 'Black Widow'
<< 'Captain America'
<< 'Hawkeye'
<< 'Iron Man'
<< 'Quicksilver'
<< 'Scarlet Witch'
```
Looping over sets:
```JavaScript
for(const letter of letters) {
    console.log(letter);
}
<< h
e
l
o
```
Looping over maps
```JavaScript
for(const key of romanNumerals.keys()) {
    console.log(key);
}
<< 1
2
3
4
5
```

# Functions

A block of code that can be referenced by name, and is kind of like a self-contained, small program.
In JavaScript, functions are 'first-class objects'. This means they behave the same as all other primitive data types and objects in the language. They can be assigned to variables, stored in arrays, and be returned by other functions.

## Defining a function

There are a number of ways to define a function

#### Function declarations

Function literal: we can use a function declaration (this is known as a named function):
```JavaScript
function hello(){
    console.log('Hello World!');
}
```

Function expressions: This assigns an anonymous function to a variable. You can also name the function if desired.
```JavaScript
const goodbye = function(){
    console.log('Goodbye World!');
};
```
Function constructors: Functions can also be declared using the constructor ```Function()```. These are not recommended. The body of the function is entered as a string, as is such in this example:
```JavaScript
const hi = new Function('console.log("Hi World!");');
```

## Invoking a function

Invoking a function is to run the code inside the function's body. Invoke a function like so:
```JavaScript
hello();
<< 'Hello world!'
```
The function can be invoked over and over, and there is no need to re-write the code.

If you have assigned a function to a variable, you need to place parenthesis after the variable to invoke it as a function. If you skip the parenthesis, you are referencing it rather than invoking it. However, this can be useful if you are assigning the variable to another variable.
```JavaScript
goodbye();
<< 'Goodbye World!'
```

## Return values

All functions can return a value, which can be specified with the ```return``` keyword. A function without a return value will return ```undefined``` by default.
```JavaScript
function howdy(){
    return 'Howdy World!';
}
```
Now that we are returning a value, we can assign this function to a variable, like so:
```JavaScript
const message = howdy();
<< 'Howdy World!'
```
The variable ```message``` now points to the return value of the ```howdy()``` function, which is the string 'Howdy World!'

## Parameters and arguments

Parameters and arguments are words that are often used interchangeably. 
They are the values provided for the function as an input. 
There is a difference between the two though: Any parameters a function needs are set when the function is defined. When a function is invoked, it is provided with arguments.

In this case, the parameter is ```x```:
```JavaScript
function square(x){
    return x*x;
}
```

## Callbacks


## Array iterators