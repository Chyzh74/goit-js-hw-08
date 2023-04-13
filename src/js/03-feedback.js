import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const emailInput = document.querySelector('.feedback-form input');
const messageInput = document.querySelector('.feedback-form textarea');

const STORAGE_KEY = 'feedback-form-state';

const savedData = localStorage.getItem(STORAGE_KEY);
const parseData = JSON.parse(savedData);
let formData = {};

form.addEventListener("submit", onFormSubmit);
form.addEventListener("input", throttle(onTextareaInput, 500));

fillTextarea();

function onTextareaInput(evt) {
  formData[evt.target.name] = evt.target.value;

  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function onFormSubmit(evt) {
  evt.preventDefault();

  if (emailInput.value === "" || messageInput.value === "") {
    return alert('Заповніть порожнє поле');
  }
  
  console.log(formData);
  evt.target.reset();
  localStorage.removeItem(STORAGE_KEY);
}

function fillTextarea() {
  if (savedData) {
    parseData.email === undefined
      ? (emailInput.value = '')
      : (emailInput.value = parseData.email);
    parseData.message === undefined
      ? (messageInput.value = '')
      : (messageInput.value = parseData.message);

    formData = parseData;
  }
}

