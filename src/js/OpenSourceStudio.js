import {AdvancedMenu} from './AdvancedMenu.js';
import {Size} from './Component.js';

class OpenSourceStudio{
  constructor(rootElement){
    this.root = rootElement;
    //this.advancedMenu = new AdvancedMenu(this.root, new Size(this.root.offsetWidth, 30));
  }

  init(){
    const advancedMenu = new AdvancedMenu(this.root, new Size(this.root.offsetWidth, 30));
    advancedMenu.initMenu();
  }
}

export default OpenSourceStudio;
