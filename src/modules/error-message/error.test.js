import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Error from './Error.component';
import { ErrorContext } from '../../context/ContextProvider';

const renderWithContext = (contextValue) => {
  return render(
    <ErrorContext.Provider value={contextValue}>
      <Error />
    </ErrorContext.Provider>
  );
};

describe('Error Component', () => {
  test('Snackbar is displayed when error is true', () => {
    renderWithContext({ error: true, setError: jest.fn() });

    expect(screen.getByText('Something went wrong')).toBeInTheDocument();
  });

  test('Snackbar is not displayed when error is false', () => {
    renderWithContext({ error: false, setError: jest.fn() });

    expect(screen.queryByText('Something went wrong')).not.toBeInTheDocument();
  });

  test('Snackbar closes when handleClose is called without clickaway reason', () => {
    const setErrorMock = jest.fn();
    renderWithContext({ error: true, setError: setErrorMock });

    const snackbar = screen.getByText('Something went wrong');
    fireEvent.close(snackbar, { reason: 'timeout' });

    expect(setErrorMock).toHaveBeenCalledWith(false);
  });


});
