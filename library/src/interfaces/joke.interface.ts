/** Interface for a simple Joke */
export interface Joke {
  body: string;
  category: string;
  [key: string]: string;
}

/*  Interface for a complicated Joke 
export interface ComplicatedJoke extends Joke {
  level: number;
} */

const joke: Joke = {
  body: "This is a joke",
  category: "Simple joke",
  name: "joker"
}