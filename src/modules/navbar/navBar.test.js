import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter } from "react-router-dom";
import Navbar from "./Navbar.component";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => jest.fn(),
}));

describe("Navbar Component", () => {
  it("renders the Home menu item", () => {
    render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    );
    expect(screen.getByText("Home")).toBeInTheDocument();
  });

  it("navigates to home on click", () => {
    const mockNavigate = jest.fn();
    jest.spyOn(require("react-router-dom"), "useNavigate").mockReturnValue(mockNavigate);

    render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    );

    fireEvent.click(screen.getByText("Home"));
    expect(mockNavigate).toHaveBeenCalledWith("/");
  });
});
