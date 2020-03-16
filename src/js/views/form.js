function inputErrorTemplate(msg) {
  return `
    <div class="invalid-feedback">${msg}</div>
  `;
}

function showInputError(el) {
  const parent = el.parentElement;
  const msg = el.dataset.invalidMessage || 'Invalid text';
  const template = inputErrorTemplate(msg);

  el.classList.add('is-invalid');
  parent.insertAdjacentHTML('beforeend', template);
}

function removeInputError(el) {
  const parent = el.parentElement;
  const err = parent.querySelector('.invalid-feedback');

  if (!err) return;

  el.classList.remove('is-invalid');
  parent.removeChild(err);
}

export { showInputError, removeInputError };