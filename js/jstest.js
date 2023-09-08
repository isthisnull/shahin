/* const menu = {
  _meal: "",
  _price: 0,
  get price() {
    return this._price;
  },
  set meal(mealToCheck) {
    if (typeof mealToCheck === "string") {
      return (this._meal = mealToCheck);
    }
  },
  set price(priceToCheck) {
    if (typeof priceToCheck === "number") {
      return (this._price = priceToCheck);
    }
  },
  get todaysSpecial() {
    if (this._price && this._meal) {
      return `todays qaza ${this._meal} hast kire khar bokhorid and the price is ${this._price}$`;
    } else {
      return "Meal or price was not set correctly!";
    }
  },
};
menu._price = 242;
menu.meal = "kire khar";
console.log(menu.price);
console.log(menu._meal);
console.log(menu.todaysSpecial); */
////////////////////////////////////////////////
/* const team = {
  _games: [
    { opponent: "", teamPoints: "", opponentPoints: "" },
    { opponent: "", teamPoints: "", opponentPoints: "" },
    { opponent: "", teamPoints: "", opponentPoints: "" },
  ],
  _players: [
    { firstName: "", lastName: "", age: 0 },
    { firstName: "", lastName: "", age: 0 },
    { firstName: "", lastName: "", age: 0 },
  ],
  get players() {
    return this._players;
  },
  get games() {
    return this._games;
  },
  addPlayer(newFirstName, newLastName, newAge) {
    this._players.push({
      firstName: newFirstName,
      lastName: newLastName,
      age: newAge,
    });
  },
  addgame(newOpponent, newTeampoints, newOpponentPoints) {
    this._games.push({
      opponent: newOpponent,
      teamPoints: newTeampoints,
      opponentPoints: newOpponentPoints,
    });
  },
};
team.addPlayer("mamad", "koni", 42);
console.log(team._players);
team.addgame("htfc", "jytvgh", "uyguyg");
console.log(team._games); */
/////////////////////////////////////////////////////////
/* class HospitalEmployee {
  constructor(name) {
    this._name = name;
    this._remainingVacationDays = 20;
  }

  get name() {
    return this._name;
  }

  get remainingVacationDays() {
    return this._remainingVacationDays;
  }

  takeVacationDays(daysOff) {
    this._remainingVacationDays -= daysOff;
  }
  set name(name) {
    t;
  }
}

class Nurse extends HospitalEmployee {
  constructor(name, certifications) {
    super(name);
    this._certifications = certifications;
  }

  get certifications() {
    return this._certifications;
  }
  addCertification(newCertification) {
    this._certifications.push(newCertification);
  }
}

const nurseOlynyk = new Nurse("Olynyk", ["Trauma", "Pediatrics"]);
nurseOlynyk.takeVacationDays(5);
console.log(nurseOlynyk.remainingVacationDays);
nurseOlynyk.addCertification("Genetics");
console.log(nurseOlynyk.certifications); */
///////////////////////////////////
/* class HospitalEmployee {
  constructor(name) {
    this._name = name;
    this._remainingVacationDays = 20;
  }

  get name() {
    return this._name;
  }

  get remainingVacationDays() {
    return this._remainingVacationDays;
  }

  takeVacationDays(daysOff) {
    this._remainingVacationDays -= daysOff;
  }
  static generatePassword() {
    return Math.floor(Math.random() * 10000);
  }
}

class Nurse extends HospitalEmployee {
  constructor(name, certifications) {
    super(name);
    this._certifications = certifications;
  }

  get certifications() {
    return this._certifications;
  }

  addCertification(newCertification) {
    this.certifications.push(newCertification);
  }
}
class Doctor extends HospitalEmployee {
  constructor(name, insurance) {
    super(name);
    this._name = name;
    this._remainingVacationDays = 20;
    this._insurance = insurance;
  }
  get insurance() {
    this._insurance;
  }
}
const nurseOlynyk = new Nurse();
nurseOlynyk.takeVacationDays(0);
console.log(HospitalEmployee.remainingVacationDays);
nurseOlynyk.takeVacationDays(9);
console.log(nurseOlynyk.remainingVacationDays);
nurseOlynyk.addCertification("Genetics");
console.log(nurseOlynyk.certifications);

console.log(HospitalEmployee.generatePassword()); */
///////////////////////////////////////////////
/* class Media {
  constructor(title) {
    this._title = title;
    this._isCheckedOut = false;
    this._ratings = [];
  }
  set isCheckedOut(newCheckedOut) {
    return (this._isCheckedOut = newCheckedOut);
  }
  get title() {
    return this._title;
  }
  get isCheckedOut() {
    return this._isCheckedOut;
  }
  get ratings() {
    return this._ratings;
  }
  toggleCheckOutStatus() {
    if (this._isCheckedOut === true) {
      this._isCheckedOut = false;
    } else {
      this._isCheckedOut = true;
    }
  }
  addRating(rate) {
    if (rate < 6 && rate > 0) {
      this._ratings.push(rate);
    } else {
      console.log("plz enter between 1 - 5 ");
    }
  }

  getAverageRating() {
    let ratingSum = this.ratings.reduce(
      (accumulator, sum) => accumulator + sum,
      0
    );
    console.log(ratingSum);
    let lengtharr = this.ratings.length;
    return ratingSum / lengtharr;
  }
}

class Book extends Media {
  constructor(author, pages, title) {
    super(title);
    this._author = author;
    this._pages = pages;
  }
  get author() {
    return this._author;
  }
  get pages() {
    return this._pages;
  }
}
class Movie extends Media {
  constructor(director, runTime, title) {
    super(title);
    this._director = director;
    this._runTime = runTime;
  }
  get director() {
    return this._director;
  }
  get runTime() {
    return this._runTime;
  }
}
class CD extends Media {
  constructor(artist, kir1, kir2) {
    super(name);
    this._artist = artist;
    this._songs = [kir1, kir2];
  }
}
const historyOfEverything = new Book(
  "Bill Bryson",
  544,
  "A Short History of Nearly Everything"
);
const koskesh = new CD();
const speed = new Movie("Jan de Bont", 116, "Speed");
console.log(historyOfEverything);
historyOfEverything.toggleCheckOutStatus();
console.log(historyOfEverything.isCheckedOut);
console.log(historyOfEverything);
historyOfEverything.addRating(4);
historyOfEverything.addRating(5);
historyOfEverything.addRating(5);
historyOfEverything.getAverageRating();
console.log(historyOfEverything.getAverageRating());
speed.toggleCheckOutStatus();
console.log(speed._isCheckedOut);
speed.addRating(1);
speed.addRating(1);
speed.addRating(5);
speed.getAverageRating();
console.log(speed.getAverageRating()); */
////////////////////////////////////////////////////
/* class School {
  constructor(name, level, numberOfStudents) {
    this._name = name;
    this._level = level;
    this._numberOfStudents = numberOfStudents;
  }
  get numberOfStudents() {
    return this._numberOfStudents;
  }
  get name() {
    return this._name;
  }
  get level() {
    return this._level;
  }
  set numberOfStudents(newNumberOfStudents) {
    if (typeof newNumberOfStudents === "number") {
      this._numberOfStudents = newNumberOfStudents;
    } else {
      console.log("Invalid input : numberOfStudents must be set to a Number");
    }
  }
  quickFacts() {
    console.log(`${this.name} educates ${this.numberOfStudents} students at the ${this.level} school level.
 `);
  }
  static pickSubsituteTeacher(subsituteTeachers) {
    const randInt = Math.floor(Math.random() * subsituteTeachers.length);
    return subsituteTeachers[randInt];
  }
}
class PrimarySchool extends School {
  constructor(name, numberOfStudents, pickupPolicy) {
    super(name, "primary", numberOfStudents);
    this._pickupPolicy = pickupPolicy;
  }
  get pickupPolicy() {
    return this._pickupPolicy;
  }
}
class HighSchool extends School {
  constructor(name, numberOfStudents, sportsTeams) {
    super(name, "high", numberOfStudents);
    this._sportsTeams = sportsTeams;
  }
  get sportsTeams() {
    return this._sportsTeams;
  }
}
class Middle extends School {
  constructor(name, numberOfStudents) {
    super(name, "Middle", numberOfStudents);
  }
}

const lorraineHansbury = new PrimarySchool(
  "Lorraine Hansbury",
  514,
  "Students must be picked up by a parent, guardian, or a family member over the age of 13."
);
lorraineHansbury.quickFacts();
const sub = School.pickSubsituteTeacher([
  "Jamal Crawford",
  "Lou Williams",
  "J. R. Smith",
  "James Harden",
  "Jason Terry",
  "Manu Ginobli",
]);
console.log(sub);
const alSmith = new HighSchool("Al E. Smith", 415, [
  "Baseball",
  "Basketball",
  "Volleyball",
  "Track and Field",
]);
console.log(alSmith.sportsTeams);
const Math1 = new PrimarySchool("math", 435, "kiram to in zendg");
console.log(Math1);
const Math2 = new HighSchool("math", 435, "kiram to in zendg");
console.log(Math2);
console.log(alSmith); */
///////////////////////////////////////////////////////////////////////////////////////////////////////
/* shape-area.js */
/* const PI = Math.PI;

// Define and export circleArea() and squareArea() below
function circleArea(radiusLength) {
  return PI * radiusLength * radiusLength;
}
function squareArea(sideLength) {
  return sideLength * sideLength;
}
module.exports.circleArea = circleArea;
module.exports.squareArea = squareArea;

const areaFunctions = require("./shape-area.js"); */
//////////////////////////////////////////////////////////////////////////////////////////////////////
// Declare and export the functions here.
/* const caesarCipher = (str, amount = 0) => {
  if (amount < 0) {
    return caesarCipher(str, amount + 26);
  }
  let output = "";
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (char.match(/[a-z]/i)) {
      let code = str.charCodeAt(i);
      if (code >= 65 && code <= 90) {
        char = String.fromCharCode(((code - 65 + amount) % 26) + 65);
      } else if (code >= 97 && code <= 122) {
        char = String.fromCharCode(((code - 97 + amount) % 26) + 97);
      }
    }
    output += char;
  }
  return output;
};

const symbolCipher = (str) => {
  const symbols = {
    i: "!",
    "!": "i",
    l: "1",
    1: "l",
    s: "$",
    $: "s",
    o: "0",
    0: "o",
    a: "@",
    "@": "a",
    e: "3",
    3: "e",
    b: "6",
    6: "b",
  };

  let output = "";
  for (let i = 0; i < str.length; i++) {
    let char = str.toLowerCase()[i];

    if (symbols[char]) {
      output += symbols[char];
    } else {
      output += char;
    }
  }
  return output;
};

const reverseCipher = (sentence) => {
  let words = sentence.split(" ");
  for (let i = 0; i < words.length; i++) {
    words[i] = words[i].split("").reverse().join("");
  }
  return words.join(" ");
};

console.log(reverseCipher(symbolCipher(caesarCipher("kiri", 6))));
console.log(symbolCipher(caesarCipher("kiri", 6)));
console.log(caesarCipher("kiri", -27));

// initializing function to demonstrate match()
// method with "g" para
function matchString() {
  let string = "a b cDEFgiJKLM";
  let result = string.match(/[a-z]/i);
  console.log("Output : " + result);
}
matchString();
 */
