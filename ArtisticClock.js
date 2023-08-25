/*
Filename: ArtisticClock.js
Content: This code generates an artistic representation of a clock, displaying the current time using ASCII characters.
*/

function generateClock() {
  const clock = [
    "        .-^-.",
    "       /_/_/",
    "     .'_____'.",
    "    /\\     /\\",
    "   /  '. .'  \\",
    "  |    | |    |",
    "  '-.__|_|__.-'"
  ];

  const hours = new Date().getHours();
  const minutes = new Date().getMinutes();
  const seconds = new Date().getSeconds();

  const timeStr = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

  clock[4] = clock[4].split('|').join(timeStr.charAt(0));
  clock[5] = clock[5].split('|').join(timeStr.charAt(1));
  clock[6] = clock[6].split('|').join(timeStr.charAt(3));
  clock[7] = clock[7].split('|').join(timeStr.charAt(4));

  for (let i = 0; i < clock.length; i++) {
    console.log(clock[i]);
  }
}

generateClock();