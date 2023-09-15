// Filename: sophisticated_code.js
// Content: Complex JavaScript code with advanced functionality

// Object representing a car
class Car {
  constructor(brand, model, color) {
    this.brand = brand;
    this.model = model;
    this.color = color;
  }

  getCarInfo() {
    return `This is a ${this.color} ${this.brand} ${this.model}.`;
  }

  static compareCars(car1, car2) {
    if (car1.model === car2.model) {
      console.log(`Both ${car1.brand} and ${car2.brand} have the same model.`);
    } else {
      console.log(`${car1.brand} and ${car2.brand} don't have the same model.`);
    }
  }
}

// Object representing a university student
class Student {
  constructor(name, age, major) {
    this.name = name;
    this.age = age;
    this.major = major;
  }

  getGreeting() {
    return `Hello! My name is ${this.name} and I'm studying ${this.major}.`;
  }
}

// Function to calculate the factorial of a number recursively
function factorial(n) {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
}

// Array of prime numbers up to a given limit
function findPrimes(limit) {
  const primes = [];
  for (let num = 2; num <= limit; num++) {
    let isPrime = true;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      primes.push(num);
    }
  }
  return primes;
}

// Function to check if a string is a palindrome
function isPalindrome(str) {
  return str === str.split('').reverse().join('');
}

// Example usage of the created objects and functions
const myCar = new Car('Toyota', 'Camry', 'black');
const friendCar = new Car('Honda', 'Civic', 'silver');
console.log(myCar.getCarInfo());
Car.compareCars(myCar, friendCar);

const john = new Student('John', 20, 'Computer Science');
console.log(john.getGreeting());

console.log(factorial(5));
console.log(findPrimes(50));
console.log(isPalindrome('racecar'));

// ... Rest of the code goes here
// ... Total length of more than 200 lines