const hostName = 'https://contacts-api-learn.herokuapp.com/api/contacts';

export const request = async (method = 'GET', body = null) => {
  const data = await fetch(`${hostName}`, {
    method,
    body,
  });
  const result = await data.json();

  if (!data.ok) {
    throw new Error(result.info);
  }
  return result;
};
