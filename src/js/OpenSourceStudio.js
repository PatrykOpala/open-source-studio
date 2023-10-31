import {Workspace} from './Workspace.js';

const OpenAtomMode = {
  Normal: "Normal",
  Minimal: "Minimal"
}

class OpenSourceStudio{
  constructor(rootElement){
    this.root = rootElement;
    this.editorMode = OpenAtomMode.Normal;
    this.control_key_active = false;
    this.workspace = null;
  }

  init(){
    this.workspace = new Workspace(this.root.offsetWidth);
    this.workspace.init_workspace(this.root);
    this.init_events();
  }

  init_events(){
    window.addEventListener("resize", ()=>{
      if(this.workspace){
        this.workspace.resize(this.root.offsetWidth, this.root.offsetHeight);
      }
    });
    window.addEventListener("keydown", (key_event)=>{
      if(key_event.key == "Control"){
        this.control_key_active = true;
      }

      if(key_event.key == "b" && this.control_key_active){
        if(this.workspace){
          this.workspace.toogle_file_explorer();
        }
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
