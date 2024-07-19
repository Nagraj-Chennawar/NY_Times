import React, { useEffect, useContext, useState } from "react";
import ApiService from "../../services";
import { ErrorContext } from "../../context/ContextProvider";
import { changePeriod } from "../../utils";

/**
 *
 * @returns {object} - contains error and data
 */
function useFetchArticles(period) {
  // Access the setError function from ErrorContext to handle errors
  const { setError } = useContext(ErrorContext);
  const [loading, setLoading] = useState(false);
  // State to store fetched data
  const [data, setData] = useState([]);

  // Callback function to handle errors
  const errorCallback = () => {
    setError(true);
    setLoading(false);
  };

  // Create an instance of ApiService with the error callback
  const api = new ApiService(errorCallback);
  const callApi = async () => {
    setLoading(true);
    // Fetch data from the API and update state
    setData(await api.get(changePeriod(period)));
    setLoading(false);
  };
  // useEffect to fetch data on component mount
  useEffect(() => {
    callApi();
  }, [period]);
  return { ...data, loading };
}

export default useFetchArticles;
