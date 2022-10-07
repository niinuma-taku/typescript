export {};

//
function error(message: string): never {
  throw new Error(message);
}

try {
  let result = error('test');
  console.log(result);
} catch (error) {
  console.log({ error });
}

//void,neverの違い. neverはないも返さないときに使用、例外しか起きない（エラー型のみ）
let foo: void = undefined;
//let bar:never=undefined
