const createError = (message: string, statusCode: number) => {
  const error = new Error(message);
  // error.status = statusCode;
  return error;
};

export default createError;
