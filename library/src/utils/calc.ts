import { Logger, connect, counter, frozen, init, test } from "../decorators/common";

/** Calculator with basic operations */
@frozen
@init
@Logger("Hello world")
export class Calculator {
  total = 0;

  constructor() {
    // console.log('Calculator has been loaded...');
  }

  /** Sum any quantity of values */
  sum(...values: number[]): number {
    return values.reduce((previous, current) => {
      return previous + current;
    });
  }

  // (f o g)(x) = f(g(x))
  // (connect o counter)(diff) = connect(counter(diff))
  @connect()
  @counter()
  @test()
  /** Substract any quantity of values */
  diff(...values: number[]): number {
    return values.reduce((previous, current) => {
      return previous - current;
    });
  }
}

const calc = new Calculator();

// console.log(calc.total);

/* for (let key in calc) {
  console.log(`Key: ${key}`);
} */

// class Scientific extends Calculator {}