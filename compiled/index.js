"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const hello_1 = require("./src/hello");
function f() {
    let hello = new hello_1.Hello('hi');
    hello.print('test');
}
exports.f = f;
f();
