import React from "react";
import { render, screen, fireEvent, act } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Error from "./Error.component";
import { ErrorContext } from "../../context/ContextProvider";

// Helper function to render the component with context
const renderWithContext = (contextValue) => {
  return render(
    <ErrorContext.Provider value={contextValue}>
      <Error />
    </ErrorContext.Provider>
  );
};

describe("Error Component", () => {
  beforeAll(() => {
    jest.useFakeTimers();
  });

  afterAll(() => {
    jest.useRealTimers();
  });

  test("Snackbar is displayed when error is true", () => {
    renderWithContext({ error: true, setError: jest.fn() });

    expect(screen.getByText("Something went wrong")).toBeInTheDocument();
  });

  test("Snackbar is not displayed when error is false", () => {
    renderWithContext({ error: false, setError: jest.fn() });

    expect(screen.queryByText("Something went wrong")).not.toBeInTheDocument();
  });

  test("Snackbar closes when handleClose is called without clickaway reason", () => {
    const setErrorMock = jest.fn();
    renderWithContext({ error: true, setError: setErrorMock });

    expect(screen.getByText("Something went wrong")).toBeInTheDocument();

    act(() => {
      jest.advanceTimersByTime(2000); // advance timers to simulate autoHideDuration
    });

    expect(setErrorMock).toHaveBeenCalledWith(false);
  });

  test("Snackbar does not close when handleClose is called with clickaway reason", () => {
    const setErrorMock = jest.fn();
    renderWithContext({ error: true, setError: setErrorMock });

    const snackbar = screen.getByText("Something went wrong");

    act(() => {
      fireEvent.click(snackbar, { reason: "clickaway" });
    });

    expect(setErrorMock).not.toHaveBeenCalled();
  });
});
