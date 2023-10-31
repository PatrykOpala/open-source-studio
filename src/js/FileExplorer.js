import { Directory } from './Directory.js';
import { Bounds } from './Bounds.js';
export class FileExplorer extends Bounds{
  constructor(root, width, height){
    super()
    this.file_explorer_container = null;
    this.directories_array = [];
    this.hide = true;
    this.windowRoot = root;
    this.file_explorer_width = width;
    this.file_explorer_height = height;
  }

  render(){
    this.file_explorer_container = document.createElement("div");
    this.file_explorer_container.id = "file_explorer_container";
    this.file_explorer_container.style['display'] = "block";
    this.file_explorer_container.style['width'] = `100%`;
    this.file_explorer_container.style['height'] = `${this.file_explorer_height}px`;
    this.file_explorer_container.style['background-color'] = "var(--theme-color)";
    this.renderDirectionList(this.file_explorer_container);
    
    const file_explorer = document.getElementById("file_container");

    file_explorer.style['width'] = `${this.file_explorer_width}px`;
    file_explorer.style['height'] = `${this.file_explorer_height}px`;
    file_explorer.style['transform'] = "translateY(-100%)";
    file_explorer.append(this.file_explorer_container);
  }

  resize(width, height){
    if(width && this.file_explorer_container){
      this.file_explorer_container.style['width'] = `${width}px`;
    }
    if(height && this.file_explorer_container){
      this.file_explorer_container.style['height'] = `${height}px`;
    }
  }

  toogle(){
    if(this.hide){
      this.render();
      this.hide = false;
    }else{
      this.destroy();
      this.hide = true;
    }
  }

  renderDirectionList(directionContainer){
    if(directionContainer){
      const direction_container = document.createElement("div");
      direction_container.style['display'] = "flex";
      direction_container.style['flex-direction'] = "column";
      direction_container.style['margin-top'] = "30px";
      this.get_directory("./").then(ce =>{
        if(this.directories_array.length !== 0){
          this.directories_array = [];
          for (let dir of ce){
            let directory = new Directory(dir);
            this.directories_array.push(directory);
          }
        }else{
          // console.log("gggg");
          for (let dir of ce){
            let directory = new Directory(dir);
            this.directories_array.push(directory);
          }
        }
      })

      // console.log(this.directories_array);

      // for (let dir of direcctory.get_directories()){
      //   console.log(dir);
      //   let direction_span = document.createElement("span");
      //   direction_span.style['padding'] = "5px 0";
      //   direction_span.style['border'] = "1px solid red";
      //   direction_span.style['font-size'] = "0.8rem";
      //   direction_span.textContent = dir.get_name();
      //   direction_container.append(direction_span);
      // }
      // directionContainer.append(direction_container);
    }
  }

  get_directory(directoryPath){
    return new Promise((resolve, reject)=>{
      window.mFile.openFolder(directoryPath, (mess)=>{
        resolve(mess);
      });
    });
  }

  destroy(){
    this.file_explorer_container.remove();
  }
}
