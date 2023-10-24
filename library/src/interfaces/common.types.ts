/** Fact types per kind of content */
import { Joke } from './joke.interface';
import { Quote } from './quote.interface';
import { Riddle } from './riddle.interface';

/** Fact types per kind of content */
//export type Fact = Quote | Quote[] | Joke<string> | Riddle | string;

export type Fact<T> = T;

const quote: Fact<Quote> = {
  author: "batres",
  quote: "Happy Coding"
}



/* const riddle: Fact<Joke<string>> = {

} */

/* type label = string;

const name: label; */