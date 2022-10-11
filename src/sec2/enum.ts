export {};
//連番を付与する
// enum Months {
//   J,
//   F,
//   M,
//   Ju,
//   Jul,
//   Au,
//   Se,
//   Oc,
//   Nov,
//   Dec,
// }

//各要素に数値を設定できる
enum Months {
  J = 1,
  F,
  M,
  Ju,
  Jul,
  Au,
  Se,
  Oc,
  Nov,
  Dec,
}
console.log(Months.J);
console.log(Months.Nov);

enum Colors {
  Red = '#ff000',
  White = 'FFFFF',
  Black = '00000',
}
let white = Colors.White;
console.log({ white });

//付け足しもできる
enum Colors {
  Yellow = '#ffff0',
}

let yellow = Colors.Yellow;
//上書きは出来ない
//Colors.Yellow=34;
console.log({ yellow });
