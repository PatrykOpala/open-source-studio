export class FileExplorer{
  constructor(root, width, height){
    window.mFile.openFolder("./", (mess)=>{
      console.log(mess);
    });
    this.file_explorer_container = null;
    this.hide = true;
    this.render(root, width, height);
  }

  render(root, width, height){
    this.file_explorer_container = document.createElement("div");
    this.file_explorer_container.id = "file_explorer_container";
    this.file_explorer_container.style['display'] = "none";
    this.file_explorer_container.style['width'] = `${width}px`;
    this.file_explorer_container.style['height'] = `${height}px`;
    this.file_explorer_container.style['background-color'] = "hsl(50, 80%, 80%)";
    this.file_explorer_container.style['position'] = "fixed";
    root.append(this.file_explorer_container);
  }

  resize(width, height){
    if(width && this.file_explorer_container){
      this.file_explorer_container.style['width'] = `${width}px`;
    }
    if(height && this.file_explorer_container){
      this.file_explorer_container.style['height'] = `${height}px`;
    }
  }

  toogle(root){
    if(!this.hide){
      this.file_explorer_container.style['display'] = "none";
      document.getElementById("editor_container").style['margin-left'] = "0px";
      document.getElementById("advanced-menu-container")
      .style['margin-left'] = "0px";
      document.getElementById("advanced-menu-container")
      .style['width'] = `${root.offsetWidth}px`;
      this.hide = true;
    }else{
      this.file_explorer_container.style['display'] = "block";
      document.getElementById("editor_container")
      .style['margin-left'] = "300px";
      document.getElementById("advanced-menu-container")
      .style['margin-left'] = "300px";
      document.getElementById("advanced-menu-container")
      .style['width'] = `${root.offsetWidth - 283}px`;
      console.log(root.offsetWidth)
      this.hide = false;
    }
  }

}
