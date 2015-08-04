# express-bind-controllers

Magically binds controllers to your express app based on a file path to your controllers, and an optional file name filter function

## Installation

```sh
npm install -S express-bind-controllers
```

## Example usage

```js
// index.js

var express = require('express');
var app = express();
var bindControllers = require('express-bind-controllers');
var isVerbose = true;
var filter;

// ...

// filters so that only files that end in .js are used as controllers
// this is the default behavior
filter = function (name) {
  return /.js$/.test(name);
};

// Bind controllers
bindControllers(app, __dirname + '/app/controllers', isVerbose, filter);
```
