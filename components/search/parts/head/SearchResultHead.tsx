import { SearchResult } from "@/types/SearchResult";
import PhoneticText from "./PhoneticText";
import PlayButton from "./PlayButton";

const SearchResultHead = ({ word }: { word: SearchResult["word"] }) => {
  const { word: wordText } = word[0];

  return (
    <section
      role="region"
      aria-labelledby="search-result-heading"
      className="flex justify-between items-center"
    >
      <div>
        <h1
          id="search-result-heading"
          aria-live="polite"
          className="text-heading-md md:text-heading-lg font-bold mb-2"
        >
          {wordText}
        </h1>
        <PhoneticText word={word} />
      </div>

      <PlayButton word={word} />
    </section>
  );
};

export default SearchResultHead;
