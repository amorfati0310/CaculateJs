const Display = class {
  constructor({ el, controller }) {
    this.el = document.querySelector(el);
    this.controller = controller;
  }
  init() {
    this.controller.subscribe(this.render.bind(this));
  }
  render({ caclResult }) {
    this.el.innerText = caclResult;
  }
};

export default Display;