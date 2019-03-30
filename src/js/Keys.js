const Keys = class {
  constructor({ el, template, controller }) {
    this.el = document.querySelector(el);
    this.template = template;
    this.controller = controller;
  }
  init() {
    this.render();
    this.el.addEventListener("click", e => {
      const targetButton = e.target.closest("button");
      const buttonText = targetButton.innerText;
      this.controller.sendInputKey(buttonText);
    });
  }
  render() {
    this.el.innerHTML = this.template;
  }
};

export default Keys;
