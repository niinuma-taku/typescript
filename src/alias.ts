export {};

type Mojiretsu = string;

const foostring: string = 'hello';
const foomojiretsu: Mojiretsu = 'hello';

let example1 = {
  name: 'hun',
  age: 34,
};

type Profile = {
  name: string;
  age: number;
};

type Profile2 = typeof example1;
