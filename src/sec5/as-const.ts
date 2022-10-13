export {};

let name = 'tre';

name = 'guio';

let nickname = 'tre' as const;

//nickname='hfhf'

let prfile = {
  name: 'rer',
  height: 145,
} as const; //全てがreadonly扱いになる
//prfile.name='sae'

const prfile2 = {
  name: 'rer',
  height: 145,
};
prfile2.name = 'trer';
