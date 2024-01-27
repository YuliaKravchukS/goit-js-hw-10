'use strict'


import iziToast from "izitoast";

import "izitoast/dist/css/iziToast.min.css";

const btnCreate = document.querySelector('button');

const form = document.querySelector('.form')
const radioButtons = form.querySelectorAll('input[type="radio"][name="state"]');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(e) {
  e.preventDefault();
  const inputDelay = document.querySelector('input[name="delay"]');
  const inputDelayValue = parseInt(inputDelay.value);
  const obj = {
    value: '',
    delay: inputDelayValue,
    shouldResolve: form.querySelector('input[name="state"]:checked').value,
};

makePromise(obj)
  .then(value =>
    iziToast.success({
        title: '',
        message: value,
    })) 
  .catch(error =>
    iziToast.error({
    title: '',
    message: error,
    }));
}


const makePromise = ({ value, delay, shouldResolve }) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve === 'fulfilled') {
        resolve(`✅ Fulfilled promise in ${delay}ms`);
      } else {
        reject(`❌ Rejected promise in ${delay}ms`);
      }
    }, delay);
  });
};
