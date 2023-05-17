import {AdvancedMenu} from './AdvancedMenu.js';
import {Editor} from './Editor.js';
import {Size} from './Component.js';

export class Workspace{
  constructor(){
    this.advanced_menu = null;
    this.editor = null;
    this.height = 0;
    this.ADVANCED_MENU_HEIGHT = 30;
  }

  init_workspace(root){
    this.init_advanced_menu(root);
    this.init_editor(root);
  }

  init_advanced_menu(root){
    this.advanced_menu = new AdvancedMenu(root,
      new Size(root.offsetWidth, this.ADVANCED_MENU_HEIGHT));
    this.height = root.offsetHeight - this.ADVANCED_MENU_HEIGHT;
    this.advanced_menu.init_menu();
  }

  init_editor(root){
    this.editor = new Editor();
    this.editor.render(root, this.width, this.height);
  }

  resize(width, height){
    if(this.editor){
      this.editor.resize(null, height);
    }
  }
}
