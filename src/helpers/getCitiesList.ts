import { toPascalCase } from "./toPascalCase";

export const getCitiesList = (textboxValue: string) => {
  let citiesList = textboxValue.split(",");
  for (let i = 0; i < textboxValue.length; i++) {
    citiesList[i] = citiesList[i].trim();
    citiesList[i] = toPascalCase(citiesList[i]);
  }
  return citiesList;
};
