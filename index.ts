import {Hello} from './hello'

export function f() {
    let hello: Hello = new Hello('hi');
    hello.print('test');
}

f();