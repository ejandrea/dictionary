import { StateError } from "@/types/Error";
import { Word } from "@/types/Word";
import Null from "@/public/images/null.png";
import Image from "next/image";

type SearchResultsProps = {
  word: Word[] | [];
  error: StateError;
};

const SearchResult = ({ word, error }: SearchResultsProps) => {
  console.log(word, "WORD THAT IS PASSED INTO THE RESULTS");

  return word.length === 0 ? <NoResponse error={error} /> : <p>result here</p>;
};

type NoResponseProps = {
  error: SearchResultsProps["error"];
};

const NoResponse = ({ error }: NoResponseProps) => {
  if (error.type === "noResponse")
    return (
      <section className="w-full flex flex-col items-center justify-center gap-11">
        <Image
          src={Null}
          sizes="40"
          className="mt-32"
          alt="Disappointed Emoji: no response from the server"
        />
        <div className="space-y-6">
          <p className="text-heading-sm font-bold text-center">
            No definitions found
          </p>
          <p className="text-body-md text-gray-300 text-center">
            Sorry pal, we couldn&#39;t find definitions for the word you were
            looking for. You can try the search again at later time or head to
            the web instead.
          </p>
        </div>
      </section>
    );
};

export default SearchResult;
