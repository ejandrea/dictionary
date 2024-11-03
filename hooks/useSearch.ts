import getSearchResults from "@/services/getSearchResults";
import { StateError } from "@/types/Error";
import { Word } from "@/types/Word";
import { AxiosError } from "axios";
import { useState } from "react";

const useSearch = () => {
  const [error, setError] = useState<StateError>({
    type: "",
  });
  const [word, setWord] = useState<Word[]>([]);

  const handleSearch = async (value: string) => {
    try {
      const searchValue = value.trim();

      if (searchValue.length !== 0) {
        await getSearchResults(searchValue).then((result) =>
          setWord(result.data)
        );

        if (word.length === 0) setError({ type: "noResponse" });
        else setError({ type: "" });
      } else {
        setError({
          type: "emptySearch",
        });
      }
    } catch (error) {
      const responseError = error as AxiosError;
      if (responseError.status === 404) {
        setWord([]);
        setError({ type: "noResponse" });
      }
      return;
    }
  };

  return { word, error, handleSearch };
};

export default useSearch;
