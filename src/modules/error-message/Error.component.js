import React, { useContext } from "react";
import Snackbar from "@mui/material/Snackbar";
import { ErrorContext } from "../../context/ContextProvider";
/**
 * This Error message can be triggered from any where in the
 * to trigger this generic message use Error context
 * @returns {JSX.Element} - Snackbar component to display generic error message
 */
function Error() {
  // Use the ErrorContext to get the error state and the function to update it
  const { error, setError } = useContext(ErrorContext);

  // Function to handle the closing of the Snackbar
  const handleClose = (event, reason) => {
    // Ignore close events caused by clicking away
    if (reason === "clickaway") {
      return;
    }

    // Set the error state to false, closing the Snackbar
    setError(false);
  };

  return (
    <Snackbar
      open={error}
      autoHideDuration={2000}
      message="Something went wrong"
      onClose={handleClose}
    />
  );
}

export default Error;
