const textWrap = document.querySelector('.textWrap');
const textArea = document.querySelector('#text-area');
const originText = document.querySelector('#origin-text p').innerHTML;
const resetButton = document.querySelector('#reset');
const theTimer = document.querySelector('.timer');
var timer = [0, 0, 0, 0];

// maintain two digits on timer output
function leadingZero(time) {
    if(time <= 9)
        time = '0' + time;

    return time;
}
// timer calculation
function runTimer() {
    let currentTime = leadingZero(timer[0]) + ":" + leadingZero(timer[1]) + ":" + leadingZero(timer[2]);
    theTimer.innerHTML = currentTime;
    timer[3]++;

    timer[0] = Math.floor((timer[3]/100)/60);
    timer[1] = Math.floor((timer[3]/100) - (timer[0] * 60));
    timer[2] = Math.floor(timer[3] - (timer[1] * 100) - (timer[0] * 6000));
}
// spell check with comparison
function spellCheck() {
    let textEntered = textArea.value;

    console.log(textEntered);
}

// timer activity
function start() {
   let textEnteredLength = textArea.value.length;
   if(textEnteredLength === 0) {
       setInterval(runTimer, 10);
   }
   
   console.log(textEnteredLength);
}
// Reset everything
function reset() {
    console.log('reset button pressed');
}
// event listeners for timer, spell check

// detect keyboard stroke
textArea.addEventListener('keypress', start, false);
// compare spellings 
textArea.addEventListener('keyup', spellCheck, false);
// reset button
resetButton.addEventListener('click', reset, false);