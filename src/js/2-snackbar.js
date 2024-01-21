'use scrict'


import iziToast from "izitoast";

import "izitoast/dist/css/iziToast.min.css";

const btnCreate = document.querySelector('button');
const inputDelay = document.querySelector('input[name="delay"]');
const form = document.querySelector('.form')
const radioButtons = form.querySelectorAll('input[type="radio"][name="state"]');
const inputDelayValue = parseInt(inputDelay.value);
form.addEventListener('submit', onFormSubmit);

function onFormSubmit(e) {
    e.preventDefault();
}
const obj = {
    value: '',
    delay: inputDelayValue,
    shouldResolve: radioButtons.value,
};

makePromise(obj)
    .then(value => iziToast.success({
        title: '',
        message: value,
    })) 
	.catch(error => iziToast.error({
    title: '',
    message: error,
    }));

const makePromise = ({ value, delay, shouldResolve }) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve === 'fulfilled') {
        value = `✅ Fulfilled promise in ${delay}ms`;
        resolve(value);
      } else {
        value = `❌ Rejected promise in ${delay}ms`;
        reject(value);
      }
    }, delay);
  });
};

