import { Navbar } from "@/components/nav";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

describe("Navbar", () => {
  it("renders the navigation logo", async () => {
    render(<Navbar />);
    const bookIcon = await screen.findByLabelText("Logo of the application");
    expect(bookIcon).toBeInTheDocument();
  });

  it("renders the font selector button", async () => {
    render(<Navbar />);
    const fontSelectorButton = await screen.findByLabelText(
      "Font Selector Dropdown Button"
    );
    expect(fontSelectorButton).toBeInTheDocument();
  });

  it("renders the toggle dark mode button", async () => {
    render(<Navbar />);
    const darkModeToggleButton = await screen.getByLabelText(
      "Dark Mode Toggle Button"
    );
    expect(darkModeToggleButton).toBeInTheDocument();
  });
});
