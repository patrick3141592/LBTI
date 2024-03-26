const nameForm = document.querySelector(".js-nameForm"),
    nameInput = nameForm.querySelector("input"),
    sayHello = document.querySelector(".js-sayHello");

const SAVE_NAME = "userName",
    SHOWING_CLASS = "showing";

sessonStorage.setItem("username", SAVE_NAME);
var get_name = sessionStrage.getItem("username");

function saveName(text){
    localStorage.setItem(SAVE_NAME, text);
}

function askForName(){
    nameForm.classList.add(SHOWING_CLASS);
    nameForm.addEventListener("submit",writeSubmit);
}

function helloUser(text){
    nameForm.classList.remove(SHOWING_CLASS);
    sayHello.classList.add(SHOWING_CLASS);
    sayHello.innerText = 'Hello ${text}';
}

function writeSubmit(event){
    event.preventDefault();
    const userValue = nameInput.value;
    helloUser(userValue);
    saveName(userValue);
}

function submitName(){
    const nowUser = localStorage.getItem(SAVE_NAME);
    if (nowUser === null){
        askForName();
    } else {
        helloUser(nowUser);
    }
}

function init(){
    submitName();
}

init();