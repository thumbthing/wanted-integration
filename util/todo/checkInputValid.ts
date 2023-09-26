export const checkEmailValid = (input: string) => {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const isValid = emailRegex.test(input);
  return isValid;
};

export const checkPasswordValid = (input: string) => {
  const passwordLength = 8;
  const isValid = input.length >= passwordLength;
  return isValid;
};
