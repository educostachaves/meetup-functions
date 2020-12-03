import { MQService } from '../shared/mq.service';

export class Hello {
  constructor() {

  }
  public say_hello(params) {
    const mqConn = new MQService();
    const name = params.name || 'Typescript'
    return `Hello, ${name}!` //Promise.resolve(
      //`Hello, ${name}!`
    //)
  }
}
