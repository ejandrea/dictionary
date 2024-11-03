import { Navbar } from "@/components/nav";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

describe("Navbar", () => {
  render(<Navbar />);

  it("renders the navigation logo", async () => {
    const bookIcon = await screen.findByLabelText("Logo of the application");
    expect(bookIcon).toBeInTheDocument();
  });
});
