class Validate {
    constructor() {
        this.form = 'j-form';
        this.name = 'j-name';
        this.email = 'j-email';
        this.text = 'j-text';
        this.btn = 'j-submit-btn';
        this.block = 'j-block';
        this.errorBlock = 'j-error-block';

        this.errorClass = 'has-error';

        this.emptyErrorMessage = 'Поле не может быть пустым';
        this.incorrectEmailMessage = 'Некорректный email адрес';

        this.isFieldCorrect = {
            name: false,
            email: false,
            text: false
        };
    }

    init() {
        this._initElements();
        this._bindEvents();
    }

    _initElements() {
        this.$form = document.querySelector(`.${this.form}`);
        this.$btn = this.$form.querySelector(`.${this.btn}`);
        this.$name = this.$form.querySelector(`.${this.name}`);
        this.$inputName = this.$name.querySelector('input');
        this.$email = this.$form.querySelector(`.${this.email}`);
        this.$inputEmail = this.$email.querySelector('input');
        this.$textarea = this.$form.querySelector(`.${this.text}`);
        this.$inputTextarea = this.$textarea.querySelector('textarea');
    }

    _bindEvents() {
        this.$btn.addEventListener('click', (event) => {
            event.preventDefault();

            const isFormFulFilled = this.checkForm();
            const name = this.$inputName.value;
            const mail = this.$inputEmail.value;
            const comment = this.$inputTextarea.value;

            let formData = new FormData();

            formData.append('name', name);
            formData.append('comment', comment);
            formData.append('to', mail);

            console.log(isFormFulFilled);
            if (isFormFulFilled) {
                fetch(`https://webdev-api.loftschool.com/sendmail`, {
                    method: 'POST',
                    body: formData
                }).then((response) => {
                    return response.json();
                }).then((info) => {
                    return info.message;
                }).then((message) => {
                    this.showModal(message);
                    this.clearForm();
                    this.$form.reset(message);
                }).catch(() => {
                    this.showModal('Что-то пошло не так...');
                })
            }
        });


        this.$inputName.addEventListener('change', (event) => {
            this.inputChangeHandler(event, 'name');
        });

        this.$inputEmail.addEventListener('change', (event) => {
            const isValidEmail = event.target.checkValidity();
            const emailStr = '^[-._a-zA-Za-яA-я0-9]{2,}@(?:[a-zA-Za-яА-Я0-9][-a-z-A-Z-a-я-А-Я0-9]+\\.)+[a-za-я]{2,6}$';
            const regEmail = new RegExp(emailStr, 'u');

            if (isValidEmail && regEmail.test(this.$inputEmail.value)) {
                this.inputChangeHandler(event, 'email');
            } else if (isValidEmail === false || regEmail.test(this.$inputEmail.value) === false) {
                this.showErrorMessage(event.target, this.incorrectEmailMessage);
            }

        });

        this.$inputTextarea.addEventListener('change', (event) => {
            this.inputChangeHandler(event, 'text');
        });

    }

    inputChangeHandler(event, inputName) {
        if (event.target.value.length) {
            this.isFieldCorrect[inputName] = true;
            this.removeErrorMessage(event.target);
        } else {
            this.isFieldCorrect[inputName] = false;
            this.showErrorMessage(event.target, this.emptyErrorMessage);
        }
    }

    checkForm() {
        let result = true;

        if (!this.isFieldCorrect.name) {
            this.showErrorMessage(this.$inputName, this.emptyErrorMessage);
        }

        if (!this.$inputEmail.value.length) {
            this.showErrorMessage(this.$inputEmail, this.emptyErrorMessage);
        }

        if (!this.isFieldCorrect.text) {
            this.showErrorMessage(this.$inputTextarea, this.emptyErrorMessage);
        }

        for (const field in this.isFieldCorrect) {
            if ({}.hasOwnProperty.call(this.isFieldCorrect, field) && this.isFieldCorrect[field] === false) {
                result = false;
                break;
            }
        }

        return result;
    }

    showErrorMessage(element, message) {
        const parentFormBlock = element.closest(`.${this.block}`);
        const messageEl = parentFormBlock.querySelector(`.${this.errorBlock}`);

        messageEl.innerText = '';
        messageEl.classList.add(this.errorClass);
        messageEl.innerText = message;
    }

    removeErrorMessage(element) {
        const el = element.closest(`.${this.block}`).querySelector(`.${this.errorBlock}`);
        el.classList.remove(this.errorClass);
    }

    showModal(message) {
        const body = document.querySelector('body');
        const popup = document.querySelector('.modal');
  
        popup.classList.add('modal--active');
        body.classList.add('active-popup');
        let popupContent = popup.querySelector('.modal__content');
        popupContent.innerText = message;
  
        const closePopupBtn = popup.querySelector('.modal__close');
  
        closePopupBtn.addEventListener('click', () => {
          popup.classList.remove('modal--active');
          body.classList.remove('active-popup');
        })
      }
      
      clearForm() {
        this.$inputName.value = '';
        this.$inputEmail.value = '';
        this.$inputTextarea.value = '';
      }

}

export default Validate;