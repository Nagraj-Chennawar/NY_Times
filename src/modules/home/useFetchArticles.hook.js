import React, { useEffect, useContext, useState } from "react";
import ApiService from "../../services";
import { ErrorContext } from "../../context/ContextProvider";
/**
 * 
 * @returns {object} - contains error and data
 */
function useFetchArticles() {
  // Access the setError function from ErrorContext to handle errors
  const { setError } = useContext(ErrorContext);

  // State to store fetched data
  const [data, setData] = useState([]);

  // Callback function to handle errors
  const errorCallback = () => {
    setError(true);
  };

  // Create an instance of ApiService with the error callback
  const api = new ApiService(errorCallback);

  // useEffect to fetch data on component mount
  useEffect(() => {
    // Fetch data from the API and update state
    setData(api.get("/abcd", {}));
  }, []);
  return data;
}

export default useFetchArticles;
