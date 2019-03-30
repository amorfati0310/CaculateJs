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
      if (!targetButton) return;
      const buttonText = targetButton.innerText;
      const buttonType = targetButton.dataset.type;
      this.controller.sendInputKey({
        buttonType,
        buttonText
      });
    });
  }
  render() {
    this.el.innerHTML = this.template;
  }
};

export default Keys;
