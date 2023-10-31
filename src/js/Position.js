export class Position{
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
}
