import { render, screen, fireEvent } from "@testing-library/react";
import { useTheme as mockUseTheme } from "next-themes";
import DarkModeToggle from "@/components/nav/DarkModeToggle";

jest.mock("next-themes", () => ({
  useTheme: jest.fn(),
}));

describe("Dark Mode Toggle", () => {
  const mockSetTheme = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks(); // Clear all mocks between tests
    mockSetTheme.mockClear();
  });

  it("toggles to light mode when clicked from dark mode", () => {
    (mockUseTheme as jest.Mock).mockReturnValue({
      theme: "dark",
      setTheme: mockSetTheme,
    });

    render(<DarkModeToggle />);

    fireEvent.click(screen.getByLabelText("Dark Mode Toggle Button"));
    expect(mockSetTheme).toHaveBeenCalledWith("light");
  });

  it("toggles to dark mode when clicked from light mode", () => {
    (mockUseTheme as jest.Mock).mockReturnValue({
      theme: "light",
      setTheme: mockSetTheme,
    });

    render(<DarkModeToggle />);

    fireEvent.click(screen.getByLabelText("Dark Mode Toggle Button"));
    expect(mockSetTheme).toHaveBeenCalledWith("dark");
  });
});
