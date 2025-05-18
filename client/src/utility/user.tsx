export const toTitleCase = (str: string) =>
  str
    .replace(/[_\-]+/g, " ")
    .replace(
      /\w\S*/g,
      (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
    );
