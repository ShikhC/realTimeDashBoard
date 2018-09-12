import * as Hello from './src/hello'

export function f() {
    let hello: Hello.Hello = new Hello.Hello('hi');
    hello.print('sree');
}
f();