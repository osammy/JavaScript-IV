//Prototype Refactor

//1. Copy and paste your code or the solution from yesterday

//2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

//person
class Person {
  constructor(props) {
    const { name, age } = props;
    this.stomach = [];
    this.age = age;
    this.name = name;
  }

  greet() {
    return `Myname is name is ${this.name} and I am ${this.age} years old`;
  }

  eat(edibleStuff) {
    if (edibleStuff) this.stomach.push(edibleStuff);
  }

  poop() {
    if (this.stomach.length > 0) this.stomach = [];
  }
}

class Baby extends Person {
  constructor(props) {
    const { name, age } = props;
    super(props);
    this.age = age;
    this.name = name;
  }

  play() {
    return `Myname is name is ${this.name} and I am ${this.age} years old`;
  }
}

class Car {
  constructor(props) {
    const { name, make } = props;
    this.odometer = 0;
    this.inBadShapeDueTocrash = false;
    this.name = name;
    this.make = make;
  }

  drive(distance) {
    if (this.inBadShapeDueTocrash)
      return `I crashed at ${this.odometer} miles!`;
    this.odometer += distance;
  }

  drive(distance) {
    if (this.inBadShapeDueTocrash)
      return `I crashed at ${this.odometer} miles!`;
    this.odometer += distance;
  }

  crash() {
    if (this.inBadShapeDueTocrash) this.inBadShapeDueTocrash = true;
  }

  repair() {
    this.inBadShapeDueTocrash = false;
  }
}

//Library
class Library {
  constructor(props) {
    const { name, area, postCode } = props;
    this.name = name;
    this.area = area;
    this.postCode = postCode;
    this.books = [];
  }

  checkoutBook(book) {
    const isFound = this.books.findIndex(function(el) {
      return (el.ISBN = book.ISBN);
    });

    if (isFound === -1) return "This book isnt available right now";

    const newBooks = this.books.filter(el => {
      console.log(el.ISBN + " !=== " + book.ISBN);
      return el.ISBN !== book.ISBN;
    });

    this.books = newBooks;
    book.isCheckedOut = true;
  }

  addBook(book) {
    const weHaveThisBookAlready = this.books
      .map(el => el.ISBN)
      .includes(book.ISBN);
    if (!weHaveThisBookAlready) this.books.push(book);
  }
}

class Book extends Library {
  constructor(props) {
    super(props);
    const { name, author, ISBN } = props;
    this.name = name;
    this.author = author;
    this.ISBN = ISBN;
    this.isCheckedOut = false;
  }
}

class GameObject {
  constructor(props) {
    const { name, dimensions, createdAt } = props;
    this.name = name;
    this.dimensions = dimensions;
    this.createdAt = createdAt;
  }

  destroy() {
    return `${this.name} was removed from the game.`;
  }
}

class CharacterStats extends GameObject {
  constructor(props) {
    super(props);
    const { healthPoints } = props;
    this.healthPoints = healthPoints;
  }

  takeDamage() {
    return `${this.name} took damage.`;
  }
}

class Humanoid extends CharacterStats {
  constructor(props) {
    super(props);
    const {
      createdAt,
      dimensions,
      healthPoints,
      name,
      team,
      weapons,
      language
    } = props;

    this.team = team;
    this.weapons = weapons;
    this.language = language;
    this.dimensions = dimensions;
    this.healthPoints = healthPoints;
    this.name = name;
    this.createdAt = createdAt;
  }

  greet() {
    return `${this.name} offers a greeting in ${this.language}.`;
  }
}


 const mage = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 1,
      height: 1,
    },
    healthPoints: 5,
    name: 'Bruce',
    team: 'Mage Guild',
    weapons: [
      'Staff of Shamalama',
    ],
    language: 'Common Tongue',
  });
  const swordsman = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 2,
      height: 2,
    },
    healthPoints: 15,
    name: 'Sir Mustachio',
    team: 'The Round Table',
    weapons: [
      'Giant Sword',
      'Shield',
    ],
    language: 'Common Tongue',
  });
  const archer = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 1,
      width: 2,
      height: 4,
    },
    healthPoints: 10,
    name: 'Lilith',
    team: 'Forest Kingdom',
    weapons: [
      'Bow',
      'Dagger',
    ],
    language: 'Elvish',
  });
  console.log(mage.createdAt); // Today's date
  console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
  console.log(swordsman.healthPoints); // 15
  console.log(mage.name); // Bruce
  console.log(swordsman.team); // The Round Table
  console.log(mage.weapons); // Staff of Shamalama
  console.log(archer.language); // Elvish
  console.log(archer.greet()); // Lilith offers a greeting in Elvish.
  console.log(mage.takeDamage()); // Bruce took damage.
  console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.

