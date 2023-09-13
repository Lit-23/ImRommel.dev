const startBtn = document.querySelector('.js-start-button');
const resetBtn = document.querySelector('.js-reset-button');
//let [hours,minutes,seconds,centiseconds] = [0,0,0,0]; you can use this code as shorthand for the codes below
let hours = 0;
let minutes = 0;
let seconds = 0;
let centiseconds = 0;
let displayTime = document.querySelector('.js-display-timer');
let intervalId = null;

startBtn.addEventListener('click', () => {
  timer();
});
resetBtn.addEventListener('click', () => {
  resetTimer();
});

function stopWatch() {
  centiseconds++;
  if (centiseconds === 100) {
    centiseconds = 0;
    seconds++;
      if (seconds === 60) {
      seconds = 0;
      minutes++;
        if (minutes === 60) {
        minutes = 0;
        hours++;
      }
    }
  }
  // shorthand for the codes below
  //let h = hours.toString().padStart(2, '0');
  //let m = minutes.toString().padStart(2, '0');
  //let s = seconds.toString().padStart(2, '0');
  //let cs = centiseconds.toString().padStart(2, '0');
  let h = hours < 10 ? '0' + hours : hours;
  let m = minutes < 10 ? '0' + minutes : minutes;
  let s = seconds < 10 ? '0' + seconds : seconds;
  let cs = centiseconds < 10 ? '0' + centiseconds : centiseconds;

  displayTime.innerHTML = h +':'+ m +':'+ s +`<span class="html-ms">.${cs}</span>`;
}

function start() {
  intervalId = setInterval(stopWatch,10);
}

function pause() {
  clearInterval(intervalId);
}

function timer() {
  if(intervalId === null){
    start();
    startBtn.innerHTML = 'STOP';

  } else if(startBtn.innerHTML === 'STOP' && intervalId !== null){
    pause();
    startBtn.innerHTML = 'RESUME';

  } else if(startBtn.innerHTML === 'RESUME' && intervalId !== null){
    start();
    startBtn.innerHTML = 'STOP';
  }
}

function resetTimer() {
  startBtn.innerHTML = 'START';
  clearInterval(intervalId);
  intervalId = null;
  [hours,minutes,seconds,centiseconds] = [0,0,0,0];
  displayTime.innerHTML = '00:00:00<span class="html-ms">.00</span>';
}