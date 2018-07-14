/// <reference types="react-dom" />

type constantMapFunc = (promisFetch?: () => Promise<any>, storeKey?: any) => React.Component<{ value: any }>;
declare const constantMap: constantMapFunc;
export = constantMap;
export as namespace constantMap;