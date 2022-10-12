export {};

abstract class Animal {
  abstract cry(): string;
}

class Lion extends Animal {
  cry(): string {
    return 'roer';
  }
}

class Tiger extends Animal {
  cry(): string {
    return 'rrr';
  }
}