////////////////////////////////////////////////////////////////////////////////////
/* const onFulfill = (itemsArray) => {
  console.log(`Items checked: ${itemsArray}`);
  console.log(
    `Every item was available from the distributor. Placing order now.`
  );
};

const onReject = (rejectionReason) => {
  console.log(rejectionReason);
};

// Write your code below:
const checkSunglasses = () => {
  return checkAvailability("sunglasses", "Favorite Supply Co.");
};
const checkPants = () => {
  return checkAvailability("pants", "Favorite Supply Co.");
};
const checkBags = () => {
  return checkAvailability("bags", "Favorite Supply Co.");
};
const firstPromise = checkBags();
const secondPromise = checkPants();
const thirdPromise = checkSunglasses();
const koni2 = [firstPromise, secondPromise, thirdPromise];
Promise.all([checkSunglasses(), checkBags(), checkPants()])
  .then((onFulfill) => {
    console.log(onFulfill);
  })
  .catch((rejectedValue) => {
    console.log(rejectedValue);
  }); */
////////////////////////////////////////////////////////////////////
function withConstructor(num) {
  return new Promise((resolve, reject) => {
    if (num === 0) {
      resolve("zero");
    } else {
      resolve("not zero");
    }
  });
}

withConstructor(0).then((resolveValue) => {
  console.log(
    ` withConstructor(0) returned a promise which resolved to: ${resolveValue}.`
  );
});

// Write your code below:

async function withAsync(num) {
  if (num === 0) {
    return "zero";
  } else {
    return "not zero";
  }
}

// Leave this commented out until step 3:

withAsync(100).then((resolveValue) => {
  console.log(
    ` withAsync(100) returned a promise which resolved to: ${resolveValue}.`
  );
});
