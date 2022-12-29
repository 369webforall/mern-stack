## Express Framework for Nodejs

# client-server

![Client-Server](./images/client-server.png)

```
const bodyParser = require('body-parser);
const morgan = require('morgan')
//import express
const express = require('express');

//rest obj
const app = express();
// middlewares
app.use(express.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(moragan("dev"))
// or we can use

// get method

app.get('/",(req, res)=>{
    res.send"<h1>hello world</h1>");
})

//post request
app.post("/contact-form", (req, res)=>{
    const{user} = req.body;

res.json({
success: true,
message:` User ${user} `
})
})
const PORT = 3000;

const app.listen(PORT, ()=>{
    console.log(`server is running on port  ${PORT}`)
})

```

- install package, nodemon, express

- body-parser
- npm i body-parser
- morgan (npm i morgan)

## MVC Pattern, converting our app to MVC

![mvc-design-patter](./images/what-is-mvc-design-pattern.jpg)

