export {};

const kansu = (): number => 43;

let numberAny: any = kansu();
let numberUnknown: unknown = kansu();

let subAny = numberAny + 10;

if (typeof numberUnknown === 'number') {
  let subUnknown = numberUnknown + 10;
}
