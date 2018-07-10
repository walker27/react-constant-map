import * as React from 'react';
import * as Promise from 'promise';

const noop = () => new Promise(() => ({}));

// 后期改成Map或WeakMap
const store = {};

function ConstantMap(promisFetch: () => Promise<any> = noop, storeKey: any = new Date().getTime()) {
  return class ConstantMapComponent extends React.Component<{ value: any }> {
    state = {
      hash: null,
    };
    componentDidMount() {
      if (store[storeKey]) {
        this.setState({ hash: store[storeKey] });
        return;
      }
      promisFetch()
        .then((hash) => {
          this.setState({ hash });
          store[storeKey] = hash;
        });
    }
    render() {
      const { value: key } = this.props;
      const { hash } = this.state;
      return hash && hash[key] ? hash[key] : null;
    }
  };
}

export default ConstantMap;
