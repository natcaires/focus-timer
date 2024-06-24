import state from './state.js';
import * as timer from './timer.js';
import * as el from './elements.js';
import * as events from './events.js';
import * as sounds from './sounds.js';

export function toggleRunning() {
  state.isRunning = document.documentElement.classList.toggle('running');

  timer.countdown();

  sounds.buttonPressAudio.play();
}

export function reset() {
  state.isRunning = false;
  document.documentElement.classList.remove('running');
  timer.updateDisplay();

  sounds.buttonPressAudio.play();
}

export function set() {
  el.minutes.setAttribute('contenteditable', true);
  el.minutes.focus();

  el.seconds.setAttribute('contenteditable', true);
  // console.log('SET FUNC - EVENTS: ', events)
  // el.seconds.addEventListener('click', events.setSeconds);
  el.seconds.addEventListener('focus', events.setSeconds);
  el.seconds.addEventListener('blur', events.setSecondsBlur);
}

export function toggleSong() {
  state.isMute = document.documentElement.classList.toggle('song-on');

  if (state.isMute) {
    sounds.bgAudio.play();
    return
  }

  sounds.bgAudio.pause();
}

