document.body.onload = setLocation(loc);

function setLocation(locName) {
  loc = locName;
  document.getElementById("location").innerHTML = loc;
  document.querySelector('.active a').innerHTML = loc;
}

function getLogText(action, number) {
  return logText[action][number] || "";
}

function writeToLog(text) {
    if (text === "") return;

    const logs = document.getElementById("game-log");
    const logEntry = document.createElement("div");
    logEntry.innerHTML = `<p>${text}</p>`;

    logs.insertBefore(logEntry, logs.firstChild);
}

function disable(elementId) {
      document.getElementById(elementId).classList.add('disabled');
}

window.setInterval(function(){
  if (screamCursor > 0 && screams < 1000) screamClick(screamCursor);
  if (screams >= 1000) disable("scream-btn");

}, 1000);
