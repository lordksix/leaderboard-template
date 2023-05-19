/**
 * Helper function for POSTing data as JSON with fetch.
 *
 * @param {Object} options
 * @param {string} options.url - URL to POST data to
 * @param {FormData} options.formData - `FormData` instance
 * @return {Object} - Response body from URL that was POSTed to
 */
const postFormDataAsJson = async ({ url, formData }) => {
  const plainFormData = Object.fromEntries(formData.entries());
  const formDataJsonString = JSON.stringify(plainFormData);
  const fetchOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: formDataJsonString,
  };

  const response = await fetch(url, fetchOptions);
  if (!response.ok) {
    const errorMessage = await response.text();
    throw new Error(errorMessage);
  }

  return response.json();
};

/**
 * Event handler for a form submit event.
 * @param {SubmitEvent} event
 */
const handleScoreFormSubmit = async (event, url) => {
  event.preventDefault();
  const scoreForm = event.currentTarget;
  try {
    const formData = new FormData(scoreForm);
    scoreForm.reset();
    const responseData = await postFormDataAsJson({ url, formData });
    return responseData;
  } catch (error) {
    return error;
  }
};

export {
  handleScoreFormSubmit, postFormDataAsJson,
};