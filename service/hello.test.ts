
import {Hello} from "./hello"

describe('Hello', () => {
  it('should return "Hello, Typescript!"', () => {
    const hello = new Hello();
    let greeting = hello.say_hello("")
      //.then(greeting => {
        expect(greeting).toBe('Hello, Typescript!')
      //})
  })
})