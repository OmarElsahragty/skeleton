export const ObjectUndefinedRemoval = (object) =>
  JSON.parse(JSON.stringify(object));

export const fieldConditionalAddition = (fieldsArray, check, fieldName) => {
  if (check) return fieldsArray;
  return [...fieldsArray, fieldName];
};
