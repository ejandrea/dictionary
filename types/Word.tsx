type Phonetic = {
  text: string;
  audio: string;
};

type Meaning = {
  partOfSpeech: string;
  synonyms?: string[];
  antonyms?: string[];
  definitions?: {
    definition: string;
    example: string;
  }[];
};

export type Word = {
  word: string;
  phonetics: Phonetic[];
  meanings: Meaning[];
};
