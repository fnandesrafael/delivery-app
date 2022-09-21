const throwCustomError = (errorName, errorMessage) => {
  const error = new Error(errorMessage);
  error.name = errorName;
  error.message = errorMessage;
  throw error;
};

module.exports = { throwCustomError };
