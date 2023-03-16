import throttle from 'lodash.throttle';

const refs = {
    form:document.querySelector('.feedback-form'),
    textarea:document.querySelector('.feedback-form textarea'),
    input:document.querySelector('.feedback-form input'),
};

const formData = {};

refs.form.addEventListener('submit', onFormSubmit);

refs.form.addEventListener('input', throttle(elementsForSave, 500));

function elementsForSave (e) {

    formData[e.target.name] = e.target.value;

    localStorage.setItem('feedback-form-state', JSON.stringify(formData))

};

populateForm();
    
function populateForm() {

const localStorageObject = localStorage.getItem('feedback-form-state');   
    const savedObject = JSON.parse(localStorageObject);
       
        if (localStorageObject) {
        refs.textarea.value = savedObject.message;
        refs.input.value = savedObject.email;
        }
    };
    
function onFormSubmit(evt) {

    evt.preventDefault();

    console.log(formData);

    evt.currentTarget.reset();    

    localStorage.removeItem('feedback-form-state');   
}



