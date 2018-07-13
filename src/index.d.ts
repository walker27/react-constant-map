/// <reference types="react-dom" />
import * as Promise from 'promise';

// interface IConstantMap{
//   (promisFetch?: () => Promise<any>, storeKey?: any): React.Component<{ value: any }>
// }

// declare var ConstantMap: IConstantMap;
declare function ConstantMap(promisFetch?: () => Promise<any>, storeKey?: any): React.Component<{ value: any }>;

export = ConstantMap;