export {};

let fooCompatible: any;
let barCompatible: string = 'TypeScript';

console.log(typeof fooCompatible);
fooCompatible = barCompatible;
console.log(typeof fooCompatible);

let fooInCompatible: string;
let barInCompatible: number = 12;

//console.log(typeof fooInCompatible);
//fooInCompatible = barInCompatible;
//console.log(typeof fooInCompatible);
