import { Word } from "@/types/Word";

const Definition = ({ meaning }: { meaning: Word["meanings"][0] }) => {
  return (
    <ul className="list-disc pl-6 space-y-3 marker:text-accent" role="listbox">
      {meaning.definitions!.map((definition, index) => (
        <li
          key={index}
          className="text-body-sm md:text-body-md"
          role="listitem"
        >
          <span>{definition.definition}</span>
          <span className="block mt-3 text-gray-300">{definition.example}</span>
        </li>
      ))}
    </ul>
  );
};

export default Definition;
