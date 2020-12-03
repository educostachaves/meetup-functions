'use strict'

import { Hello } from "./service/hello"

declare var exports;

function hello(params) {
  let hello = new Hello();

  return {
    payload: hello.say_hello(params),
  }
}

exports.hello = hello;
