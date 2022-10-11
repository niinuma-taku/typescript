export {};

type Pitcher1 = {
  throwingSpeed: number;
};

type Batter1 = {
  battingAverage: number;
};

const Sasaki: Pitcher1 = {
  throwingSpeed: 154,
};

const Ochiai: Batter1 = {
  battingAverage: 0.36,
};

// type Twoway ={
//    throwingSpeed: number;
//    battingAverage: number;
// }

type Twoway = Pitcher1 & Batter1;

const ohtani: Twoway = {
  throwingSpeed: 159,
  battingAverage: 0.32,
};
