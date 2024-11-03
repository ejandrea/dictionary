import Null from "@/public/images/null.png";
import { StateError } from "@/types/StateError";
import { Word } from "@/types/Word";
import Image from "next/image";
import { AiFillCaretRight } from "react-icons/ai";
import LineBreak from "../LineBreak";

type SearchResultsProps = {
  word: Word[] | [];
  error: StateError;
};

const SearchResult = ({ word, error }: SearchResultsProps) => {
  console.log(word, "word");
  const handlePlayAudio = () => {
    if (word.length !== 0) {
      const source = word[0].phonetics[0]?.audio;
      if (source !== "") {
        const audio = new Audio(word[0].phonetics[0]?.audio);
        audio.play();
      }
      return null;
    }
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
            {word[0]?.phonetics[0]?.text || word[0]?.phonetics[1]?.text}
          </p>
        </div>

        <button
          className="size-12 md:size-16 hover:bg-accent bg-accent/25 rounded-full flex justify-center items-center"
          onClick={handlePlayAudio}
        >
          <AiFillCaretRight className="text-accent hover:text-white size-5 md:size-8" />
        </button>
      </div>

      <div className="space-y-8 mt-8">
        {word[0].meanings.map((meaning, index) => (
          <div key={index}>
            <div className="flex flex-col space-y-8">
              <div className="flex gap-4 items-center">
                <h2 className="font-bold italic text-body-md md:text-heading-md">
                  {meaning.partOfSpeech}
                </h2>
                <LineBreak height={1} />
              </div>

              <p className="text-gray-300 text-body-sm md:text-heading-sm">
                Meaning
              </p>

              <ul className="list-disc pl-6 space-y-3 marker:text-accent">
                {meaning.definitions!.map((definition, index) => (
                  <li key={index} className="text-body-sm md:text-body-md">
                    <span>{definition.definition}</span>
                    <span className="block mt-3 text-gray-300">
                      {definition.example}
                    </span>
                  </li>
                ))}
              </ul>

              <p>
                Synonyms{" "}
                {meaning.definitions!.map((d, index) => {
                  if (d.synonyms.length !== 0)
                    return (
                      <span key={index} className="font-bold text-accent">
                        {" "}
                        {d.synonyms}{" "}
                      </span>
                    );
                })}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

type NoResponseProps = {
  error: SearchResultsProps["error"];
};

const NoResponse = ({ error }: NoResponseProps) => {
  console.log(error);
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
