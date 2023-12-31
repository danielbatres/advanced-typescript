/* import { ComplicatedJoke as HardJoke, Joke } from './interfaces/joke.interface';
import { Quote } from './interfaces/quote.interface';
import { Riddle } from './interfaces/riddle.interface'; */

import { Quote, Joke, Riddle } from "@batres/models"

export const quote: Quote = {
  quote:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  author: '@batres',
};

export const joke: Joke<string> = {
  body:
    'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  category: 'simple joke',
};

export const hardJoke: Joke<string> = {
  body:
    'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  category: 'simple joke',
  level: "3",
};

export const riddle: Riddle = {
  riddle:
    'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur',
  answer: 'Search loremipsum generator',
};