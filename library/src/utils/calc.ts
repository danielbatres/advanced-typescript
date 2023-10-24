import { Logger } from "decorators/common";

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

  /** Substract any quantity of values */
  diff(...values: number[]): number {
    return values.reduce((previous, current) => {
      return previous - current;
    });
  }
}