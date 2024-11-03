import { getPhoneticText } from "@/services/handleResults";
import { SearchResult } from "@/types/SearchResult";

const PhoneticText = ({ word }: { word: SearchResult["word"] }) => {
  const phoneticText = getPhoneticText(word).text;

  return (
    <p
      className="text-body-md md:text-heading-md text-accent"
      aria-label={`Phonetic text of ${word[0].word}`}
    >
      {phoneticText}
    </p>
  );
};

export default PhoneticText;
