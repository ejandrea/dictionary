import { Word } from "@/types/Word";

const Definition = ({ meaning }: { meaning: Word["meanings"][0] }) => {
  return (
    <ul className="list-disc pl-6 space-y-3 marker:text-accent">
      {meaning.definitions!.map((definition, index) => (
        <li key={index} className="text-body-sm md:text-body-md">
          <p aria-label={`Definition ${index + 1}`}>{definition.definition}</p>
          {definition.example && (
            <p
              className="mt-3 text-gray-300"
              aria-label={`Example ${index + 1}`}
            >
              {definition.example}
            </p>
          )}
        </li>
      ))}
    </ul>
  );
};

export default Definition;
