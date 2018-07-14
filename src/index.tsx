import * as React from 'react';

const noop = async () => {};

// 后期改成Map或WeakMap
const store = {};
function constantMap (promisFetch = noop, storeKey = new Date().getTime()) {
  return class ConstantMapComponent extends React.Component<{ value: any }> {
    state = {
      hash: null,
    };
    async componentDidMount() {
      if (store[storeKey]) {
        this.setState({ hash: store[storeKey] });
        return;
      }
      const hash =  await promisFetch();
      this.setState({ hash });
      store[storeKey] = hash;
    }
    render() {
      const { value: key } = this.props;
      const { hash } = this.state;
      return hash && hash[key] ? hash[key] : null;
    }
  };
}

export default constantMap;
