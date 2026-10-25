const dialog = document.querySelector('.photo-dialog');
const preview = dialog.querySelector('img');
const close = dialog.querySelector('.dialog-close');
let previousFocus;

if (typeof dialog.showModal === 'function') {
  document.querySelectorAll('.gallery a').forEach(link => {
    link.addEventListener('click', event => {
      event.preventDefault();
      previousFocus = link;
      preview.src = link.href;
      preview.alt = link.querySelector('img').alt;
      dialog.showModal();
      close.focus();
    });
  });
  close.addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', event => { if (event.target === dialog) dialog.close(); });
  dialog.addEventListener('close', () => previousFocus?.focus());
}
