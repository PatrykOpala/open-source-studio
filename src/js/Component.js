export class Size{
  #width = 0;
  #height = 0;
  constructor(_width, _height){
    this.#width = _width;
    this.#height = _height;
  }

  get getSize(){
    return {
      width: this.#width,
      height: this.#height
    };
  }
}

export class Component extends Size{
  constructor(size){
    super(size.getSize.width, size.getSize.height);
  }

  resize(newWidth, newHeight){
    let newSize = new Size(newWidth, newHeight);
    return newSize.getSize;
  }

}
