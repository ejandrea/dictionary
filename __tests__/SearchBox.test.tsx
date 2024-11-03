import SearchBox from "@/components/search/SearchBox";
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";

describe("Search Box", () => {
  it("becomes invalid and shows an error if no value is entered", () => {
    render(<SearchBox />);

    const inputBox = screen.getByLabelText(
      "Search box input: Search for any word"
    );

    fireEvent.change(inputBox, {
      target: {
        value: "",
      },
    });

    fireEvent.keyDown(inputBox, {
      key: "Enter",
      code: "Enter",
      charCode: 13,
    });

    expect(inputBox).toBeInvalid();
    expect(
      screen.getByLabelText("Error message for an empty search value")
    ).toBeInTheDocument();
  });
});
