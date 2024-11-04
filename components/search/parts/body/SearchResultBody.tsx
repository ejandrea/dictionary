import { SearchResult } from "@/types/SearchResult";
import Meaning from "./Meaning";

const SearchResultBody = ({ word }: { word: SearchResult["word"] }) => {
  return (
    <section className="space-y-8 mt-8 mb-10" role="group">
      {word[0].meanings.map((meaning, index) => (
        <div key={index}>
          <Meaning meaning={meaning} />
        </div>
      ))}
    </section>
  );
};

export default SearchResultBody;
