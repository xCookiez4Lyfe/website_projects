//define functions

const clearName = function (event) {
    console.log(username.id, username.value);
    username.value = username.defaultValue;
  }

const remainingCharacters = function (event) {
let element = event.currentTarget;
console.log(element.id, element.value);
let remain = element.maxLength - element.value.length;
if (remain == 1) {
    remainingOutput.value = remain + ' character left';
} 
else {
    remainingOutput.value = remain + ' characters left';
}
}

const checkForm = function (event) {
    event.preventDefault();
    if (username.value === "") {
        error.classList.add('show');
        username.focus();
    }
    else {
        submitButton.onclick = ()=>{
            scale.style.display = "none"
            submission.style.display = "block"
            error.classList.remove('show');
        
        }
    }
};

//define variables

let form = document.querySelector('.carrots form');
let error = document.querySelector('#error')
let clearButton = document.querySelector('.carrots form p #clearButton');
let textarea = document.querySelector('.carrots form textarea');
let remainingOutput = document.querySelector('.carrots form #remainingOutput');
let submitButton = document.querySelector(".submit-button");
let submission = document.querySelector(".submission");
let scale = document.querySelector(".carrots");

//script initialisation

textarea.addEventListener('input', remainingCharacters);

clearButton.addEventListener('click', clearName);

form.addEventListener('submit', checkForm );