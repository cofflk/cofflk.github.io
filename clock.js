const div = document.querySelector("#timer");

function getTime() {
    const today = new Date();
    const hour = today.getHours() < 10 ? `0${today.getHours()}` : today.getHours();
    const min = today.getMinutes() < 10 ? `0${today.getMinutes()}` : today.getMinutes();
    const sec = today.getSeconds() < 10 ? `0${today.getSeconds()}` : today.getSeconds();
    div.innerHTML = `${hour}:${min}:${sec}`;
}

getTime();
setInterval(getTime, 1000);