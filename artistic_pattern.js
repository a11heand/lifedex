/**
 * Filename: artistic_pattern.js
 * 
 * This code generates an artistic pattern using ASCII characters. 
 * The pattern resembles a wave and can be customized by adjusting the parameters.
 * 
 * To execute this code, simply run the entire script in a JavaScript environment.
 */

const numRows = 10; // Number of rows in the pattern
const patternWidth = 30; // Width of the pattern in characters
const waveOffset = 2; // Controls the horizontal offset for the wave effect
const waveHeight = 4; // Controls the vertical height of the wave

// Calculates the pattern element at the given row and column index
function calculatePatternElement(row, col) {
  const positionInWave = (waveOffset + col) % (waveHeight * 2);
  const distanceFromMid = Math.abs(waveHeight - 1 - positionInWave);
  return (distanceFromMid === row) ? "*" : " ";
}

// Generate and print the pattern
for (let i = 0; i < numRows; i++) {
  let patternRow = "";
  for (let j = 0; j < patternWidth; j++) {
    patternRow += calculatePatternElement(i, j);
  }
  console.log(patternRow);
}