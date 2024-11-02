"use client";

import { useState } from "react";
import { CiSearch } from "react-icons/ci";

const SearchBox = () => {
  const [error, setError] = useState(false);

  const handleSearch = (value: string) => {
    const searchValue = value.trim();

    if (searchValue.length !== 0) {
      setError(false);
      console.log(searchValue);
      // fetch the value from the server
    } else {
      setError(true);
    }
  };

  return (
    <>
      <div className="relative mt-12">
        <input
          className={`w-full dark:bg-black-300 h-16 rounded-2xl py-5 pr-12 pl-6 md:text-heading-sm font-bold outline-none focus:dark:ring-1 focus:dark:ring-accent caret-accent bg-gray-100 text-body-sm text-black-200"
          placeholder="Search for any word… ${error && "ring-1 ring-error"}`}
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
      {error && (
        <p className="text-body-sm mt-2 text-error">Whoops, can’t be empty…</p>
      )}
    </>
  );
};

export default SearchBox;
