import {Component} from './Component.js';
import {Tabs} from './Tabs.js';

export class AdvancedMenu extends Component{
  constructor(rootElement, size){
    super(size);
    this._root = rootElement;
  }
  initMenu(){
    this.render(this._root, this.getSize);
    document.getElementById("hide-to-menubar").addEventListener("click", this.hideWindow);
    document.getElementById("min-max").addEventListener("click", this.minMaxWindow);
    document.getElementById("close").addEventListener("click", this.closeWindow);
    // window.addEventListener("resize", ()=>{
    //   this.resizeAdvancedMenu(this._root.offsetWidth, this.getSize.height);
    // });
  }

  resizeAdvancedMenu(newMenuWidth, newMenuHeight){
    const resizeObject = super.resize(newMenuWidth, newMenuHeight);
    if(document.getElementById("advanced-menu-container")){
      document
      .getElementById("advanced-menu-container")
      .style["width"] = `${resizeObject.width}px`;
    }
  }

  render(root, size){
    if(document.getElementById("advanced-menu-container")){
      document.getElementById("advanced-menu-container").remove();
    }
    const advancedContainer = document.createElement("div");
    advancedContainer.id = "advanced-menu-container";
    advancedContainer.classList.add("advancedMenuContainer");
    advancedContainer.style["height"] = `${size.height}px`;

    const adv_div_2 = document.createElement("div");
    adv_div_2.id = "card-container";
    adv_div_2.classList.add("tabs-container");
    adv_div_2.style["height"] = `${size.height}px`;

    // adv_div_2.append();

    const adv_div_3 = document.createElement("div");
    adv_div_3.classList.add("mag");

    const buttonsWriper = document.createElement("div");
    buttonsWriper.classList.add("buttonsWriper");
    buttonsWriper.innerHTML = `
    <button class="windowButton" id="l">l</button>
    <button class="windowButton" id="d">d</button>
    <button class="windowButton" id="r">r</button>

    <button class="windowButton" id="hide-to-menubar">
      <svg width='24' height='19' viewBox='-3 1 24 19'>
        <line x1='2' x2='16' y1='13' y2='13' class="icon" stroke-width='1' />
      </svg>
    </button>

    <button class="windowButton" id="min-max">
      <svg width='24' height='17' viewBox="-6 -4.5 24 19">
        <rect width='12' height='11' class="icon" stroke-width='1' fill='transparent' />
      </svg>
    </button>

    <button class="windowButton" id="close">
      <svg width='24' height='19' viewBox='-2 0.9 24 19'>
        <line x1='4' x2='16' y1='5' y2='16' class="icon" stroke-width='1' />
        <line x1='16' x2='4' y1='5' y2='16' class="icon" stroke-width='1' />
      </svg>
    </button>
    `;

    adv_div_3.append(buttonsWriper);

    advancedContainer.append(adv_div_2, adv_div_3);
    root.append(advancedContainer);
  }

  hideWindow(){
    window.mFile.hideProgram();
  }

  minMaxWindow(){
      // if (e.target.textContent === "⇱"){
      //   e.target.innerHTML = "&#8690;";
      //   return
      // }
      //
      // if(e.target.textContent === "⇲"){
      //   e.target.innerHTML = "&#8689;";
      //   return
      // }
  }

  closeWindow(){
    window.mFile.closeProgram();
  }
}
