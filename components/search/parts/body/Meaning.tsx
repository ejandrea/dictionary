import LineBreak from "@/components/LineBreak";
import { Word } from "@/types/Word";
import { Definition, Thesaurus } from "@/components/search/parts/body";

const Meaning = ({ meaning }: { meaning: Word["meanings"][0] }) => {
  return (
    <section
      className="flex flex-col space-y-8"
      role="region"
      aria-labelledby={`heading-${meaning.partOfSpeech}`}
    >
      <header className="flex gap-4 items-center">
        <h2
          className="font-bold italic text-body-md md:text-heading-md"
          id={`heading-${meaning.partOfSpeech}`}
        >
          {meaning.partOfSpeech}
        </h2>
        <LineBreak height={1} />
      </header>

      <div
        role="group"
        aria-labelledby={`meaning-label-${meaning.partOfSpeech}`}
        className="space-y-4"
      >
        <p
          id={`meaning-label-${meaning.partOfSpeech}`}
          aria-label={`meaning-label-${meaning.partOfSpeech}`}
          className="text-gray-300 text-body-sm md:text-heading-sm"
        >
          Meaning
        </p>

        <Definition meaning={meaning} />
        <Thesaurus meaning={meaning} />
      </div>
    </section>
  );
};

export default Meaning;
