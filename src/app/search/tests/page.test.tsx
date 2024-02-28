import "@testing-library/jest-dom";

import { render, screen } from "@testing-library/react";

import SearchPage from "../page";

describe("SearchPage", () => {
  render(<SearchPage />);

  it("should render the SearchPage component", () => {
    expect(screen.getByText("Search Page")).toBeInTheDocument();
  });
});
