import { StateError } from "./StateError";
import { Word } from "./Word";

export type SearchResult = {
  word: Word[] | [];
  error: StateError;
};


