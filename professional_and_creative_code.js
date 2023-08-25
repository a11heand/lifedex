/**
 * filename: professional_and_creative_code.js
 *
 * This code demonstrates a professional and creative JavaScript program.
 * It is an interactive simulation of a virtual pet called "Pixel" that the user can care for.
 * The user can feed, play, and put the pet to sleep. The pet's mood, health, and energy levels are tracked.
 * The user can also clean the pet's environment and take it to the vet for a check-up.
 * The program includes a random event system where the pet may get sick or have a special event happen.
 * The user's actions affect the pet's stats, and the pet may also age over time.
 */

class Pet {
  constructor(name) {
    this.name = name;
    this.age = 0;
    this.mood = 100;
    this.health = 100;
    this.energy = 100;
    this.environmentDirty = false;
  }

  feed() {
    if (this.energy < 20) {
      console.log(this.name + ' is too tired to eat.');
    } 
    else {
      this.energy -= 10;
      this.mood += 10;
      console.log(this.name + ' has been fed.');
    }
  }

  play() {
    if (this.energy < 10) {
      console.log(this.name + ' is too tired to play.');
    } 
    else {
      this.energy -= 20;
      this.mood += 20;
      console.log(this.name + ' is playing happily.');
    }
  }

  sleep() {
    if (this.energy < 30) {
      console.log(this.name + ' is too tired to sleep.');
    } 
    else {
      this.energy += 30;
      console.log(this.name + ' is fast asleep.');
    }
  }

  cleanEnvironment() {
    if (this.environmentDirty) {
      this.environmentDirty = false;
      console.log('Environment cleaned.');
    } 
    else {
      console.log('The environment is already clean.');
    }
  }

  goToVet() {
    if (this.health < 70) {
      this.health = 100;
      console.log(this.name + ' received a check-up from the vet.');
    } 
    else {
      console.log('No need to go to the vet now.');
    }
  }

  ageUp() {
    this.age += 1;
    console.log(this.name + ' just turned ' + this.age + ' years old.');
  }

  randomEvent() {
    const events = [
      'You found a toy for ' + this.name + '!',
      'Uh oh! ' + this.name + ' got sick.',
      'Today is ' + this.name + "'s birthday. Happy birthday!",
      this.name + ' played hide and seek!',
      'Good news: ' + this.name + ' learned a new trick!'
    ];
    const randomIndex = Math.floor(Math.random() * events.length);
    console.log(events[randomIndex]);

    switch (randomIndex) {
      case 0:
        this.mood += 10;
        break;
      case 1:
        this.health -= 20;
        break;
      case 2:
        this.ageUp();
        break;
      case 3:
        this.mood += 5;
        break;
      case 4:
        this.mood += 15;
        break;
    }
  }
}

// Interaction with the pet

const pixel = new Pet('Pixel');
console.log('Welcome to the virtual pet game! Meet ' + pixel.name + '!');

pixel.ageUp(); // Display initial age

pixel.feed(); // Feed the pet
pixel.play(); // Play with the pet
pixel.sleep(); // Put the pet to sleep

pixel.cleanEnvironment(); // Clean the pet's environment

pixel.goToVet(); // Take the pet to the vet

pixel.randomEvent(); // Experience a random event

// ... continue adding more interactions and events ...

// End of code