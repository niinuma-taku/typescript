export {};

const nextYearSalary = (currentSalary: number, rate: number = 1.1) => {
  return currentSalary * rate;
};

console.log(nextYearSalary(100, 1.4));
console.log(nextYearSalary(100, 1.1));
