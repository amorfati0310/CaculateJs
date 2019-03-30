const Observable = class {
  constructor() {
    this.observers = new Set();
  }
  subscribe(fn) {
    this.observers.add(fn);
  }
  unsubscribe(fn) {
    this.observers.delete(fn);
  }
  fire(data) {
    // Map으로 하는게 맞지 않나? 왜 예제들은 다 배열이지?
    [...this.observers].forEach(observer => observer(data));
  }
};

export default Observable;
