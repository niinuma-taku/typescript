export {};

let name: any = 'das';
//let lenght:number=name.lenght;
//let lenght =name.lenght as number;
let length = (name as string).length; //推奨
//let length =(<string>name).length;

//length='foo';
