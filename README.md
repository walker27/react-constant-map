# React-Constant-Map
  * dependence:
    + React16+ 处理基于React的工程中，对于需要异步请求的常量映射（例如：常量编码 -> 文字显示）的关系
  * install
    ```shell
      npm install react-constant-map
    ```
  * example
    + ConstantMap.js
    ```javascript
      import ReactConstantMapHOC from 'react-constant-map';

      const sleep = (t) => new Promise((resolve) => {
        setTimeout(() => {  resolve(); }, t);
      });

      async function fakeService() {
        await sleep(2000);
        return {
          1: 'a',
          2: 'b',
          3: 'c',
        };
      }
      
      export default ReactConstantMapHOC(fakeService, 'storeKey');
    ```

    + index.js
    ```javascript
      import React from 'react';
      import ConstantMap from './ConstantMap.js'
      
      export default function Index(){
        return (
          <div>
            <ConstantMap value="1" />
          </div>
        )
      }
    ```
