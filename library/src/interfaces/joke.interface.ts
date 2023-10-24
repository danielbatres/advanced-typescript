/** Interface for a simple Joke */
export interface Joke<T> {
  body: T;
  category: T;
  [key: string]: T;
}

/*  Interface for a complicated Joke 
export interface ComplicatedJoke extends Joke {
  level: number;
} */

const joke: Joke<string> = {
  body: "This is a joke",
  category: "Simple joke",
  name: "joker"
}

function random<T, U>(value: T, description: U): T {
  const result: T = value;

  console.log(`Value ${value}, description: ${description}`);

  return result;
}

const answer = random<number, string>(2, "hello");