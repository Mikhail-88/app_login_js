function showLoader() {
  document.body.insertAdjacentHTML('afterbegin', `
    <div class="progress">
      <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style="width: 75%"></div>
    </div>
  `);
}

function removePreloader() {
  const loader = document.querySelector('.progress');

  if (loader) {
    loader.remove();
  }
}

export { showLoader, removePreloader };