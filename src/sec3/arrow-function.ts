export {};

let bmi: (height: number, weight: number) => number = (
  height: number,
  weight: number
): number => {
  return weight / (height * height);
};

//=> weight / (height * height); 省略型

console.log(bmi(1.78, 56));
