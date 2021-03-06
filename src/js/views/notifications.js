function getContainer() {
  return document.querySelector('.notify-container');
}

function alertTemplate(msg, className, index) {
  return `
    <div class="alert ${className}" data-index="${index}">${msg}</div>
  `;
}

function getAlertIndex() {
  return document.querySelectorAll('.notify-container .alert').length;
}

function notifyContainerTemplate() {
  return `
    <div class="notify-container" style="position: fixed; top: 20px; left: 20px; z-index: 9;"></div>
  `;
}

function creatNotifyContainer() {
  const template = notifyContainerTemplate();
  document.body.insertAdjacentHTML('afterbegin', template);
}

function notify({ msg = 'Info message', className = 'alert-info', timeout = 5000} = {}) {
  if (!getContainer()) {
    creatNotifyContainer();
  }

  const index = getAlertIndex();
  const template = alertTemplate(msg, className, index);
  const container = getContainer();

  container.insertAdjacentHTML('beforeend', template);

  setTimeout(() => closeNotify(index), timeout);
}

function closeNotify(index) {
  let alert;

  if (index === undefined) {
    alert = document.querySelector('.notify-container .alert');
  } else {
    alert = document.querySelector(`.notify-container .alert[data-index="${index}"]`);
  }

  if (!alert) {
    console.warn('Alert not found');
    return;
  }

  const container = getContainer();
  container.removeChild(alert);
}

export default notify;