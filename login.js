const loginForm = document.querySelector("#form-login");
const loginInput = document.querySelector("#form-login input");

const loginName = document.querySelector("#loginname");
const loginNameSpan = document.querySelector("#loginname span");

const KEY_USERNAME = 'username';
const CLASS_HIDDEN = 'hidden';

function login(event) {
    event.preventDefault();
    const username = loginInput.value;
    localStorage.setItem(KEY_USERNAME, username);

    displayLoginname(username);
}

function displayLoginname(pUsername) {
    loginForm.classList.add(CLASS_HIDDEN);
    loginName.classList.remove(CLASS_HIDDEN);
    loginNameSpan.innerHTML = `${pUsername}`;

    const todoForm = document.querySelector("#form-todo");
    todoForm.classList.remove(CLASS_HIDDEN);
}

const savedUsername = localStorage.getItem(KEY_USERNAME);

if (savedUsername === null) {
    loginForm.classList.remove(CLASS_HIDDEN);
    loginForm.addEventListener("submit",login);

}
else {
    displayLoginname(savedUsername);
}
