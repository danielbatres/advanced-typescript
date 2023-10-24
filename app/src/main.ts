import $ from 'jquery';
import { Joke, Quote } from 'library-advanced-typescript-course/dist/interfaces';
import { getAllQuotes } from 'library-advanced-typescript-course/dist/utils/quotes';
import './init';
import { picker } from './init';

export class Main {
  constructor() {
    const resultJoke = picker("joke") as Joke;

    this.displayJoke(resultJoke);
    this.displayQuotes();
  }

  displayJoke(joke: Joke) {
    $('.content').text(joke.body);
    $('.source').text(joke.category);
  }

  displayQuotes() {
    const quotes: Quote[] = getAllQuotes();

    quotes.forEach((quote: Quote, index: number) => {
      console.log(quote);
      $('.quotes').append(
        `<div>
          <blockquote>
            <strong>${index + 1}:</strong> ${quote.quote}
          </blockquote>
          <em>${quote.author}</em>
        </div>`
      )
    })
  }
}
