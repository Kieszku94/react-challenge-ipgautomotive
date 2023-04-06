export const toPascalCase = (str: string) => {
  str = str.replace(/(\w)(\w*)/g, function (g0, g1, g2) {
    return g1.toUpperCase() + g2.toLowerCase();
  });
  return str;
};
