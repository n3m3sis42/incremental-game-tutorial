var screams = 0;
var volume = 30;
var bondIntegrity = 100;

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

function screamClick(number) {
    volume = getScreamVolume();
    screams += number;
    document.getElementById("screams").innerHTML = screams;
    document.getElementById("volume").innerHTML = volume;
    writeToLog("testing")
    // NOTE make volume go to zero in between button clicks
    // also after scream volume reaches a certain point, screaming becomes automatic
};

function struggleClick(number) {
  // NOTE if you've screamed enough to start losing your voice, you have to struggle less to loosen your bonds
};
