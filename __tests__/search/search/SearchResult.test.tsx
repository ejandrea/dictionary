import SearchResult from "@/components/search/SearchResult";
import { StateError } from "@/types/StateError";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("Search Result", () => {
  it("renders the correct layout when no definitions were found", () => {
    const mockData = {
      word: [],
      error: {
        type: "noResponse" as StateError["type"],
      },
    };

    render(<SearchResult word={mockData.word} error={mockData.error} />);
    const noResponse = screen.getByLabelText("No definitions found");
    expect(noResponse).toBeInTheDocument();
  });
});
