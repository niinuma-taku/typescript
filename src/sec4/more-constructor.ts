export {};

class Person {
  constructor(public name: string, protected age: number) {}
}
const me = new Person('ham', 34);
console.log(me);
