import { SearchResult as SearchResultProps } from "@/types/SearchResult";
import NoResponse from "./NoResponse";
import { SearchResultBody, SearchResultHead } from "./parts";

const SearchResult = ({ word, error }: SearchResultProps) => {
  return word.length === 0 ? (
    <NoResponse error={error} />
  ) : (
    <section className="mt-6">
      <SearchResultHead word={word} />
      <SearchResultBody word={word} />
    </section>
  );
};

export default SearchResult;
