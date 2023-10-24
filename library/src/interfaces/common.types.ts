/** Fact types per kind of content */
import { Joke } from './joke.interface';
import { Quote } from './quote.interface';
import { Riddle } from './riddle.interface';

/** Fact types per kind of content */
//export type Fact = Quote | Quote[] | Joke<string> | Riddle | string;

export type Fact<T, U = {}> = T | U;

const quote: Fact<Quote> = {
  author: "batres",
  quote: "Happy Coding"
}

const mixedFact: Fact<Quote, Riddle> = {
  author: "batres",
  quote: "Happy Coding",
  riddle: "Wich fish costs the most?",
  answer: "A goldfish"
}

/* const riddle: Fact<Joke<string>> = {

} */

/* type label = string;

const name: label; */