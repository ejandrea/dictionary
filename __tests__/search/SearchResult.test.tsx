import SearchResult from "@/components/search/SearchResult";
import { mockData } from "@/constants/testMockData";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

describe("No Search Result", () => {
  it("should render the correct layout and error message", () => {
    render(<SearchResult word={[]} error={{ type: "noResponse" }} />);
    const noResponse = screen.getByLabelText("No definitions found");
    expect(noResponse).toBeInTheDocument();
  });
});

describe("Search Result", () => {
  // head
  beforeEach(() => {
    render(<SearchResult word={mockData} error={{ type: "" }} />);
  });

  it("renders the word heading correctly", () => {
    const heading = screen.getByLabelText("Heading of the searched word");
    expect(heading).toBeInTheDocument();
  });

  it("renders the phonetic test", () => {
    const phoneticText = screen.getByLabelText(
      `Phonetic text of ${mockData[0].word}`
    );
    expect(phoneticText).toBeInTheDocument();
  });

  it("renders the play button", () => {
    const playButton = screen.getByLabelText(
      `Play pronunciation for ${mockData[0].word}`
    );
    expect(playButton).toBeInTheDocument();
  });

  // body

  it("renders all partOfSpeech headings correctly", () => {
    mockData[0].meanings.map((meaning) => {
      const partOfSpeechHeading = screen.getByText(meaning.partOfSpeech);
      expect(partOfSpeechHeading).toBeInTheDocument();
    });
  });

  it("renders the meaning header", () => {
    const meaningHeader = screen.getByLabelText(
      `meaning-label-${mockData[0].meanings[0].partOfSpeech}`
    );
    expect(meaningHeader).toBeInTheDocument();
  });

  it("renders all definitions and available examples", () => {
    mockData[0].meanings[0].definitions!.forEach((definition, index) => {
      console.log(definition, index);
      expect(screen.getByText(definition.definition)).toBeInTheDocument();

      if (definition.example) {
        expect(screen.getByText(definition.example)).toBeInTheDocument();
      }
    });
  });

  it("renders the source url", () => {
    const sourceInformationContainer =
      screen.getByLabelText("Source information");

    expect(sourceInformationContainer).toBeInTheDocument();
    const sourceButton = screen.getByLabelText(
      `External source: ${mockData[0].sourceUrls[0]}`
    );

    expect(sourceButton).toBeInTheDocument();
  });
});
