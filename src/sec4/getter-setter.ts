export {};

//*owner
// 所有者、初期化時に設定可能、途中変更不可、参照可

// *secretNumber
// 初期化時に設定可能、途中変更可、参照不可

class MyNumberCard {
  private _owner: string; //　getterと名前がかぶる→_をつける慣習
  private _secretNumber: number;

  constructor(owner: string, secretNumber: number) {
    this._owner = owner;
    this._secretNumber = secretNumber;
  }

  get owner() {
    return this._owner;
  }

  set secretNumber(secretNumber: number) {
    this._secretNumber = secretNumber;
  }

  //   debugPrint() {
  //     return `secretNumber:${this._secretNumber}`;
  //   }
}

let card = new MyNumberCard('geg', 1234);
console.log(card.owner);
card.secretNumber = 111111;
//console.log(card.debugPrint());
