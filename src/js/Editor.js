export class Editor{
  constructor(){
    this.editor_container = null;
    this.buffer = ["d", "d"];
  }

  render(root, width, height){
    this.editor_container = document.createElement("div");
    this.editor_container.id = "editor_container";
    this.editor_container.style['width'] = `${width}px`;
    this.editor_container.style['height'] = `${height}px`;
    // this.editor_container.style['background-color'] = "blue";
    this.relocation_flag = false;
    this.start(this.editor_container);
    root.append(this.editor_container);
  }

  start(editor_root){
    const paragraph = document.createElement("div");
    paragraph.style['position'] = "relative";
    // this.buffer.forEach((buff, idx) => {
    //   console.log(buff)
    // });

    for(const [idx, buff] of this.buffer.entries()){
      //console.log(idx)
    }

    // let r = document.createElement("span");
    // // r.setAttribute("cursor-start", "");
    // r.textContent = "d";
    // paragraph.append(r);
    editor_root.append(paragraph);
  }

  resize(width, height){
    if(width){
      this.editor_container.style['width'] = `${width}px`;
    }
    if(height){
      this.editor_container.style['height'] = `${height}px`;
    }
  }

  relocation(){
    if(!this.relocation_flag){
      this.editor_container.style['margin-left'] = "300px";
      this.relocation_flag = true;
    }
    else{
      this.editor_container.style['margin-left'] = "0px";
      this.relocation_flag = false;
    }
  }
}
