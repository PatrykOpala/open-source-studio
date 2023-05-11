import {AdvancedMenu} from './AdvancedMenu.js';
import {Editor} from './Editor.js';
import {FileExplorer} from './FileExplorer.js';
import {Size} from './Component.js';

class OpenSourceStudio{
  constructor(rootElement){
    this.root = rootElement;
    this.editorMode = "Normal";
    this.file_explorer = null;
    this.editor = null;
    this.FILE_EXPLORER_WIDTH = 300;
    this.ADVANCED_MENU_HEIGHT = 30;
    this.width = 0;
    this.height = 0;
    this.control_key_active = false;
  }

  init(){
    this.initFileExplorer();
    let advancedMenu = this.initAdvancedMenu();
    this.initEditor();
    window.addEventListener("resize", ()=>{
      advancedMenu.resizeAdvancedMenu(this.root.offsetWidth,
        this.advanced_menu_height);
      if(this.file_explorer){
        this.file_explorer.resize(null, this.root.offsetHeight);
      }
      if(this.editor){
        this.editor.resize(this.root.offsetWidth - this.FILE_EXPLORER_WIDTH, null);
      }
    });
    window.addEventListener("keydown", (key_event)=>{
      if(key_event.key == "Control"){
        this.control_key_active = true;
      }

      if(key_event.key == "b" && this.control_key_active){
        this.file_explorer.toogle();
      }
    });
    window.addEventListener("keyup", (key_event)=>{
      if(key_event.key == "Control"){
        this.control_key_active = false;
      }
    });
  }

  changeEditorMode(mode){
    this.editorMode = mode;
  }

  initFileExplorer(){
    this.width = this.root.offsetWidth - this.FILE_EXPLORER_WIDTH;
    this.file_explorer = new FileExplorer();
    this.file_explorer.render(this.root, this.FILE_EXPLORER_WIDTH, this.root.offsetHeight);
  }

  initAdvancedMenu(){
    const adm = new AdvancedMenu(this.root,
      new Size(this.root.offsetWidth, this.ADVANCED_MENU_HEIGHT));
    this.height = this.root.offsetHeight - this.ADVANCED_MENU_HEIGHT;
    adm.initMenu();
    return adm;
  }

  initEditor(){
    this.editor = new Editor();
    this.editor.render(this.root, this.width, this.height);
  }
}

export default OpenSourceStudio;
