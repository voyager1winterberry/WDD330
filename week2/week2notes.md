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
## Declaring and Assigning constants and variables
## Numbers -- Decimal, Hexademical, Octal, Binary, and Exponent Form, Infinity, and NaN
## Arithmetic Operations such as +, -, *, /, and %
## Undefined and Null
## Booleans -- Truthy and Falsy Values
## Logical Operators -- AND, OR, and NOT