export {};

class Me {
  static isP: boolean = true;
  static fname: string = 'tu';
  static lname: string = 'er';

  static work() {
    return `hey ${this.fname}`;
  }
}

console.log(Me.isP);
console.log(Me.work());
