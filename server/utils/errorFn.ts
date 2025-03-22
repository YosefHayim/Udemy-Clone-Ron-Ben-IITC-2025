const createError = (message: string) => {
  const error = new Error(message);
  return error;
};

export default createError;
