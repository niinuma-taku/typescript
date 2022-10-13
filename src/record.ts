export {};

//Record<K,T>

type Prefectures = 'Tokyo' | 'Chiba' | 'Totori' | 'Shiga';

type Covidinfo = {
  kanji_name: string;
  confirmed_cases: number;
};

//Record型
const covidJapan: Record<Prefectures, Covidinfo> = {
  Tokyo: { kanji_name: '東京', confirmed_cases: 1000 },
  Chiba: { kanji_name: '千葉', confirmed_cases: 100 },
  Totori: { kanji_name: '鳥取', confirmed_cases: 10 },
  Shiga: { kanji_name: '滋賀', confirmed_cases: 1 },
};
