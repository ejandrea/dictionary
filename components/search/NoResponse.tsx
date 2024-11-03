import Null from "@/public/images/null.png";
import { SearchResult } from "@/types/SearchResult";
import Image from "next/image";

const NoResponse = ({ error }: { error: SearchResult["error"] }) => {
  if (error.type === "noResponse")
    return (
      <section
        role="alert"
        aria-live="assertive"
        aria-label="No definitions found"
        className="w-full flex flex-col items-center justify-center gap-11"
      >
        <Image
          src={Null}
          sizes="40"
          className="mt-32"
          alt="Disappointed Emoji: no response from the server"
        />
        <div className="space-y-6">
          <h2
            className="text-heading-sm font-bold text-center"
            aria-describedby="no-definitions-description"
          >
            No definitions found
          </h2>
          <p
            className="text-body-md text-gray-300 text-center"
            id="no-definitions-heading"
          >
            Sorry pal, we couldn&#39;t find definitions for the word you were
            looking for. You can try the search again at later time or head to
            the web instead.
          </p>
        </div>
      </section>
    );
};

export default NoResponse;
