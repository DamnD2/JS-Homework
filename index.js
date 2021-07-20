// https://www.codewars.com/kata/52eb114b2d55f0e69800078d
// 6kyu Simple Substitution Cipher Helper

class SubstitutionCipher {
  constructor(abc1, abc2) {
    this.a = abc1;
    this.b = abc2;
  }

  encode(str) {
    return str.split('').reduce((accum, currentSymbol) => {
      const oppositeSymbol = this.b[this.a.indexOf(currentSymbol)];

      return oppositeSymbol ? accum += oppositeSymbol : accum += currentSymbol;
    }, '');
  }

  decode(str) {
    return str.split('').reduce((accum, currentSymbol) => {
      const oppositeSymbol = this.a[this.b.indexOf(currentSymbol)];

      return oppositeSymbol ? accum += oppositeSymbol : accum += currentSymbol;
    }, '');
  }
}


// https://www.codewars.com/kata/5483366098aa442def0009af
// 6kyu Hex class

class Hex {
  constructor(value) {
    this.value = value;
  }

  valueOf() {
    return this.value;
  }

  toString() {
    return `0x${this.value.toString(16).toUpperCase()}`;
  }

  toJSON() {
    return `0x${this.value.toString(16).toUpperCase()}`;
  }

  plus(operand) {
    return new Hex(this.value + parseInt(operand));
  }

  minus(operand) {
    return new Hex(this.value - parseInt(operand));
  }
}

Hex.parse = function (string) {
  return (string[0] == '0') ? parseInt(string) : parseInt(`0x${string}`);
};


// https://www.codewars.com/kata/6089c7992df556001253ba7d
// 7kyu What a "Classy" Song

class Song {
  constructor(title, artist) {
    this.title = title;
    this.artist = artist;
    this.listeners = [];
  }

  howMany(array) {
    const newListeners = array.reduce((accumulator, element) => {
      if (this.listeners.indexOf(element.toLowerCase()) === -1) {
        this.listeners.push(element.toLowerCase());
        accumulator += 1;
      }

      return accumulator;
    }, 0);
    console.log(newListeners);

    return newListeners;
  }
}


// https://www.codewars.com/kata/53f0f358b9cb376eca001079
// 8kyu Regular Ball Super Ball

class Ball {
  constructor(ballType = 'regular'){
    this.ballType = ballType;
  }
}