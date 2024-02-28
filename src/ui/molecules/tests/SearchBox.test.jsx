import "@testing-library/jest-dom";

import { render, screen } from "@testing-library/react";

import { SearchBox } from "../SearchBox"; // Import the SearchBox component
import userEvent from "@testing-library/user-event";

const user = userEvent.setup();

jest.mock("next/navigation", () => {
  return {
    __esModule: true,
    usePathname: () => ({
      pathname: "",
    }),
    useRouter: () => ({
      query: jest.fn(),
      back: jest.fn(),
      forward: jest.fn(),
      prefetch: jest.fn(),
      push: jest.fn(),
      refresh: jest.fn(),
      replace: jest.fn(),
    }),
    useSearchParams: () => ({
      get: () => {},
    }),
  };
});

describe("SearchBox", () => {
  it("display a search bar", async () => {
    render(<SearchBox />);
    const input = screen.getByRole("searchbox");

    expect(screen.getByRole("searchbox")).toBeInTheDocument();
    expect(input).toHaveValue("");
    expect(input).toHaveAttribute("placeholder", "Search");

    expect(screen.getByTitle("SearchIcon")).toBeInTheDocument();
  });

  it("type text in the search bar", async () => {
    render(<SearchBox />);
    const input = screen.getByRole("searchbox");

    await user.click(input);
    expect(input).toHaveFocus();

    await user.type(input, "Hello, World!");
    expect(input).toHaveValue("Hello, World!");

    await user.clear(input);
    expect(input).toHaveValue("");
  });
});
