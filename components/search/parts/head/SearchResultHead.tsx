import { SearchResult } from "@/types/SearchResult";
import PhoneticText from "./PhoneticText";
import PlayButton from "./PlayButton";

const SearchResultHead = ({ word }: { word: SearchResult["word"] }) => {
  return (
    <section className="flex justify-between items-center">
      <div>
        <h1 className="text-heading-md md:text-heading-lg font-bold mb-2">
          {word[0].word}
        </h1>
        <PhoneticText word={word} />
      </div>

      <PlayButton word={word} />
    </section>
  );
};

export default SearchResultHead;
