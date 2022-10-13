export {};

//let profile: { [index: string]: string | number } = {};
//index signetureの書き方
//{[index:typeForIndex]: typeForValue}

interface Profile {
  undeeTwenty: boolean;
  [index: string]: string | number | boolean;
}
let profile: Profile = {
  undeeTwenty: false,
  name: 'tre',
};

profile.name = 'tre';
profile.age = 34;
