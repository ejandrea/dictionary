"use client";

import getSearchResults from "@/services/getSearchResults";
import { Word } from "@/types/Word";
import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import SearchResult from "./SearchResult";
import { StateError } from "@/types/Error";
import { AxiosError } from "axios";

const SearchBox = () => {
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

  return (
    <div>
      <div className="relative mt-12">
        <input
          className={`w-full dark:bg-black-300 h-16 rounded-2xl py-5 pr-12 pl-6 md:text-heading-sm font-bold outline-none focus:dark:ring-1 focus:dark:ring-accent caret-accent bg-gray-100 text-body-sm text-black-200"
          placeholder="Search for any word… ${
            error.type === "emptySearch" && "ring-1 ring-error"
          }`}
          type="text"
          placeholder="Search for any word…"
          onKeyDown={(e) =>
            e.key === "Enter" && handleSearch(e.currentTarget.value)
          }
        />
        <CiSearch
          className="absolute right-5 top-1/2 transform -translate-y-1/2 text-accent"
          size={20}
        />
      </div>
      {error.type === "emptySearch" && (
        <p className="text-body-sm mt-2 text-error">Whoops, can’t be empty…</p>
      )}

      <SearchResult word={word} error={error} />
    </div>
  );
};

export default SearchBox;
