# Week 10 Reading Notes

# Client-side form validation
It is important to ensure data is filled out and in the correct format before submitting to server. Client-side form validation helps with this by ensuring data submitted matches the requirements set forth in the various form controls.

Client-side validation is an initial, important check, that allows the user to fix right away. It should not be considered an exhaustive security measure.

## Form validation

Form validation requests that you enter the data in correctly if it is done wrong.

## Different types of client-side validation

- built-in form validation
- JavaScript

## Using built-in form validation

Can use the following attributes:
- required
- minlength and maxlength
- min and max
- type
- pattern

## Built-in form validation examples

```JavaScript
<form>
  <label for="choose">Would you prefer a banana or cherry?</label>
  <input id="choose" name="i_like">
  <button>Submit</button>
</form>
```
```JavaScript
input:invalid {
  border: 2px dashed red;
}

input:valid {
  border: 2px solid black;
}

```

### The required attribute

`Required` is the simplest attribute for validate. It makes input mandatory.

### Validating against a regular expression

the `pattern` attribute expects a regular expression.

### Constraining the length of your entries

You can constrain the length of text entries with `minlength` and `maxlength`

### Constraining the values of your entries

`min` and `max` can be used to provide a range of valid values.

## Validating forms using JavaScript

Using JavaScript allows taking control over the look and feel of error messages or dealing with legacy browsers that dont support built-in validation.

### The constraint validation API

This is available in the following DOM interfaces:
- HTMLButtonElement
- HTMLFieldSetElement
- HTMLInputElement
- HTMLOutputElement
- HTMLSelectElement
- HTMLTextAreaElement

The constraint validation API allows the following properties on the above elements:

- validationMessage
- validity
- willValidate
- checkValidity()
- reportValidity()
- setCustomValidity(message)

### Implementing a customized error message

drawbacks:
- no standard way to change their look and feel with CSS
- They depend on the browser locale, meaning you can have a message in one language while another is also shown.

### Validating forms without a built-in API

## Summary
Client-side form validation sometimes requires JavaScript if you want to customize styling and error messages, but it *always* requires you to think carefully about the user. Always remember to help your users correct the data they provide. Be sure to:
- Display explicit error messages
- Be permissive about the input format
- Point out exactly where teh error occurs, especially on large forms

# Using Fetch

Fetch API provides a JavaScript interface for accessing and manipulating parts of the HTTP pipeline, such as requests and responses. XMLHttpRequest used to be commonly used, but Fetch is now used.

A basic request:
```JavaScript
fetch('http://example.com/movies.json')
  .then(response => response.json())
  .then(data => console.log(data));

```

### Supplying request options

fetch can optionally accept `init`, that allows you to control a number of things.

### Sending a request with credentials included

To make browsers send a request with credentials included on both same-origin and cross-origin calls, add `credentials: 'include'` to the `init` object you pass to the `fetch()` method.

### Uploading JSON data


```JavaScript
const data = { username: 'example' };

fetch('https://example.com/profile', {
  method: 'POST', // or 'PUT'
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(data),
})
.then(response => response.json())
.then(data => {
  console.log('Success:', data);
})
.catch((error) => {
  console.error('Error:', error);
});

```

### Uploading a file

```JavaScript
const formData = new FormData();
const fileField = document.querySelector('input[type="file"]');

formData.append('username', 'abc123');
formData.append('avatar', fileField.files[0]);

fetch('https://example.com/profile/avatar', {
  method: 'PUT',
  body: formData
})
.then(response => response.json())
.then(result => {
  console.log('Success:', result);
})
.catch(error => {
  console.error('Error:', error);
});

```

### Uploading multiple files

```JavaScript
const formData = new FormData();
const photos = document.querySelector('input[type="file"][multiple]');

formData.append('title', 'My Vegas Vacation');
for (let i = 0; i < photos.files.length; i++) {
  formData.append(`photos_${i}`, photos.files[i]);
}

fetch('https://example.com/posts', {
  method: 'POST',
  body: formData,
})
.then(response => response.json())
.then(result => {
  console.log('Success:', result);
})
.catch(error => {
  console.error('Error:', error);
});

```

### Processing a text file line by line

```JavaScript
async function* makeTextFileLineIterator(fileURL) {
  const utf8Decoder = new TextDecoder('utf-8');
  const response = await fetch(fileURL);
  const reader = response.body.getReader();
  let { value: chunk, done: readerDone } = await reader.read();
  chunk = chunk ? utf8Decoder.decode(chunk) : '';

  const re = /\n|\r|\r\n/gm;
  let startIndex = 0;
  let result;

  for (;;) {
    let result = re.exec(chunk);
    if (!result) {
      if (readerDone) {
        break;
      }
      let remainder = chunk.substr(startIndex);
      ({ value: chunk, done: readerDone } = await reader.read());
      chunk = remainder + (chunk ? utf8Decoder.decode(chunk) : '');
      startIndex = re.lastIndex = 0;
      continue;
    }
    yield chunk.substring(startIndex, result.index);
    startIndex = re.lastIndex;
  }
  if (startIndex < chunk.length) {
    // last line didn't end in a newline char
    yield chunk.substr(startIndex);
  }
}

async function run() {
  for await (let line of makeTextFileLineIterator(urlOfFile)) {
    processLine(line);
  }
}

run();

```

### Checking that the fetch was successful

```JavaScript
fetch('flowers.jpg')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not OK');
    }
    return response.blob();
  })
  .then(myBlob => {
    myImage.src = URL.createObjectURL(myBlob);
  })
  .catch(error => {
    console.error('There has been a problem with your fetch operation:', error);
  });

```

### Supplying your own request object

```JavaScript
const myHeaders = new Headers();

const myRequest = new Request('flowers.jpg', {
  method: 'GET',
  headers: myHeaders,
  mode: 'cors',
  cache: 'default',
});

fetch(myRequest)
  .then(response => response.blob())
  .then(myBlob => {
    myImage.src = URL.createObjectURL(myBlob);
  });

```

## Headers
Headers allow creating your own headers.

```JavaScript
const content = 'Hello World';
const myHeaders = new Headers();
myHeaders.append('Content-Type', 'text/plain');
myHeaders.append('Content-Length', content.length.toString());
myHeaders.append('X-Custom-Header', 'ProcessThisImmediately');

```

### Guard

Since headers can be sent in requests and received in responses, and have various limitations about what information can and should be mutable, headers' objects have a guard property. This is not exposed to the Web, but it affects which mutation operations are allowed on the headers object.

## Response objects

Response instances are returned when fetch promises are resolved.
Most common response properties are:
- response.stats
- response.statusText
- response.ok

## Body

Both requests and responses may contain body data. A body is an instance of any of the following types:

- ArrayBuffer
- ArrayBufferView
- Blob/File
- string
- URLSearchParams
- FormData

The Request and Response interfaces share the following methods to extract a body. These all return a promise that is eventually resolved with the actual content.

- Request.arrayBuffer() / Response.arrayBuffer()
- Request.blob() / Response.blob()
- Request.formData() / Response.formData()
- Request.json() / Response.json()
- Request.text() / Response.text()

## Feature detection

Fetch API support can be detected by checking for the existence of Headers, Request, Response or fetch() on the Window or Worker scope. For example:
```JavaScript
if (window.fetch) {
  // run my fetch request here
} else {
  // do something with XMLHttpRequest?
}

```

## Polyfill

To use Fetch in unsupported browsers, there is a Fetch Polyfill available that recreates the functionality for non-supporting browsers.