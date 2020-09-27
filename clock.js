const clockContainer = document.querySelector(".js-clock");
const clockTitle = clockContainer.querySelector("h1");

function getTime() {
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  let seconds = date.getSeconds();

  clockTitle.innerHTML = `${hours > 9 ? hours : `0${hours}`} : ${
    minutes < 10 ? `0${minutes}` : minutes
  } : ${seconds > 9 ? seconds : `0${seconds}`}`;
}
function init() {
  getTime();
  setInterval(getTime, 1000);
}

init();
