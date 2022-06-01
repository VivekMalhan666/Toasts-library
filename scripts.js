import Toast from './Toasts.js';

document.querySelector('button').addEventListener('click', () => {
  const toast = new Toast({ text: 'Hello' });
});
