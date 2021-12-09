const chronometer = new Chronometer();

// get the buttons:
const btnLeftElement = document.getElementById('btnLeft');
const btnRightElement = document.getElementById('btnRight');

// get the DOM elements that will serve us to display the time:
const minDecElement = document.getElementById('minDec');
const minUniElement = document.getElementById('minUni');
const secDecElement = document.getElementById('secDec');
const secUniElement = document.getElementById('secUni');
const milDecElement = document.getElementById('milDec');
const milUniElement = document.getElementById('milUni');
const splitsElement = document.getElementById('splits');

function printTime() {
    setInterval(() => {
      printMinutes();
      printSeconds();
  }, 1000);
 
}

function printMinutes() {
  let mns = chronometer.computeTwoDigitNumber(chronometer.getMinutes());
  minDecElement.textContent = mns[0];
  minUniElement.textContent = mns[1];
}

function printSeconds() {
  let secs = chronometer.computeTwoDigitNumber(chronometer.getSeconds());
  secDecElement.textContent = secs[0];
  secUniElement.textContent = secs[1];
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  let listElement = document.createElement('li');
  listElement.textContent = `${minDecElement.textContent}${minUniElement.textContent}:${secDecElement.textContent}${secUniElement.textContent}`;
  splitsElement.appendChild(listElement);
}

function clearSplits() {
  // ... your code goes here
}

function setStopBtn() {
  btnLeftElement.classList.remove("start");
  btnLeftElement.classList.add("stop");
  btnLeftElement.textContent = "STOP";
}

function setSplitBtn() {
  btnRightElement.classList.remove("reset");
  btnRightElement.classList.add("split");
  btnRightElement.textContent = "SPLIT";
}

function setStartBtn() {
  btnLeftElement.classList.remove("stop");
  btnLeftElement.classList.add("start");
  btnLeftElement.textContent = "START";
}

function setResetBtn() {
  btnRightElement.classList.remove("split");
  btnRightElement.classList.add("reset");
  btnRightElement.textContent = "RESET";
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  if (btnLeftElement.classList.contains('start')) {
    chronometer.start();
    setSplitBtn();
    setStopBtn();
  } else {
    chronometer.stop();
    setResetBtn();
    setStartBtn();
  }
  printTime();
});

btnRightElement.addEventListener('click', () => {
  printSplit();
});
