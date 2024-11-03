import { Word } from "@/types/Word";

const Thesaurus = ({ meaning }: { meaning: Word["meanings"][0] }) => {
  const renderWords = (label: string, words: string[]) => {
    if (words.length > 0) {
      return (
        <div className="flex flex-wrap mb-2">
          <p className="mr-2 text-body-sm md:text-heading-sm">{label}:</p>
          {words.map((word, index) => (
            <span
              key={index}
              className="mr-2 text-body-sm md:text-heading-sm font-bold text-accent"
            >
              {word}
            </span>
          ))}
        </div>
      );
    }
    return null; // Return null if no words to display
  };

  return (
    <div className="flex flex-col">
      {renderWords("Synonyms", meaning.synonyms || [])}
      {renderWords("Antonyms", meaning.antonyms || [])}
    </div>
  );
};

export default Thesaurus;
