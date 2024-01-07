//your JS code here. If required.
document.addEventListener('DOMContentLoaded', function () {
  const addButton = document.getElementById('add-button');
  const clearButton = document.getElementById('clear-button');
  const successRadio = document.getElementById('success');
  const errorRadio = document.getElementById('error');
  const messageTextarea = document.getElementById('message-content');
  const durationInput = document.getElementById('duration');
  const cancelableCheckbox = document.getElementById('cancelable');
  const toastsContainer = document.getElementById('toasts');

  addButton.addEventListener('click', createToast);
  clearButton.addEventListener('click', clearToasts);

  function createToast() {
    const toast = document.createElement('div');
    toast.classList.add('toast');
    const messageParagraph = document.createElement('p');
    messageParagraph.classList.add('message');
    const cancelButton = document.createElement('button');
    cancelButton.classList.add('cancel-button');
    cancelButton.textContent = 'X';

    if (successRadio.checked) {
      toast.classList.add('success-toast');
    } else if (errorRadio.checked) {
      toast.classList.add('error-toast');
    }

    const messageContent = messageTextarea.value.trim() || (successRadio.checked ? 'Success!' : 'Error.');
    messageParagraph.textContent = messageContent;

    toast.appendChild(messageParagraph);

    if (cancelableCheckbox.checked) {
      toast.appendChild(cancelButton);
      cancelButton.addEventListener('click', () => removeToast(toast));
    }

    toastsContainer.insertBefore(toast, toastsContainer.firstChild);

    const duration = parseInt(durationInput.value);
    setTimeout(() => {
      removeToast(toast);
    }, isNaN(duration) || duration < 500 ? 500 : duration);
  }

  function removeToast(toast) {
    toastsContainer.removeChild(toast);
  }

  function clearToasts() {
    toastsContainer.innerHTML = '';
  }
});

