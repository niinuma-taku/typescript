export {};

// let bmi = (height: number, weight: number) => weight / (height * height);
// bmi(1.75, 76);

let bmi = (height: number, weight: number, pritable?: boolean) => {
  if (pritable) {
    let bmi = weight / (height * height);
    console.log(bmi);
  }
  return bmi;
};
bmi(1.75, 76, true);
