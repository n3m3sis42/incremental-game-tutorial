/* PHASE 1 -- ISO ROOM */
var loc = "???";

var screams = 0;
var screamCursor = 0;
var volume = 30;

var attemptsToMove = 0;
var struggleCursor = 0;
var bondIntegrity = 100;

var logText = {
  scream: {
    0: "Try to scream, can't seem to find my voice. Only sound's this creak like rusty hinges.",
    1: "Clear my throat and try again. Works better this time, and I listen to it echo in the empty room and slowly fade away.",
    25: "Keep screaming and it sounds like sirens, kinda, reverberating off those blank white walls...",
    30: "Sirens, hm... Reminds me of -- ",
    35: "A voice breaks through my thoughts, and I go silent. Can't make out what it's saying, though. I crane my neck and look around, but no one's there.",
    50: "Voice speaks again from nowhere, 'No one's coming.'",
    75: "'You might as well give up now,' says the disembodied voice. 'The iso rooms are soundproof anyway.'",
    100: "Gonna show that fucking voice.",
    200: "Still hear the disembodied voice, even over mine, but I do my best to drown it out.",
    300: "My voice cracks. Still keep screaming anyway.",
    500: "Can't really scream, can't even do much more than squeak now half the time. Can't stop myself from trying all the same."
  },
  struggle: {
    0: "Try to move, but nothing happens."
  }
}
