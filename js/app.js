// import slider from './modules/slider';
import { Test } from './modules/Test';
import Test2 from './modules/Test2';
class App {
  constructor() {
    this.test = new Test('hello TS');
    this.test2 = new Test2('hello JS');
    this.test.show();
    this.test2.show();
  }
}
new App();
