'use strict';

// ES6
// import MyModule from './modules/MyModule.js';

// CommonJS
// var MyModule = require('./modules/MyModule.js');

var component = require('./component.js');

document.body.appendChild(component());
