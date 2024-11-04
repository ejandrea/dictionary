import { SearchResult } from "@/types/SearchResult";

const handlePlayAudio = (word: SearchResult["word"]) => {
  if (word.length > 0) {
      const audioSource = word[0].phonetics.find(phonetic => phonetic.audio)?.audio;

      if (audioSource) {
        console.log(word[0])
        const audio = new Audio(audioSource);
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
