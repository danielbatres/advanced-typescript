import * as fact from './content';
import { Fact } from './interfaces/common.types';
import { Calculator } from './utils/calc';
import getQuote, { getAllQuotes } from './utils/quotes';

/** Generate a fact! Just pass the one that you need as a parameter!
 * Possible facts:
 *  * Quote
 *  * All Quotes
 *  * Joke
 *  * Riddle
 */
export function makeA(topic: string): Fact {
  switch (topic.toLowerCase()) {
    case 'quote':
      return getQuote();
    case 'all-quotes':
      return getAllQuotes();
    case 'joke':
      return fact.joke;
    case 'hardJoke':
      return fact.hardJoke;
    case 'riddle':
      return fact.riddle;

    default:
      return 'Option does not exists!';
  }
}

const factResult = makeA('quote');

const calc = new Calculator();
const sumResult = calc.sum(1, 2, 3, 4, 5, 6);
const diffResult = calc.diff(1, 2, 3, 4, 5, 6);
