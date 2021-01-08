export class Test {
  public message: string;
  protected testMessage: string;

  constructor(message: string) {
    this.message = message;
    this.testMessage = message + ': test';
  }

  public show() {
    console.log(this.message);
    console.log(this.testMessage);
    console.log('----------');

  }
}
