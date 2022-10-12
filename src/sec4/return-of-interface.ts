export {};

class Mahoutukai {}
class Souryo {}

class Taro extends Mahoutukai {}

interface Kenjya {
  ionazun(): void;
}

interface Senshi {
  kougeki(): void;
}

class jiro implements Kenjya, Senshi {
  ionazun(): void {
    console.log('ionazun');
  }

  kougeki(): void {
    console.log('kougeki');
  }
}
