export class FileExplorer{
  constructor(root, width, height){
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
    this.renderDirectionList(this.file_explorer_container);
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
      this.hide = false;
    }
  }

  getDirectory(){
    return new Promise((resolve, reject)=>{
      window.mFile.openFolder("./", (mess)=>{
        resolve(mess);
      });
    })
  }

  renderDirectionList(directionContainer){
    if(directionContainer){
      const direction_container = document.createElement("div");
      direction_container.style['display'] = "flex";
      direction_container.style['flex-direction'] = "column";
      direction_container.style['margin-top'] = "30px";
      this.getDirectory().then(m => {
        if(m){
          for (let file of m){
            let direction_span = document.createElement("span");
            direction_span.style['padding'] = "5px 0";
            direction_span.style['border'] = "1px solid red";
            direction_span.style['font-size'] = "0.8rem";
            direction_span.textContent = file;
            direction_container.append(direction_span);
          }
        }
        directionContainer.append(direction_container);
      });
    }
  }
}
