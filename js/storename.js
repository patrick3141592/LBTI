const nameForm = document.querySelector(".js-nameForm"),
    nameInput = nameForm.querySelector("input"),
    sayHello = document.querySelector(".js-sayHello");

const SAVE_NAME = "userName",
    SHOWING_CLASS = "showing";

function saveName(text){
    sessionStorage.setItem(SAVE_NAME, text);
}

function loadName(){
    const currentUser = sessionStorage.getItem(SAVE_NAME);
    console.log("successfully load to currentUser");
    if (currentUser){
        console.log("hereee");
        //sayHello.innerText = 'Hi, ${currentUser}';
        sayHello.innerText = "플레이어" + sessionStorage.getItem(SAVE_NAME) + " 님은 ";
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