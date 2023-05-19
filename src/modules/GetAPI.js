/**
 * Helper function for GETing data as JSON with fetch.
 *
 * @param {string} url - URL to GET data to
 * @return {Object} - Response body from URL that was GETed
 */
const fetchDataJSON = async (URL) => {
  const response = await fetch(URL);
  if (!response.ok) {
    const errorMessage = await response.text();
    throw new Error(errorMessage);
  }
  const dataJSON = await response.json();
  return dataJSON;
};

/**
 * Event handler for a form submit event.
 * @param {SubmitEvent} event
 */
const handleRefreshScores = async (event, url) => {
  event.preventDefault();
  try {
    const responseData = await fetchDataJSON(url);
    return responseData;
  } catch (error) {
    return error;
  }
};

/**
 * Event handler for a form submit event.
 */
const loadRefreshScores = async (url) => {
  try {
    const responseData = await fetchDataJSON(url);
    return responseData;
  } catch (error) {
    return error;
  }
};

export {
  fetchDataJSON, handleRefreshScores, loadRefreshScores,
};