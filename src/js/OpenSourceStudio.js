import {Workspace} from './Workspace.js';
import {FileExplorer} from './FileExplorer.js';
import {Size} from './Component.js';

class OpenSourceStudio{
  constructor(rootElement){
    this.root = rootElement;
    this.editorMode = "Normal";
    this.file_explorer = null;
    this.FILE_EXPLORER_WIDTH = 300;
    this.width = 0;
    this.control_key_active = false;
    this.workspace = null;
    this.toogle_file_explorer = false;
  }

  init(){
    this.width = this.root.offsetWidth;
    this.init_file_explorer();
    this.workspace = new Workspace();
    this.workspace.init_workspace(this.root);
    this.init_events();
  }

  init_file_explorer(){
    this.file_explorer = new FileExplorer(this.root, this.FILE_EXPLORER_WIDTH,
      this.root.offsetHeight);
  }

  init_events(){
    window.addEventListener("resize", ()=>{
      if(this.file_explorer){
        this.file_explorer.resize(null, this.root.offsetHeight);
      }
      if(this.workspace){
        this.workspace.resize(this.root.offsetWidth,
          this.root.offsetHeight - 30);
      }
    });
    window.addEventListener("keydown", (key_event)=>{
      if(key_event.key == "Control"){
        this.control_key_active = true;
      }

      if(key_event.key == "b" && this.control_key_active){
        this.file_explorer.toogle(this.root);
        this.workspace.resize(this.width, this.root.offsetHeight - 30);
      }
    });
    window.addEventListener("keyup", (key_event)=>{
      if(key_event.key == "Control"){
        this.control_key_active = false;
      }
    });
  }

  change_editor_mode(mode){
    this.editorMode = mode;
  }
}

export default OpenSourceStudio;
