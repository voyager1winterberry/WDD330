# Forms

Forms are another way to interact with the web page.
Forms use a ```<form>``` element that has things like input fields, select menus and buttons. 

### form controls

common form controls are <input>, <select>, <textarea>, <button>. 
```input type='password'``` is for entering passwords. They cannot be seen on screen when entered.
Hidden input fields have ```type='hidden'```. they are not displayed by the browser but have a 'value' attribute that can contain information that is submitted by the form. They are often used to send information such as settings or information that the user has already provided.
The submit button can be disabled by typing disabled at the end.

# Object Oriented Programming

OOP is a style of programming that involves separating code into objects that have properties and methods. This keeps code encapsulated in objects that maintain state throughout the life of the program.

### encapsulation

The inner workings are kept hidden inside the object and only the essential functions are exposed to the end user. In OOP, this involves keeping all the programming logic inside an object and making methods available to implement the functionality, without the outside world needing to know how it's done.

### polymorphism

The same process can be used for different objects. In OOP, this means that various objects can share the same method, but also have the ability to override shared methods with a more specific implementation.

### inheritance

Taking the features of one object then adding some new features. In OOP, this means we can take an object that already exists and inherit all its properties and methods. We can then improve on its functionality by adding new properties and methods.

### classes

Classes define a blueprint for an object.
JavaScript did not have classes before ES6, and used to use the concept of using actual objects as the blueprint for creating more objects. That is known as a prototype-based language. JavaScript can still do this, though it now supports classes.

### Prototypal inheritance

JS uses a prototypal inheritance model. This means that every class has a prototype proptery that is shared by every instance of the class. Example:
```JavaScript
class Turtle {
    constructor(name) {
        this.name = name;
        this.weapon = 'hands';
    }
    sayHi() {
        return `Hi dude, my name is ${this.name}`;
    }
    attack(){
        return `Feel the power of my ${this.weapon}!`;
    }
}
```
We can now create a turtle instance:
```JavaScript
const leo = new Turtle('Leonardo');
<< Turtle { name: 'Leonardo' }
```

### prototype property

You can add methods and properties with the prototype property. All classes and constructor functions have a prototype property that returns an object.