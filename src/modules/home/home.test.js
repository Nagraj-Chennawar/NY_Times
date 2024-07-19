import React from "react";
import { render, screen, fireEvent, act } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Home from "./Home";
import useFetchArticles from "./useFetchArticles.hook";
import { PERIODS } from "../../constants";

// Mock the useFetchArticles hook
jest.mock("./useFetchArticles.hook");

const mockResponse = {
  data: {
    results: [
      {
        title: "Test Article",
        abstract: "This is a test article",
        url: "https://example.com",
        updated: "2024-07-19",
        media: [
          {
            "media-metadata": [
              { url: "https://via.placeholder.com/210x140" },
              { url: "https://via.placeholder.com/210x140" },
            ],
          },
        ],
      },
    ],
  },
  error: null,
  loading: false,
};

describe("Home Component", () => {
  beforeEach(() => {
    useFetchArticles.mockReturnValue(mockResponse);
  });

  test("renders the component correctly", async () => {
    await act(async () => {
      render(<Home />);
    });

    // Check if the title is rendered
    expect(
      screen.getByText("New York Times Popular Articles")
    ).toBeInTheDocument();

    // Check if the filter by text is rendered
    expect(screen.getByText("Filter By")).toBeInTheDocument();

    // Check if the select box is rendered
    expect(screen.getByRole("combobox")).toBeInTheDocument();

    // Check if the article card is rendered
    expect(screen.getByText("Test Article")).toBeInTheDocument();
    expect(screen.getByText("This is a test article")).toBeInTheDocument();

    // Check if the link in the article card is rendered
    expect(
      screen.getByRole("link", { name: /read more here/i })
    ).toHaveAttribute("href", "https://example.com");
  });
});
