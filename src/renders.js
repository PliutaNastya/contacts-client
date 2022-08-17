const list = document.querySelector('.contacts');

export const renderItem = ({ name, number }) => {
  const item = document.createElement('li');
  item.classList.add('contact');

  item.innerHTML = `
  <h2 class='contact__title'>
    ${name}
  </h2>
  <a href='tel:${number}'>${number}</a>
  </li>
  `;
  list.append(item);
};
