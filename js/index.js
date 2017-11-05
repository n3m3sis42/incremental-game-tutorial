var loc = "???"

function setLocation() {

}

function writeToLog(text) {
    if (text === "") return;
    
    const logs = document.getElementById("game-log");
    const logEntry = document.createElement("div");
    logEntry.innerHTML = `<p>${text}</p>`;

    logs.insertBefore(logEntry, logs.firstChild);
}
