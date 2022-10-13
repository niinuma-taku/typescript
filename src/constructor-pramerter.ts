export {};

class Person {
  constructor(public name: string, public age: number) {}
}

let taro = new Person('Taro', 34);
console.log(taro);

type PersonType = typeof Person;
type Profile = ConstructorParameters<PersonType>;

const profile: Profile = ['hab', 43];
const ham = new Person(...profile);
console.log(ham);
