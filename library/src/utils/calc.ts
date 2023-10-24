import { Logger, connect, counter, test } from "../decorators/common";

/** Calculator with basic operations */
@Logger("Hello world")
export class Calculator {
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