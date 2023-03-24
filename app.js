const mail = document.querySelector('#email');
const form = document.forms['form-contact'];
const errorIcon = document.querySelector('.error-icon');

let tabError = [];

const setError = (field, name, message) => {
    const errorMessage = field.nextElementSibling;
    if (errorMessage && errorMessage.classList.contains('error-message')) {
      errorMessage.remove();
    }
  
    if (message) {
      field.classList.add('error');
      field.insertAdjacentHTML('afterend', `<span class="error-message">${name} ${message}</span>`);
    } else {
      field.classList.remove('error');
    }
  }


form.addEventListener('submit', (e) => {
    checkForm(e);
})

const checkForm = (e) => {
    
    for (objetForm of form) {
        let value = objetForm.value;
        let name = objetForm.name;

        if (objetForm === mail) {
            const validMail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

            if (!validMail.test(mail.value)) {
                tabError.push("Looks like this is not an email");
                mail.classList.add('error');
                if (!mail.nextElementSibling.classList.contains('error-message')) {
                    mail.insertAdjacentHTML('afterend', '<span class="error-message">Looks like this is not an email</span>');
                }
                mail.setAttribute('placeholder', 'email@exemple.com');
            } else {
                mail.classList.remove('error');
                const errorMessage = mail.nextElementSibling;
                if (errorMessage && errorMessage.classList.contains('error-message')) {
                    errorMessage.remove();
                }
            }
        } else if (value === '') {
            tabError.push(name + ' cannot be empty');
            objetForm.classList.add("error");
            if (!objetForm.nextElementSibling.classList.contains('error-message')) {
                objetForm.insertAdjacentHTML('afterend', `<span class="error-message">${name} cannot be empty</span>`);
            }
        } else {
            objetForm.classList.remove("error");
            const errorMessage = objetForm.nextElementSibling;
            if (errorMessage && errorMessage.classList.contains('error-message')) {
                errorMessage.remove();
            }
        }
    }

    if (tabError.length > 0) {
        errorIcon.style.display = 'block';
        e.preventDefault();
    } else {
        errorIcon.style.display = 'none';
    }
}
