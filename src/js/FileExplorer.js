export class FileExplorer{
  constructor(){
    this.file_explorer_container = null;
  }

  render(root, width, height){
    this.file_explorer_container = document.createElement("div");
    this.file_explorer_container.id = "file_explorer_container";
    this.file_explorer_container.style['width'] = `${width}px`;
    this.file_explorer_container.style['height'] = `${height}px`;
    this.file_explorer_container.style['background-color'] = "hsl(50, 80%, 80%)";
    this.file_explorer_container.style['position'] = "fixed";
    root.append(this.file_explorer_container);
  }

  resize(width, height){
    if(width){
      this.file_explorer_container.style['width'] = `${width}px`;
    }
    if(height){
      this.file_explorer_container.style['height'] = `${height}px`;
    }
  }

}