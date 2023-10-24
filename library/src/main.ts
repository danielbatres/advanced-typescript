import { Calculator } from './utils/calc';

console.log('Hello world');

const calc = new Calculator();
const sumResult = calc.sum(1, 2, 3, 4, 5, 6);
const diffResult = calc.diff(1, 2, 3, 4, 5, 6);

console.log(`+ Sum total is ${sumResult}`);
console.log(`- Difference total is ${diffResult}`);