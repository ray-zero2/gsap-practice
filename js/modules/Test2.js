export default class Test {
  constructor(message) {
    this.message = message;
    this.testMessage = message + ': test';
  }

  show() {
    console.log(this.message);
    console.log(this.testMessage);
    console.log('-');
  }
}
