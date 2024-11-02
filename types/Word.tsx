type Phonetic = {
  text: string;
  audio: string;
};

type Meaning = {
  partOfSpeech: string;
  example: string;
  synonyms?: string[];
  antonyms?: string[];
};

export type Word = {
  word: string;
  phonetics: Phonetic[];
  origin: string;
  meanings: Meaning[];
};
