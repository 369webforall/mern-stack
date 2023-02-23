# Nodejs

Node.js is an open source server environment.

Node.js allows you to run JavaScript on the server.

Node.js, the server-side JavaScript runtime environment. Node.js is built on top of the Google Chrome V8 JavaScript engine, and it's mainly used to create web servers - but it's not limited to just that.

```
console.log('This example is different!');
console.log('The result is displayed in the Command Line Interface');

```

- start project (nodejs)
- creare file index.js
- go to terminal switch to nodejs directory
- type command (nodejs>npm init) enter
- type answer to the asked question.(name, description, author)
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

- file base module

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

const a = require('./index);
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
