"use client";

import { CiSearch } from "react-icons/ci";
import SearchResult from "./SearchResult";
import useSearch from "@/hooks/useSearch";

const SearchBox = () => {
  const { error, handleSearch, word } = useSearch();

  return (
    <div>
      <div className="relative mt-12">
        <input
          aria-label="Search box input: Search for any word"
          aria-invalid={error?.type === "emptySearch"}
          aria-describedby={
            error?.type === "emptySearch" ? "error-message" : undefined
          }
          className={`w-full dark:bg-black-300 h-16 rounded-2xl py-5 pr-12 pl-6 md:text-heading-sm font-bold outline-none focus:dark:ring-1 focus:ring-accent caret-accent bg-gray-100 text-body-sm text-black-200"
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
        <p
          id="error-message"
          aria-label="Error message for an empty search value"
          className="text-body-sm mt-2 text-error"
        >
          Whoops, can’t be empty…
        </p>
      )}

      <SearchResult word={word} error={error} />
    </div>
  );
};

export default SearchBox;
