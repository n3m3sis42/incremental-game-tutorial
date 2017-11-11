/* PHASE 1 -- ISO ROOM */
var loc = "???";

var screams = 0;
var screamCursor = 0;
var volume = 30;

var attemptsToMove = 0;
var struggleCursor = 0;
var bondIntegrity = 100;

// TODO move log events for iso room into iso room code and make logEvents an empty array we initialize with events from each phase when it starts?

var logEvents = [
  /* ----- ISO ROOM - SCREAM-TRIGGERED ----- */
  {
    text: "Try to scream, can't seem to find my voice. Only sound's this creak like rusty hinges.",
    uses: 1,
    trigger: () => { return screams === 1 }
  },
  {
    text: "Clear my throat and try again. Works better this time, and I listen to it echo in the empty room and slowly fade away.",
    uses: 1,
    trigger: () => { return screams === 2 }
  },
  {
    text: "Keep screaming and it sounds like sirens, kinda, reverberating off those blank white walls...",
    uses: 1,
    trigger: () => { return screams === 25 }
  },
  {
    text: "Sirens, hm... Reminds me of -- ",
    uses: 1,
    trigger: () => { return screams === 30 }
  },
  {
    text: "Head starts to pound, can't hold a train of thought too well. Air feels viscous and it kinda hurts to breathe. I swallow hard, throat thick.",
    uses: 1,
    trigger: () => { return screams === 30 }
  },
  {
    text: "Sirens peal inside my skull, but I can't remember where I heard 'em. Can't remember where I was before I got here, either.",
    uses: 1,
    trigger: () => { return screams === 35 }
  },
  {
    text: "A voice speaks, low and icy. I go silent, strain to hear. Can't make out what it's saying, though. I crane my neck and look around, but no one's there.",
    uses: 1,
    trigger: () => { return screams === 50 }
  },
  {
    text: "'Didn't hear you,' I rasp out, but it doesn't speak again.",
    uses: 1,
    trigger: () => { return screams === 50 }
  },
  {
    text: "'Who are you?' I call out. 'How'd I get here?'",
    uses: 1,
    trigger: () => { return screams === 50 }
  },
  {
    text: "No one answers.",
    uses: 1,
    trigger: () => { return screams === 50 }
  },
  {
    text: "I screw my eyes shut, see my best friend's tear-streaked face. Hear him whisper, 'Sasha, please...'",
    uses: 1,
    trigger: () => { return screams === 60 }
  },
  {
    text: "My eyes fly open and I scream his name. Still can't remember anything, but something must've happened to him.",
    uses: 1,
    trigger: () => { return screams === 61 }
  },
  {
    text: "Voice speaks up again, so cold and clear: 'He isn't real, you know.'",
    uses: 1,
    trigger: () => { return screams === 65 }
  },
  {
    text: "I whip my head around, look for speakers on the walls and ceilings. Don't see anything but white on white on white.",
    uses: 1,
    trigger: () => { return screams === 65 }
  },
  {
    text: "'No one's coming,' says the disembodied voice.",
    uses: 1,
    trigger: () => { return screams === 75 }
  },
  {
    text: "'You might as well give up now,' says the  voice. 'The iso rooms are soundproof anyway.'",
    uses: 1,
    trigger: () => { return screams === 95 }
  },
  {
    text: "I ask it how it knows I haven't given up already, then. Doesn't fucking answer, though.",
    uses: 1,
    trigger: () => { return screams === 95 }
  },
  {
    text: "Gonna show that fucking voice.",
    uses: 1,
    trigger: () => { return screams === 100 }
  },
  {
    text: "Voice gets louder, more insistent, but I do my best to drown it out.",
    uses: 1,
    trigger: () => { return screams === 150 }
  },
  {
    text: "My voice cracks, still keep screaming anyway.",
    uses: 1,
    trigger: () => { return screams === 300 }
  },
  {
    text: "Can't really scream, can't even do much more than squeak now half the time. Can't stop myself from trying all the same.",
    uses: 1,
    trigger: () => { return screams === 500 }
  }
  /* ----- ISO ROOM - STRUGGLE-TRIGGERED ----- */
  {
    text: "Try to move, but nothing happens.",
    uses: null,
    trigger: () => { return attemptsToMove > 0 && attemptsToMove <= 5 }
  }
]

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
