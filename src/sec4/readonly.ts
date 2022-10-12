export {};

class VisaCard {
  //readonly owner: string;

  constructor(public readonly owner: string) {
    //this.owner = owner;
  }
}

let myCard = new VisaCard('hu');
console.log(myCard.owner);
// myCard.owner=`tito`;
