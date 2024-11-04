import { Thesaurus } from "@/components/search/parts/body";
import { mockData } from "@/constants/testMockData";
import { Word } from "@/types/Word";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

describe("Thesaurus", () => {
  it("renders the synonyms and antonyms if there is a value", () => {
    render(<Thesaurus meaning={mockData[0].meanings[0]} />);
    const synonymsSection = screen.getByRole("group", {
      name: "synonyms-label",
    });
    const antonymsSection = screen.getByRole("group", {
      name: "antonyms-label",
    });

    expect(synonymsSection).toBeInTheDocument();
    expect(synonymsSection).toHaveTextContent("Synonyms:");

    expect(antonymsSection).toBeInTheDocument();
    expect(antonymsSection).toHaveTextContent("Antonyms:");

    expect(screen.getByText("examination")).toBeInTheDocument();
    expect(screen.getByText("recess")).toBeInTheDocument();
  });

  it("does not render the synonyms and antonyms if empty array", () => {
    const emptyMeaning: Word["meanings"][0] = {
      partOfSpeech: "noun",
      definitions: [],
      synonyms: [],
      antonyms: [],
    };

    render(<Thesaurus meaning={emptyMeaning} />);

    // Ensure synonyms and antonyms sections are not present
    expect(
      screen.queryByRole("group", { name: "synonyms-label" })
    ).not.toBeInTheDocument();
    expect(
      screen.queryByRole("group", { name: "antonyms-label" })
    ).not.toBeInTheDocument();
  });
});
