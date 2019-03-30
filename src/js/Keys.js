const Keys = class {
  constructor({el, template}){
     this.el = document.querySelector(el);
     this.template = template;
  }
  init(){
    this.render();
  }
  render(){
      this.el.innerHTML = this.template;
  }
};

export default Keys;