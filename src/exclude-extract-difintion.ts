export {};

type MyExclude<T, U> = T extends U ? never : T;
type DebugType = () => void;
type SomeTypes = string | number | DebugType;
type FunctionType = MyExclude<SomeTypes, string | number>;

type MyEx = number extends string | number ? never : number;
//A ? B:C   A=tureのときB　A=falseのときC

type NonFunctionType = MyExclude<SomeTypes, DebugType>;
type typeExcludingFunction = MyExclude<SomeTypes, Function>; //関数なし

type FunctionExtract = Extract<SomeTypes, Function>;

type NullableType = string | number | null;
type NonNullableType = NonNullable<NullableType>;
