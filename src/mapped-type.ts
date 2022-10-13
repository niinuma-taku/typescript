export {};

type Profile = {
  name: string;
  age: number;
};

type PartilType = Partial<Profile>;
type PropertyType = keyof Profile;

//type Partial<T> = { [P in keyof T]?: T[P] | undefined; } 定義
type Optional<T> = { [P in keyof T]?: T[P] | undefined | null }; //nullも許容、自分で定義
