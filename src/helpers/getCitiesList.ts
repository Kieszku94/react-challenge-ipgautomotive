import { toPascalCase } from "./toPascalCase";

export const getCitiesList = (textboxValue: string): string[] => {
  let citiesList = textboxValue.split(",");
  for (let i = 0; i < citiesList.length; i++) {
    citiesList[i] = citiesList[i].trim();
    citiesList[i] = toPascalCase(citiesList[i]);
    console.log(citiesList[i]);
  }
  return citiesList;
};
