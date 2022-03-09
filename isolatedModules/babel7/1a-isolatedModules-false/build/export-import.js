"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "foo", {
  enumerable: true,
  get: function get() {
    return _someModule.foo;
  }
});
Object.defineProperty(exports, "someFunction", {
  enumerable: true,
  get: function get() {
    return _someModule.someFunction;
  }
});

var _someModule = require("./some-module");