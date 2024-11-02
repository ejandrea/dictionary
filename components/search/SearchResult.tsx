import Null from "@/public/images/null.png";
import { StateError } from "@/types/Error";
import { Word } from "@/types/Word";
import Image from "next/image";
import { AiFillCaretRight } from "react-icons/ai";

type SearchResultsProps = {
  word: Word[] | [];
  error: StateError;
};

const SearchResult = ({ word, error }: SearchResultsProps) => {
  const handlePlayAudio = () => {
    const audio = new Audio(word[0].phonetics[0].audio);
    audio.play();
  };

  return word.length === 0 ? (
    <NoResponse error={error} />
  ) : (
    <section className="mt-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-heading-md md:text-heading-lg font-bold mb-2">
            {word[0].word}
          </h1>
          <p className="text-body-md md:text-heading-md text-accent">
            {word[0].phonetics[0].text || word[0].phonetics[1].text}
          </p>
        </div>

        {word[0].phonetics[0].audio && (
          <button
            className="size-12 md:size-16 hover:bg-accent bg-accent/25 rounded-full flex justify-center items-center"
            onClick={handlePlayAudio}
          >
            <AiFillCaretRight className="text-accent hover:text-white size-5 md:size-8" />
          </button>
        )}
      </div>
    </section>
  );
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
