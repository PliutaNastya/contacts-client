import { validateInput } from './validation.js';
import { renderItem } from './renders.js';
import { request } from './api.js';

document.addEventListener('DOMContentLoaded', async () => {
  const contacts = await request();
  const loading = document.querySelector('.loading');
  const form = document.querySelector('form');

  Object.values(contacts).forEach(renderItem);
  loading.remove();

  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const { target } = event;
    const body = new FormData(target);

    const isValid = [...form.elements]
      .filter((input) => input.tagName === 'INPUT')
      .every((input) => validateInput(input));

    try {
      if (isValid) {
        const contacts = await request('POST', body);
        renderItem(contacts);
        form.reset();
      }
    } catch (error) {
      console.log(error.message);
    }
  });
  form.addEventListener('change', ({ target }) => {
    validateInput(target);
  });
});
