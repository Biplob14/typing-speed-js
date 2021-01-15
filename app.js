const textWrap = document.querySelector('.textWrap');
const textArea = document.querySelector('#text-area');
const originText = document.querySelector('#origin-text p').innerHTML;
const resetButton = document.querySelector('#reset');
const theTimer = document.querySelector('.timer');


// spell check with comparison
function spellCheck() {
    let textEntered = textArea.value;

    console.log(textEntered);
}

// timer activity
function start() {
   let textEnteredLength = textArea.value.length;
   
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