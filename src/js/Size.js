export class Size{
  #width = 0;
  #height = 0;
  constructor(){}

  getSize(){
    return {
      width: this.#width,
      height: this.#height
    }
  }

  getWidth(){
    return this.#width;
  }

  getHeight(){
    return this.#height;
  }

  setSize(width, height){
    this.#width = width;
    this.#height = height;
  }

  setWidth(width){
    this.#width = width;
  }

  setHeight(height){
    this.#height = height;
  }
}
