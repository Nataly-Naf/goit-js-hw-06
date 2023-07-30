const formEl = document.querySelector('.login-form')
console.log(formEl)
formEl.addEventListener('submit', SubmitHandler);
function SubmitHandler(event) {
    event.preventDefault();
    const formElements = event.currentTarget.elements;
        const mail = formElements.email.value;
    console.log(mail)
    const password = formElements.password.value;
    if (password.length ===0 || mail.length ===0) {
       return alert('всі поля повинні бути заповнені')
    }
        const formData = { mail, password }
    console.log(formData);
    event.currentTarget.reset();
    
}