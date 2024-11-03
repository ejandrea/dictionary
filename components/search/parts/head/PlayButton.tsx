import { handlePlayAudio } from "@/services/handleResults";
import { SearchResult } from "@/types/SearchResult";
import { AiFillCaretRight } from "react-icons/ai";

const PlayButton = ({ word }: { word: SearchResult["word"] }) => {
  return (
    <button
      className="size-12 md:size-16 hover:bg-accent bg-accent/25 text-accent hover:text-white rounded-full flex justify-center items-center"
      aria-label={`Play pronunciation for ${word[0].word}`}
      onClick={() => handlePlayAudio(word)}
    >
      <AiFillCaretRight className="size-5 md:size-8" />
    </button>
  );
};

export default PlayButton;
