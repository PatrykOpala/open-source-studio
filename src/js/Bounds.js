export class Bounds{
  #width = 0;
  #height = 0;
  #positionX = 0;
  #positionY = 0;
  constructor(){}

  getPosition(){
    return{
      x: this.#positionX,
      y: this.#positionY
    }
  }

  getX(){
    return this.#positionX;
  }

  getY(){
    return this.#positionY;
  }

  setPosition(x, y){
    this.#positionX = x;
    this.#positionY = y;
  }

  setX(x){
    this.#positionX = x;
  }

  setY(y){
    this.#positionY = y;
  }

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
