import { controls } from "./elements.js";
import state from './state.js';
import * as actions from './actions.js';
import * as el from './elements.js';
import { updateDisplay } from './timer.js';

export function registerControls() {
  controls.addEventListener('click', (event) => {
    const action = event.target.dataset.action;
    if(typeof actions[action] != "function") {
      return
    }

    actions[action]()
  })
}

export function setMinutes() {
  console.log('EL MINUTES: ', el);
  console.log('STATE MINUTES: ', state);
  el.minutes.addEventListener('focus', () => {
    el.minutes.textContent = "";
  })

  el.minutes.onkeypress = (event) => /\d/.test(event.key) //testando a tecla para ver se nao e numero, e so aceitando numeros
  el.minutes.addEventListener('blur', (event) => {
    let time = event.currentTarget.textContent;
    time = time > 60 ? 60 : time;

    state.minutes = time;
    
    updateDisplay();

    el.minutes.removeAttribute('contenteditable')
  })
}

export function setSeconds() {
  // console.log('EL SECONDS: ', el);
  // console.log('STATE SECONDS: ', state);
  // // el.seconds.focus();
  // // el.seconds.textContent = "";
  // el.seconds.addEventListener('focus', () => {
  //   el.seconds.textContent = "";
  // })

  el.seconds.textContent = "";

  // el.seconds.onkeypress = (event) => /\d/.test(event.key)
  // el.seconds.addEventListener('blur', (event) => {
  //   console.log('EVENT SECONDS: ', event);
  //   let sec = event.currentTarget.textContent;
  //   sec = sec > 60 ? 60 : sec;

  //   state.seconds = sec;
  // })
}

export function setSecondsBlur(event) {
  let sec = event.currentTarget.textContent;
  sec = sec > 60 ? 60 : sec;
  state.seconds = sec;
  updateDisplay();

  el.seconds.removeAttribute('contenteditable')
}