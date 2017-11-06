var screams = 0;
var screamCursor = 0;
var volume = 30;

var attemptsToMove = 0;
var struggleCursor = 0;
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
    case screams < 1000:
      return randomIntBetween(30, 90);
    default:
      return randomIntBetween(88, 91);
  }
}

function getScreamLogText() {
  switch (screams) {
    case 1:
      return "Try to scream. It doesn't really work, just makes this creak like rusty hinges.";
    case 2:
      return "Clear my throat and try again. Kinda hurts, but it works okay this time. It echoes in the empty room and slowly fades away.";
    case 25:
      return "Keep screaming and it sounds like sirens, kinda, reverberating off those blank white walls...";
    case 30:
      return "Sirens, hm... Reminds me of -- ";
    case 35:
      return "A voice breaks through my thoughts, and I go silent. Can't make out what it's saying, though. I crane my neck and look around, but no one's there.";
    case 50:
      return "Voice speaks again from nowhere, 'No one's coming.'";
    case 75:
      return "'You might as well give up now,' says the disembodied voice. 'The iso rooms are soundproof anyway.'";
    case 100:
      return "Gonna show that fucking voice.";
    case 150:
      return "Still hear the disembodied voice, even over mine. Do my best to drown it out.";
    case 200:
      return "My own voice cracks, but I keep screaming anyway.";
    case 500:
      return "Can't really scream, can't even do much more than squeak now half the time. Can't stop myself from trying all the same.";
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

    if (screams === 75) {
      setLocation("Iso Room");
    }

    if (screams >= 100 && screams % 100 === 0) {
      screamCursor += 1;
    }

    if (screams === 200 && bondIntegrity === 100) {
      // writeToLog("Must've squirmed ");
      // attemptsToMove = 49;
      // struggleClick(1);
    }
};

function getStruggleLogText() {

}

function getBondIntegrity() {

}

function struggleClick(number) {
  // NOTE if you've screamed enough to start losing your voice, you have to struggle less to loosen your bonds
  attemptsToMove += number;
  document.getElementById("attempts-to-move").innerHTML = attemptsToMove;
};
