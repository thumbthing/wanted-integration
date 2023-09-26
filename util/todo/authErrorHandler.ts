const authErrorHandler = (error: Error | unknown) => {
  const errorMessage = 'unknown error';

  if (error instanceof Error) {
    const occurredError = `error status : ${error.name}`;
    return occurredError;
  }
  return errorMessage;
};

export default authErrorHandler;
