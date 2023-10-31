import {AdvancedMenu} from './AdvancedMenu.js';
import {FileExplorer} from './FileExplorer.js';
import {Editor} from './Editor.js';

export class Workspace{
  constructor(width){
    this.advanced_menu = null;
    this.editor = null;
    this.width = width;
    this.height = 0;
    this.ADVANCED_MENU_HEIGHT = 30;
    this.file_explorer = null;
  }

  init_workspace(root){
    this.init_advanced_menu(root);
    this.init_editor(root);
    this.init_file_explorer(root);
  }

  init_advanced_menu(root){
    this.advanced_menu = new AdvancedMenu(root);
    this.advanced_menu.setSize(root.offsetWidth, this.ADVANCED_MENU_HEIGHT);
    this.height = root.offsetHeight - this.ADVANCED_MENU_HEIGHT;
    this.advanced_menu.init_menu();
  }

  init_file_explorer(root){
    const file_container = document.createElement("div");
    file_container.setAttribute("id", "file_container");
    root.append(file_container);
    this.file_explorer = new FileExplorer(root, 300, this.height);
  }

  init_editor(root){
    this.editor = new Editor();
    this.editor.render(root, this.width, this.height);
  }

  resize(width, height){
    if(this.file_explorer){
      this.file_explorer.resize(width, height);
    }
    if(this.editor){
      this.editor.resize(this.width, height);
    }
  }

  toogle_file_explorer(){
    this.file_explorer.toogle(this.root);
    if(this.file_explorer.hide){
      this.width = this.width + 300;
      this.editor.resize(this.width);
      this.editor.relocation();
    }else{
      this.width = this.width - 300;
      this.editor.resize(this.width);
      this.editor.relocation();
    }
  }
}
