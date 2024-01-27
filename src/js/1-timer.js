
'use strict';

import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const button = document.querySelector('[data-start]');
const timer = document.querySelector('.timer');
const input = document.querySelector('#datetime-picker');
const valueDays = document.querySelector('[data-days]');
const valueHours = document.querySelector('[data-hours]');
const valueMinutes = document.querySelector('[data-minutes]');
const valueSeconds = document.querySelector('[data-seconds]');

let userSelectedDate = new Date('2020-01-24');
let diff = 0;
let intervalId;

button.disabled = true;

function onButtonClick() {
  diff = userSelectedDate.getTime() - new Date().getTime();
  if (diff >= 0) {
    button.disabled = false;
    intervalId = setInterval(() => {
      button.disabled = true;
      input.disabled = true;
      diff -= 1000;
      tickTack(convertMs(diff));
      if (diff < 1000) {
        clearInterval(intervalId);
      }
    }, 1000);
  }
}

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    userSelectedDate = selectedDates[0];
    if (userSelectedDate < Date.now()) {
      iziToast.show({
        message: 'Please choose a date in the future',
        messageColor: '#FFFFFF',
        backgroundColor: '#B51B1B',
        position: 'topRight',
      });
    } else {
      button.disabled = false;
    }
  },
 
};

flatpickr(input, options);

const convertMs = ms => {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
};

function tickTack({ days, hours, minutes, seconds }) {
  valueDays.textContent = `${addLeadingZero(days)}`;
  valueHours.textContent = `${addLeadingZero(hours)}`;
  valueMinutes.textContent = `${addLeadingZero(minutes)}`;
  valueSeconds.textContent = `${addLeadingZero(seconds)}`;
}

function addLeadingZero(num) {
  return num.toString().padStart(2, '0');
}


button.addEventListener('click', onButtonClick);

