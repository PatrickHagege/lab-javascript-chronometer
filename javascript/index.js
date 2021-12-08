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
  if (!intervalId) {
    let intervalId = setInterval(() => {
      printMinutes();
      printSeconds();
  }, 1000);
  }
}

function printMinutes() {
  let mns = chronometer.computeTwoDigitNumber(chronometer.getMinutes());
  const minDecNumber = document.querySelector("span#minDec.number");
  const minUniNumber = document.querySelector("span#minUni.number");
  minDecNumber.textContent = mns[0];
  minUniNumber.textContent = mns[1];
}

function printSeconds() {
  let secs = chronometer.computeTwoDigitNumber(chronometer.getMinutes());
  const secDecNumber = document.querySelector("span#secDec.number");
  const secUniNumber = document.querySelector("span#secUni.number");
  secDecNumber.textContent = secs[0];
  secUniNumber.textContent = secs[1];
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  // ... your code goes here
}

function clearSplits() {
  // ... your code goes here
}

function setStopBtn() {
  btnLeftElement.classList.remove("start");
  btnLeftElement.classList.add("stop");
  btnLeftElement.textContent = "STOP";
  if (started) {
    
  }
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
    setSplitBtn();
    setStopBtn();
    printTime();
  } else {
    setResetBtn();
    setStartBtn();
  }
});

btnRightElement.addEventListener('click', () => {
  //
});
