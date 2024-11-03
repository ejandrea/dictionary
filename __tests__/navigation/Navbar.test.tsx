import { Navbar } from "@/components/nav";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

describe("Navbar", () => {
  beforeEach(() => {
    render(<Navbar />);
  });

  it("renders the navigation logo", () => {
    const bookIcon = screen.getByLabelText("Logo of the application");
    expect(bookIcon).toBeInTheDocument();
  });

  it("renders the font selector button", () => {
    const fontSelectorButton = screen.getByLabelText(
      "Font Selector Dropdown Button"
    );
    expect(fontSelectorButton).toBeInTheDocument();
  });

  it("renders the vertical line break", () => {
    const verticalLineBreak = screen.getByRole("separator");
    expect(verticalLineBreak).toBeInTheDocument();
  });

  it("renders the toggle dark mode button", () => {
    const darkModeToggleButton = screen.getByLabelText(
      "Dark Mode Toggle Button"
    );
    expect(darkModeToggleButton).toBeInTheDocument();
  });
});
