const validate = (characterForm) => {
  const errorFormHandler = {
    hasError: false,
  };
  if (isEmpty(characterForm.firstName)) {
    errorFormHandler.hasError = true;
    errorFormHandler.firstName = "* First name is invalid";
  }
  if (isEmpty(characterForm.lastName)) {
    errorFormHandler.hasError = true;
    errorFormHandler.lastName = "* Last name is invalid";
  }
  if (isEmpty(characterForm.race)) {
    errorFormHandler.hasError = true;
    errorFormHandler.race = "* Race is invalid";
  }
  return errorFormHandler;
};

const isEmpty = (value) => {
  return (
    value == null || (typeof value === "string" && value.trim().length === 0)
  );
};

const CharacterFormValidator = {
  validate,
};

export default CharacterFormValidator;
