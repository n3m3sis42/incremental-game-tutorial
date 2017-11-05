var screams = 0;
var volume = 30;
var bondIntegrity = 100;

// TODO fix this so volume drops to 0 in between button clicks

// Scream Volume in Decibels:
// 30 db - whisper/croak
// 88-90 db - scream
// 120 db - loudest scream on record
// 70 db - normal voice
//
// Scream volume range peaks at 200 screams
// After that, you start losing your voice and struggling automatically

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
    default:
      return randomIntBetween(88, 91);
  }
}

function getScreamLogText() {
  switch(screams) {
    case 1:
      return "Try to scream, doesn't really work. Only sound's this creak like rusty hinges.";
    case 2:
      return "Clear my throat and try again. Kinda hurts, but works okay this time. It echoes in the empty room and slowly fades away.";
    case 50:
      return "Hear a voice say, 'No one's coming.'"
    default:
     return "";
  }
}

function screamClick(number) {
    volume = getScreamVolume();
    screams += number;
    document.getElementById("screams").innerHTML = screams;
    document.getElementById("volume").innerHTML = volume;
    writeToLog(getScreamLogText());
};

function struggleClick(number) {
  // NOTE if you've screamed enough to start losing your voice, you have to struggle less to loosen your bonds
};
