# transforms and transitions

These allow elements to translate, rotate, scale, or skew.

### translation

Translation lets elements go up, down, left, or right. Example:
```JavaScript
transform: translate(45px, -45px);
```

### scaling

Scales an element horizontally then vertically. Example code:
```JavaScript
transform: scale(1.5, 0.25);
```

### rotate

The rotate function rotates an element around the point of origin by a specified angle value. The point of origin is the element's center. Example:
```JavaScript
transform: rotate(10deg)
```

### skew
The skew function specifies a skew along x and y axes. Example:
```JavaScript
transform: skew(15deg, 4deg)
```

### changing origin of transform
You can control the origin of the transforms with transform-origin. example:
```JavaScript
transform-origin: 50% 50%;
```

### transitions
Transitions allow the values of CSS properties to change over time, allowing for simple animations. Any of the previously listed transforms can be transitioned. Steps:
1. declare the original state of the element in the default style declaration
2. declare the final state of your transitioned element; for example, a :hover state
3. include the transition functions in your default style declaration using the transition properties.
```transition-property``` defines the elements that should be transitioned.