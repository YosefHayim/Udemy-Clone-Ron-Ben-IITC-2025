const createError = (message: string, statusCode: number) => {
  const error = new Error(message);
  return error;
};

export default createError;
