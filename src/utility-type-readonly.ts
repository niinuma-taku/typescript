export {};

type Profile = {
  name: string;
  age: number;
};

const me: Profile = {
  name: 'hdf',
  age: 46,
};

me.age++;
console.log(me);

type PersonalDataType = Readonly<Profile>;
const friend: PersonalDataType = {
  name: 'hhh',
  age: 46,
};

type Yomisenn<T> = { readonly [P in keyof T]: T[P] };
