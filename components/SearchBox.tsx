import { CiSearch } from "react-icons/ci";

const SearchBox = () => {
  return (
    <div className="relative mt-12">
      <input
        className="w-full dark:bg-black-300 h-16 rounded-2xl py-5 pr-12 pl-6 md:text-heading-sm font-bold outline-none focus:dark:ring-1 focus:dark:ring-accent caret-accent bg-gray-100 text-body-sm text-black-200 dark:text-white"
        placeholder="Search for any word…"
        type="text"
      />
      <CiSearch
        className="absolute right-5 top-1/2 transform -translate-y-1/2 text-accent"
        size={20}
      />
    </div>
  );
};

export default SearchBox;
