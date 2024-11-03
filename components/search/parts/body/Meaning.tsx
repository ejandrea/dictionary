import LineBreak from "@/components/LineBreak";
import { Word } from "@/types/Word";
import { Definition, Thesaurus } from "@/components/search/parts/body";

const Meaning = ({ meaning }: { meaning: Word["meanings"][0] }) => {
  return (
    <div className="flex flex-col space-y-8">
      <div className="flex gap-4 items-center">
        <h2 className="font-bold italic text-body-md md:text-heading-md">
          {meaning.partOfSpeech}
        </h2>
        <LineBreak height={1} />
      </div>

      <p className="text-gray-300 text-body-sm md:text-heading-sm">Meaning</p>
      <Definition meaning={meaning} />
      <Thesaurus meaning={meaning} />
    </div>
  );
};

export default Meaning;
