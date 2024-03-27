const nameForm = document.querySelector(".js-nameForm"),
    nameInput = nameForm.querySelector("input"),
    sayHello = document.querySelector(".js-sayHello");

const SAVE_NAME = "userName",
    SHOWING_CLASS = "showing";

import { begin } from './start.js';

function saveName(text){
    sessionStorage.setItem(SAVE_NAME, text);
    begin();
}

function loadName(){
    const currentUser = sessionStorage.getItem(SAVE_NAME);
    console.log("successfully load to currentUser");
    if (currentUser){
        console.log("hereee");
        //sayHello.innerText = 'Hi, ${currentUser}';
        sayHello.innerText = sessionStorage.getItem(SAVE_NAME);
        console.log(sayHello.innerText)
        sayHello.classList.add(SHOWING_CLASS);
    }
}

nameForm.addEventListener("submit",function(event){
    event.preventDefault();
    saveName(nameInput.value);
    loadName();
});

loadName();