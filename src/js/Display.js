const Display = class {
  constructor({ el, controller }) {
    this.el = document.querySelector(el);
    this.controller = controller;
  }
  init() {
    this.controller.subscribe(this.render.bind(this));
  }
  render({ calcResult }) {
    this.el.innerText = calcResult;
  }
};

export default Display;
