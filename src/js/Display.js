const Display = class {
    constructor({el}){
        this.el = document.querySelector(el);
    }
    init(){

    }
    render(data){
        this.el.innerText = data;
    }
};

export default Display;