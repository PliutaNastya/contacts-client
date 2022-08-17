export const validateInput = (input) => {
  const { min, max } = input.dataset;

  const validationMessage = input.nextElementSibling;

  if (!input.value) {
    validationMessage.innerText = 'The field is required';
    return false;
  }
  if (input.value.length < min) {
    validationMessage.innerText = `Enter from ${min} to ${max} symbols`;
    return false;
  }
  if (input.value.length > max) {
    validationMessage.innerText = `Enter from ${min} to ${max} symbols`;
    return false;
  }
  validationMessage.innerText = '';
  return true;
};
