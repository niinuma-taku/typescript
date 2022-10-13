export {};

type DebugType = () => void;
type SomeTypes = string | number | DebugType;
type FunctionType = Exclude<SomeTypes, string | number>;
type NonFunctionType = Exclude<SomeTypes, DebugType>;
type typeExcludingFunction = Exclude<SomeTypes, Function>; //関数なし

type FunctionExtract = Extract<SomeTypes, Function>;

type NullableType = string | number | null;
type NonNullableType = NonNullable<NullableType>;
