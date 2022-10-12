export {};

//exportをつける必要がある
namespace Japanese {
  export namespace Tokyo {
    export class Person {
      constructor(public name: string) {}
    }
  }
  export namespace Osaka {
    export class Person {
      constructor(public name: string) {}
    }
  }
}

namespace English {
  class Person {
    constructor(
      public fname: string,
      public mname: string,
      public lname: string
    ) {}
  }
}

const me = new Japanese.Tokyo.Person('hdhd');
