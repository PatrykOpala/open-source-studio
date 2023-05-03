export class Editor{
  constructor(){
    this.editor_container = null;
  }

  render(root, width, height){
    this.editor_container = document.createElement("div");
    this.editor_container.id = "editor_container";
    this.editor_container.style['width'] = `${width}px`;
    this.editor_container.style['height'] = `${height}px`;
    this.editor_container.style['margin-left'] = "300px";
    this.editor_container.style['background-color'] = "black";
    root.append(this.editor_container);
  }

  resize(width, height){
    if(width){
      this.editor_container.style['width'] = `${width}px`;
    }
    if(height){
      this.editor_container.style['height'] = `${height}px`;
    }
  }
}
