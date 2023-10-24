import $ from 'jquery';
import { makeA } from "library-advanced-typescript-course";
import { Main } from "./main";
export { makeA as picker };

$(() => {
  console.log("Document ready to use jQuery");

  const main = new Main();
});