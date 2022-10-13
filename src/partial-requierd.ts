export {};

type profile = {
  name: string;
  age?: number;
  zipCode: number;
};

type PartilType = Partial<profile>; //全てoptionalのもの
type RequiredType = Required<profile>; //Partialの逆
