import LineBreak from "@/components/LineBreak";
import { Word } from "@/types/Word";
import Link from "next/link";
import { HiOutlineExternalLink } from "react-icons/hi";

const SearchResultFooter = ({
  sourceUrls,
}: {
  sourceUrls: Word["sourceUrls"];
}) => {
  if (sourceUrls.length > 0) {
    return (
      <>
        <LineBreak height={1} />
        <footer
          className="flex flex-wrap gap-5 text-body-sm mt-8"
          role="contentinfo"
          aria-label="Source information"
        >
          <p className="text-gray-300 underline">Source</p>
          <Link
            rel="noopener noreferrer"
            aria-label={`External source: ${sourceUrls[0]}`}
            href={sourceUrls[0]}
            target="_blank"
            className="not:dark:text-black-200 underline hover:text-accent transition-colors flex gap-2 items-center"
          >
            {sourceUrls[0]} <HiOutlineExternalLink size={15} />
          </Link>
        </footer>
      </>
    );
  }
  return null;
};

export default SearchResultFooter;
