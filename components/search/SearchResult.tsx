import { SearchResult as SearchResultProps } from "@/types/SearchResult";
import NoResponse from "./NoResponse";
import {
  SearchResultBody,
  SearchResultFooter,
  SearchResultHead,
} from "./parts";

const SearchResult = ({ word, error }: SearchResultProps) => {
  return word.length === 0 ? (
    <NoResponse error={error} />
  ) : (
    <section className="mt-6">
      <SearchResultHead word={word} />
      <SearchResultBody word={word} />
      <SearchResultFooter sourceUrls={word[0].sourceUrls} />
    </section>
  );
};

export default SearchResult;
