# Nodejs

[Nodejs Document](https://nodejs.dev/en/learn/how-much-javascript-do-you-need-to-know-to-use-nodejs/)

Node.js is an open source server environment.

Node.js allows you to run JavaScript on the server or you local machine.

Node.js, the server-side JavaScript runtime environment. Node.js is built on top of the Google Chrome V8 JavaScript engine, and it's mainly used to create web servers - but it's not limited to just that.

- Nodejs can communicate to the server or local machine.

- Ryan Dahl take the v8 engine from chrome browser combine with C++ and make it work in server or our local machine.

**Benefit of Nodejs**

- You can run Javascript outside of browser
- Javascript can talk to native machine becuase of C++
- You can create webserver in Javascript language.

# Install Nodejs

- google search nodejs
- Download the Recommended for the most user
- Install in your machine
- Open terminal and type --version
- If the nodejs is installed properly then it should display the version of installed nodejs.

**type node in your terminal to get nodejs terminal.**

Now you can write any Javascript code in Nodejs terminal.

**What is the difference between nodejs and JavaScript in Browser**

- Basically in nodejs DOM related functionality are removed.
- you don't have access to window object in nodejs.

```javascript
console.log('This example is different!');
console.log('The result is displayed in the Command Line Interface');
```

- start project (nodejs)
- creare file index.js
- go to terminal switch to nodejs directory
- type command (nodejs>npm init) enter
- reply answer to the asked question or just press enter.(name, description, author etc...)
- now you can see package.json

## What is package.json file.

The package. json file contains descriptive and functional metadata about a project, such as a name, version, and dependencies. The file provides the npm package manager with various information to help identify the project and handle dependencies.

## What is npm (Node Package Manager)

npm stands for Node Package Manager. It's a library and registry for JavaScript software packages. npm also has command-line tools to help you install the different packages and manage their dependencies. npm is free and relied on by over 11 million developers worldwide.

```
> npm install express

```

- window is the front end object, there is no window object in backend.

## What is modules

A module in JavaScript is just a file containing related code. In JavaScript, we use the import and export keywords to share and receive functionalities respectively across different modules. The export keyword is used to make a variable, function, class or object accessible to other modules.

[modules- Article](https://www.freecodecamp.org/news/javascript-modules-explained-with-examples/)

## What is a module in NodeJs?

Module in Node. js is a simple or complex functionality organized in single or multiple JavaScript files which can be reused throughout the Node. js application. Each module in Node.js has its own context, so it cannot interfere with other modules or pollute global scope.

## Different types of module in Nodejs

- file base module , build in, third party

1. Nodejs Core Modules:

Built-in modules of node.js that are part of nodejs and come with the Node.js installation process are known as core modules.

To load/include this module in our program, we use the require function.

let module = require('module_name')
The return type of require() function depends on what the particular module returns.

Http, file system and url modules are some of the core modules. We will be discussing this in the latter part of this blog.

2. Nodejs Local Modules:

Local modules are created by us locally in our Node.js application. These modules are included in our program in the same way as we include the built in module.

```
index.js
let a  = 500;

module.exports = a;

// app.js

const a = require('./index);
console.log(a)

}
```

```
//index.js

const a = require('./app);
console.log(a)



a.percent(200, 10);
a.average(10, 20);


//app.js

const a = {
average: function(a, b){
    console.log((a+b) / 2)
    }
    percent: (a, b)=>console.log((a/b)*100)
}

module.exports = a;
```

3. Nodejs Third Party Modules:

Modules that are available online and are installed using the npm are called third party modules. Examples of third party modules are express, mongoose, etc.

To install third party modules refer to the previous blog where we have discussed how to install modules using npm.

example

Nodejs HTTP Module:

```
let http = require('http');
console.log(http.METHODS)

```

## Nodejs HTTP Module:

It is a built-in module of node.js. It allows node.js applications to transfer data using HyperText Transfer Protocol (HTTP).

This module creates an HTTP server that listens to server ports and also gives responses back to the client.

## Properties:

1. http.METHODS: this tells us all the methods available in http module.

```
let http = require('http');
console.log(http.METHODS)

```

2. http.STATUS_CODES: It tells us all the status codes and its description.

```
let http = require('http');
console.log(http.STATUS_CODES)
```

# METHODS:

CREATE SERVER: We can use it to create a server. The create server will take a function which will run when we try to access the port.

listen() starts the HTTP server and listens for connections.

Below code sets up a server which we can access when we visit localhost:3000

```
let http = require('http');
http.createServer(function (req, res) {
    res.write('Welcome to DataFlair!');
    res.end();
}).listen(3000);

```

## Adding HTTP header:

If the message from the server needs to be shown as an HTML, then we have to include content type in the header.

```
var http = require('http');
http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('Hello from DataFlair!');
    res.end();
}).listen(3000);

```

## Reading query string:

The function in the create server has a request argument and this request object has a property of URL. It contains the part of the url that is present after the domain name.

So when you go to localhost:3000/dataflair/nodejs, the output will be dataflair/nodejs

### Code for reading query string:

```
var http = require('http');
http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(req.url);
    res.end();
}).listen(3000);

```

## Nodejs URL Module:

This is a built-in module of node.js. It breaks down the url into readable parts. It is included in the file by using the require function;

To Parse an address, use the url.parse() method. It will return a URL object with each part of the address as its properties.

### Code for using the url Module:

```
let url = require('url');
var adr = 'http://localhost:3000/search?year=2021&month=august';
var q = url.parse(adr, true);

console.log(q.host);
console.log(q.pathname);
console.log(q.search);

var qdata = q.query;
console.log(qdata.month);
```

## File Server:

Now we will be parsing the url and based on it we will be returning the content of the requested file. If the file is not found we will get an 404 error message. So first create a html/text file and add some content. We have made a text file with name as “DataFlair.txt” and it contains the line “Welcome to DataFlair” .

```
var http = require('http');
var url = require('url');
var fs = require('fs');

http.createServer(function (req, res) {
    var q = url.parse(req.url, true);
    var filename = "." + q.pathname;
    fs.readFile(filename, function (err, data) {
        if (err) {
            res.writeHead(404, { 'Content-Type': 'text/html' });
            return res.end("404 Not Found");
        }
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(data);
        return res.end();
    });
}).listen(3000);
```

## Nodejs File System Module:

This is a built-in module of node.js. It helps to create, read, write, update, or delete files in our computer. It is included in the file by using the require function.

## Create File: It has mainly 3 methods

1. Append file.
   The fs.appendFile() method’s second argument takes the text that we want to append, and then it appends at the end of the file, if the given file does not exist then the file will be created.

```
var fs=require(‘fs’)
fs.appendFile('DataFlairDemo.txt', 'welcome to DataFlair', function (err) {
    if (err) throw err;
    console.log('Saved!');
});
```

2. Open file
   The fs.open() method’s second argument is “w” for “writing”,which indicates that the file is opened for writing and if it does not exist then an empty file is created.

## Code for opening a file:

```
var fs=require(‘fs’)
fs.open('DataFlairDemo.txt', 'w', function (err, file) {
    if (err) throw err;
    console.log('Saved!');
});
```

3. WriteFile:
   The fs.writeFile() method’s second argument takes the text that we want to write, and then it overrides the content available in the file if the given file does not exist then the file will be created.

## Code for writing in a file:

```
var fs = require('fs');
fs.writeFile('DataFlairDemo.txt', 'Learn Node.js from DataFlair', function (err, file) {
    if (err) throw err;
    console.log('Saved!');
});
```

## Update File: It has mainly 2 methods

1. fs.appendFile()
   The fs.appendFile() method’s second argument takes the text that we want to append, and then it appends at the end of the file, if the given file does not exist then the file will be created.

## Code for fs.appendFile()

```
var fs=require(‘fs’)
fs.appendFile('DataFlairDemo.txt', 'welcome to DataFlair', function (err) {
    if (err) throw err;
    console.log('Saved!');
});
```

2. fs.writeFile():
   The fs.writeFile() method’s second argument takes the text that we want to write, and then it overrides the content available in the file, if the given file does not exist then the file will be created.

```
var fs = require('fs');
fs.writeFile('DataFlairDemo.txt', 'Learn Node.js from DataFlair', function (err, file) {
    if (err) throw err;
    console.log('Saved!');
});
```

## Read File:

It is used to read files present in your system.

### Code for reading a file:

```
var fs = require('fs');
fs.readFile('DataFlairDemo.txt', function (err, file) {
    if (err) throw err;
    console.log('Saved!');
});
```

## Delete File: to delete a file use fs.unlink();

### Code for deleting a file:

```
var fs = require('fs');
fs.unlink('DataFlairDemo.txt', function (err, file) {
    if (err) throw err;
    console.log('Saved!');
});
```

## Rename File:

If we want to rename a file we will use the fs.rename() method of the file system module.

```
var fs = require('fs');
fs.rename('DataFlair1.txt', 'DataFlair2.txt', function (err, file) {
    if (err) throw err;
    console.log('Saved!');
});
```

# Important nodejs modules and their uses:

1. Http: Used for creating an HTTP server in nodejs.

2. Assert: Used for testing node js application using a set of assertion functions.

3. Fs: Used in modification of files.

4. Path: It helps to find the file paths.

5. Process: Gives information regarding the current process.

6. Os: It contains the details of the operating system in which the node js application is currently running.

7. Querystring: It helps in parsing and proper formatting of the url.

8. Url: This module also helps in parsing the urls.
