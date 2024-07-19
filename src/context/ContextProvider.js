import React, { useState } from "react";
import { createContext } from "react";
export const ErrorContext = createContext();

/**
 * ContextProvider Component
 *
 * This component provides an error state context to its child components.
 * It uses the React Context API to make the error state and the function
 * to update it available throughout the component tree.
 *
 * Usage:
 * - Wrap this provider around any components that need access to the error state.
 * - Use the `ErrorContext` to access or update the error state in any child component.
 *
 *   // Now you can use error and setError in YourComponent as
 *   const { error, setError } = useContext(ErrorContext);
 *  @param {object} props - component props.
 *  @param {ReactNde} props.children - children passed as react node
 *  @returns {JSX.Element} returns wrapper component with provider
 */

function ContextProvider({ children }) {
  const [error, setError] = useState();
  const contextValue = { error, setError };
  return (
    <ErrorContext.Provider value={contextValue}>
      {children}
    </ErrorContext.Provider>
  );
}

export default ContextProvider;
