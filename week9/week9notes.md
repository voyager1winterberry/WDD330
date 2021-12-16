# the window object

The javascript environment has a global object. Any variables created in the global scope are properties of this object, and any functions are methods of it. In a browser environment, the global object is 'window'.

### the browser object model

The BOM is a collection of properties and methods that contain information about the browser and computer screen. These properties and methods are available through the window object. example:
```JavaScript
x = 6;  // global variable created
<< 6

window.x // same variable can be accessed as a property of the window object
<< 6

// both variables are exactly the same
window.x === x;
<< true
```

Dialogs are offered, such as 'alert'. browser information and location is offered through the window object. Browser history and the ability to control windows are part of the BOM. Screen information is offered and timing as well.

The window object also contains a document object. This object has properties and methods that deal with the page that has been loaded into the window. The document object offers cookies.

# HTML5 APIs

### data attribute

The data attribute is a way to embed data in a web page using custom attributes that are ignored by the browser. They start with ```data-```, must only contain certain characters, and include an optional string value.

### APIs

HTML5 has APIs that help gain access to hardware. HTML5 APIs include:
1. web storage (localstorage)
2. geolocation (navigator.geolocation.)
3. web workers (allow processes to run in background)
4. web sockets (protocol that allows two-way communication with a server aka push messaging)
5. notifications
6. multimedia (audio and video tags)
7. drawing with canvas (allows graphics to be drawn on web page)
