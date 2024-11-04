import { Word } from "@/types/Word";

const Thesaurus = ({ meaning }: { meaning: Word["meanings"][0] }) => {
  const renderWords = (label: string, words: string[], id: string) => {
    if (words.length > 0) {
      return (
        <section className="flex flex-wrap mb-2" role="group" aria-label={id}>
          <p className="mr-2 text-body-sm md:text-heading-sm">{label}:</p>
          {words.map((word, index) => (
            <span
              key={index}
              className="mr-2 text-body-sm md:text-heading-sm font-bold text-accent"
            >
              {word}
            </span>
          ))}
        </section>
      );
    }
    return null; // Return null if no words to display
  };

  return (
    <div className="flex flex-col" aria-label="Thesaurus">
      {renderWords("Synonyms", meaning.synonyms || [], "synonyms-label")}
      {renderWords("Antonyms", meaning.antonyms || [], "antonyms-label")}
    </div>
  );
};

export default Thesaurus;
