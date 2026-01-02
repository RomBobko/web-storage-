const form = document.querySelector('#contactForm');
const status = document.querySelector('#status');
const clearBtn = document.querySelector('#clear');

const STORAGE_KEY = 'contact-form-data';

const savedData = localStorage.getItem(STORAGE_KEY);

if (savedData) {
  const data = JSON.parse(savedData);

  form.elements.name.value = data.name;
  form.elements.email.value = data.email;
  form.elements.message.value = data.message;

  status.textContent = 'Дані відновлено';
}

form.addEventListener('submit', e => {
  e.preventDefault();

  const name = form.elements.name.value;
  const email = form.elements.email.value;
  const message = form.elements.message.value;

  const data = {
    name,
    email,
    message,
  };

  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
});

clearBtn.addEventListener('click', () => {
  localStorage.removeItem(STORAGE_KEY);
  form.reset();
  status.textContent = '';
});
