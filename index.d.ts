/// <reference types="react" />

type constantMapFunc = (promisFetch?: () => Promise<any>, storeKey?: any) => React.ComponentClass<{ value: any }>;
declare const constantMap: constantMapFunc;
export = constantMap;
export as namespace constantMap;