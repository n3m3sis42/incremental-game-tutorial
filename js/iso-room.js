// TODO fix this so volume drops to 0 in between button clicks

// Scream Volume in Decibels:
// 30 db - whisper/croak
// 88-90 db - scream
// 120 db - loudest scream on record
// 70 db - normal voice
//
// Scream volume range peaks at 200 screams
// After that, you start losing your voice and struggling automatically

// Since screams are needed to get the full story, we probably need to disable the Struggle button if not enough screams have happened yet
// I think first 0-5 struggles do nothing and then button is disabled until there are enough screams? Idk

function getScreamVolume() {
  switch (true) {
    case screams === 0:
      return 30;
    case screams < 20:
      return randomIntBetween(88, 91);
    case screams < 100:
      return randomIntBetween(88, 110);
    case screams < 200:
      return randomIntBetween(100, 115);
    case screams < 500:
      return randomIntBetween(70, 105);
    case screams < 1000:
      return randomIntBetween(30, 90);
    default:
      return randomIntBetween(88, 91);
  }
}

function screamClick(number) {
    volume = getScreamVolume();
    const text = getLogText("scream", screams);
    const nextUpgrade = Math.floor(screams/100);

    screams += number;
    document.getElementById("screams").innerHTML = screams;
    document.getElementById("volume").innerHTML = volume;

    if (screams < 100) {
      writeToLog(text);
    }

    if (screams === 75) {
      setLocation("Iso Room");
    }

    if (screams >= 100 && screamCursor < nextUpgrade) {
      screamCursor += 1;
      writeToLog(getLogText("scream", nextUpgrade * 100));
    }

    if (screams === 200 && bondIntegrity === 100) {
      // writeToLog("Must've squirmed ");
      // attemptsToMove = 49;
      // struggleClick(1);
    }

};

function getBondIntegrity() {

}

function struggleClick(number) {
  // NOTE if you've screamed enough to start losing your voice, you have to struggle less to loosen your bonds
  const text = getLogText("struggle", 0);

  attemptsToMove += number;
  document.getElementById("attempts-to-move").innerHTML = attemptsToMove;
  writeToLog(text);
};
