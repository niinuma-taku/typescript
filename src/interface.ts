export {};

type ObjectType = {
  name: string;
  age: number;
};

let object: ObjectType = {
  name: 'fak',
  age: 23,
};

interface objectInterface {
  name: string;
  age: number;
}

let object2: objectInterface = {
  name: 'fak',
  age: 23,
};
