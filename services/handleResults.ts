import { SearchResult } from "@/types/SearchResult";

const handlePlayAudio = (word: SearchResult["word"]) => {
    if (word.length !== 0) {
      const source = word[0].phonetics[0]?.audio;
      if (source !== "") {
        const audio = new Audio(word[0].phonetics[0]?.audio);
        audio.play();
      }
      return null;
    }
}

const getPhoneticText = (word: SearchResult["word"]) => {
    return word[0]?.phonetics.find((phonetic) => phonetic.text) || { text: "" };
}

export {
  getPhoneticText, handlePlayAudio
};
