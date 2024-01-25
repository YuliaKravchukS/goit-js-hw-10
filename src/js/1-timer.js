'use strict'

import flatpickr from "flatpickr";

import "flatpickr/dist/flatpickr.min.css";

// const input = document.querySelector('#datetime-picker');
const button = document.querySelector('[data-start]');
const timer = document.querySelector('.timer');
const valueDays = document.querySelector('[data-days]');
const valueHours = document.querySelector('[data-hours]');
const valueMinutes = document.querySelector('[data-minutes]');
const valueSeconds = document.querySelector('[data-seconds]');

button.addEventListener('click', onButtonClick);

let userSelectedDate = '';

function onButtonClick() {
    

    
    if (userSelectedDate < options.defaultDate) {
        button.setAttribute("disabled", true)
    } else {
        button.setAttribute("disabled", false)
    }
};

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
  },
};

    const fp = flatpickr("#datetime-picker", options);

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function tickTack({ days, hours, minutes, seconds }) {
    valueDays.textContent = `${addLeadingZero(days)}`;
    valueHours.textContent = `${addLeadingZero(hours)}`;
    valueMinutes.textContent = `${addLeadingZero(minutes)}`;
    valueSeconds.textContent = `${addLeadingZero(seconds)}`;
};


function addLeadingZero(num) {
    num.toString().padStart(2, '0')
};