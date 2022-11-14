// //  constructor
// class color {
//   constructor(r, g, b) {
//     this.values = [r, g, b];
//     // assign values as property of this
//   }
// }

// const red = new color(255, 0, 0);
// console.log(red);

// inheritence method

class Color {
  constructor(r, g, b) {
    this.values = [r, g, b];
    // private field
    this.values = rgbToHSL([r, g, b]);
  }
  getRed() {
    return this.values[0];
  }
  setRed(value) {
    this.values[0] = value;
  }
}

const red = new Color(255, 0, 0);
red.setRed(0);
console.log(red.getRed());

// static property
class Color {
  static isValid(r, g, b) {
    return r >= 0 && r <= 255 && g >= 0 && g <= 255 && b >= 0 && b <= 255;
  }
}

Color.isValid(255, 0, 0);
Color.isValid(1000, 0, 0);
