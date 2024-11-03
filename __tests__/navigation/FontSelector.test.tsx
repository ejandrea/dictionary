import { FontSelector } from "@/components/nav";
import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";

describe("Font Selector", () => {
  beforeEach(() => {
    render(<FontSelector />);
  });

  it("renders the correct default font and the icon", () => {
    const selectorButton = screen.getByLabelText(
      "Font Selector Dropdown Button"
    );
    expect(selectorButton).toHaveTextContent("Sans Serif");
    const arrowIcon = screen.getByRole("img");
    expect(arrowIcon).toBeVisible();
  });

  it("toggles the dropdown when the button is clicked", () => {
    const fontToggleList = screen.queryByRole("listbox");

    expect(fontToggleList).toHaveClass("hidden");
    const dropDownButton = screen.getByLabelText(
      "Font Selector Dropdown Button"
    );

    fireEvent.click(dropDownButton);
    expect(fontToggleList).toHaveClass("inline");

    fireEvent.click(dropDownButton);
    expect(fontToggleList).toHaveClass("hidden");
  });
});

describe("Font Selector DropDown", () => {
  beforeEach(() => {
    render(<FontSelector />);
  });

  it("should render the font lists correctly", () => {
    const fontSelectorButton = screen.getByLabelText(
      "Font Selector Dropdown Button"
    );
    const fontSelectorDropDown = screen.getByRole("listbox");

    fireEvent.click(fontSelectorButton);
    expect(fontSelectorDropDown).toHaveClass("inline");
    expect(fontSelectorDropDown?.children.length).toBe(3);
  });

  it("should change font and close dropdown after clicked", () => {
    const fontSelectorButton = screen.getByLabelText(
      "Font Selector Dropdown Button"
    );
    const fontSelectorDropDown = screen.getByRole("listbox");

    // default font
    expect(fontSelectorButton).toHaveTextContent("Sans Serif");
    fireEvent.click(fontSelectorButton);
    expect(fontSelectorDropDown).toHaveClass("inline");

    const secondFont = screen.getByText("Serif");
    fireEvent.click(secondFont);

    expect(fontSelectorButton).toHaveTextContent("Serif");
    expect(fontSelectorDropDown).not.toHaveClass("inline");
  });
});
