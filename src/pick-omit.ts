export {};

type DetailProfile = {
  name: string;
  height: number;
  weight: number;
};

type Sinpleprofile = Pick<DetailProfile, 'name' | 'weight'>;
type Smallprofile = Omit<DetailProfile, 'weight'>;

const DetailProfile2 = (name: string, age: number) => {};

type Profile = Parameters<typeof DetailProfile2>;
