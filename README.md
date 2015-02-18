# express-bind-controllers

Magically binds controllers to your express app based on a file path to your controllers

# Installation

```sh
npm install --save git+ssh://git@github.com:danjamin/express-bind-controllers.git#0.1.0
```

# Example usage

```js
// index.js

var express = require('express')
var app = express()
var bindControllers = require('express-bind-controllers')

// ...

// Bind controllers
bindControllers(app, __dirname + '/app/controllers')
```
