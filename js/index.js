var loc = "";
document.body.onload = setLocation(loc = "???");

function setLocation(locName) {
  loc = locName;
  document.getElementById("location").innerHTML = loc;
  document.querySelector('.active a').innerHTML = loc;
}

function writeToLog(text) {
    if (text === "") return;

    const logs = document.getElementById("game-log");
    const logEntry = document.createElement("div");
    logEntry.innerHTML = `<p>${text}</p>`;

    logs.insertBefore(logEntry, logs.firstChild);
}

window.setInterval(function(){
  if (screamCursor > 0) screamClick(screamCursor);
}, 1000);
