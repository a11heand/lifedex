// filename: musicGenerator.js

/**
 * This code generates a random melody using JavaScript.
 * It plays the generated melody using the Web Audio API.
 */

// Define the range of notes and their corresponding frequencies
const notes = {
  'C': 261.63,
  'D': 293.66,
  'E': 329.63,
  'F': 349.23,
  'G': 392.00,
  'A': 440.00,
  'B': 493.88
};

// Generate a random melody consisting of 10 notes
const generateMelody = () => {
  const melody = [];
  const keys = Object.keys(notes);

  for (let i = 0; i < 10; i++) {
    const randomIndex = Math.floor(Math.random() * keys.length);
    melody.push(keys[randomIndex]);
  }

  return melody;
};

// Play the melody using the Web Audio API
const playMelody = (melody) => {
  const AudioContext = window.AudioContext || window.webkitAudioContext;
  const audioContext = new AudioContext();
  const tempo = 0.5; // Speed of each note in seconds

  melody.forEach((note, index) => {
    const oscillator = audioContext.createOscillator();
    oscillator.frequency.value = notes[note];
    oscillator.connect(audioContext.destination);
    oscillator.start(index * tempo);
    oscillator.stop((index + 1) * tempo);
  });
};

// Generate a random melody and play it
const melody = generateMelody();
playMelody(melody);
