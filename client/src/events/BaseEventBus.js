class BaseEventBus {
  constructor() {
    this.bus = {};
    this.waitingRegis = new Map();
  }

  $on = (name, callback, key) => {
    if (this.bus[name]) {
      this.bus[name].set(key, callback);
    } else {
      this.bus[name] = new Map();
      this.bus[name].set(key, callback);
    }
  };

  _execWaits(name) {
    const callArr = this.waitingRegis.get(name);
    callArr.map((call) => {
      const variables = call;
      this.bus[name](...variables);
    });
    this.waitingRegis.delete(name);
  }

  has = (name, key) => {
    try {
      return this.bus[name].has(key);
    } catch {
      return false;
    }
  };

  $off = (name, key) => {
    if (this.bus[name]) {
      this.bus[name].delete(key);
    }
  };

  $emit = (name, ...variables) => {
    if (!this.bus[name]) {
      const isCalledBefore = this.waitingRegis.has(name);
      if (isCalledBefore) {
        const callArr = this.waitingRegis.get(name);
        callArr.push(variables);
        this.waitingRegis.set(name, callArr);
      } else {
        this.waitingRegis.set(name, [variables]);
      }
      return;
    }
    const valuesIterator = this.bus[name].values();
    for (let i = 0; i < this.bus[name].size; i++) {
      valuesIterator.next().value(...variables);
    }
  };
}

export default BaseEventBus;
