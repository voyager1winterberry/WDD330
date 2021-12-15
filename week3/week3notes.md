# Objects

Everything is either a primitive or an object.

## Object literals

An object is a self-contained set of related values and functions. Example of object literal:
```JavaScript
const superman = {
    name: 'Superman',
    'real name': 'Clark Kent',
    height: 75,
    weight: 235,
    hero: true,
    villain: false,
    allies: ['Batman','Supergirl','Superboy'],
    fly() {
        return 'Up, up and away!';
    }
};
```

### Creating an object 
```JavaScript
const spiderman = {};
```

### Accessing properties:
```
superman.name
<< 'Superman'
```

### calling methods:
```
superman.fly()
<< 'Up, up and away!'

superman['fly']()
<< 'Up, up and away!'
```

### nested objects
```
const jla = {
    superman: { realName: 'Clark Kent' },
    batman: { realName: 'Bruce Wayne' },
    wonderWoman: { realName: 'Diana Prince" },
    flash: { realName: 'Barry Allen' },
    aquaman: { realName: 'Arthur Curry' },
}
```

### namespacing

namespaces are used to prevent naming collisions. Example of how to create a namespace:
```
const myMaths = {

    square(x) {
        return x * x;
    },
    mean(array,callback) {
        if (callback) {
        array.map( callback );
        } 
        const total = array.reduce((a, b) => a + b);
        return total/array.length;
    }
};
```
square and mean now need to be preceded by myMaths using dot notation.

# Document Object Model

The DOM allows access to elements of a web page and allows the adding and removing of elements amonog other things.

The DOM represents an HTML document as a network of connected nodes that form a tree-like structure. Everything on the web page is treated as a node: html tags, text within the tags, attributes of tags.

### getting elements
```
const body = document.body;
```

### query selectors

```document.querySelector()``` allows you to use CSS to find the first element in the document that matches a CSS selector provided as an argument.

# Events

Events are part of the DOM. Every time a user interacts with a web page, an event occurs.

### event listeners

example:
```
document.body.addEventListener("click", doSomething);
```
There are a wide variety of events and ways to react to events.
