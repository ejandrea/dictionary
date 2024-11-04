import { Word } from "@/types/Word";

export const mockData: Word[] = [
    {
      word: "test",
      phonetics: [
        {
          text: "/test/",
          audio:
            "https://api.dictionaryapi.dev/media/pronunciations/en/test-uk.mp3",
        },
      ],
      meanings: [
        {
          partOfSpeech: "noun",
          definitions: [
            { definition: "A challenge, trial.", example: "" },
            {
              definition:
                "A cupel or cupelling hearth in which precious metals are melted for trial and refinement",
              example: "",
            },
          ],
          synonyms: ["examination", "quiz"],
          antonyms: ["recess"],
        },
        {
          partOfSpeech: "verb",
          definitions: [
            {
              definition: "To challenge",
              example: "Climbing the mountain tested our stamina.",
            },
            {
              definition:
                "To refine (gold, silver, etc.) in a test or cupel; to subject to cupellation.",
              example: "test",
            },
          ],
          synonyms: [],
          antonyms: [],
        },
      ],
      sourceUrls: [
      "https://en.wiktionary.org/wiki/test",
    ]
    },
  ];