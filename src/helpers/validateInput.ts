const validCityRegex =
  /^([a-zA-Z\u0080-\u024F]+(?:. |-| |'))*[a-zA-Z\u0080-\u024F]*$/;

export const validateInput = (textboxValue: string): boolean => {
  if (validCityRegex.test(textboxValue) === false) return false;
  if (textboxValue.includes(",")) return false;
  return true;
};
