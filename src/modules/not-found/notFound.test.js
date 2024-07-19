import React from "react";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import NotFound from "./NotFound.component";

describe("NotFound Component", () => {
  it("renders the error alert with the correct message", () => {
    render(<NotFound />);
    const alertElement = screen.getByRole("alert");
    expect(alertElement).toBeInTheDocument();
    expect(alertElement).toHaveTextContent("Rsource you are looking for is not found");
  });
});
