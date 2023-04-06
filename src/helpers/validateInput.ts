const validCityRegex =
  /^([a-zA-Z\u0080-\u024F]+(?:. |-| |'))*[a-zA-Z\u0080-\u024F]*$/;

const specialCharactersRegex = /[`!@#$%^&*()_+=[\]{};'"\\|<>?~]/;

export const validateInput = (textboxValue: string): boolean => {
  if (validCityRegex.test(textboxValue) === false) return false;
  if (specialCharactersRegex.test(textboxValue)) return false;
  if (textboxValue.includes(",")) return false;
  return true;
};
