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
      this.controller.subscribe(this.updateClearText.bind(this));
    });
  }
  updateClearText({ isBegin }) {
    console.log("isBegin", isBegin);
    const buttonText = isBegin ? "AC" : "C";
    const buttonEl = document.querySelector(".btn-fn-calc");
    buttonEl.innerText = buttonText;
  }
  render() {
    this.el.innerHTML = this.template;
  }
};

export default Keys;
