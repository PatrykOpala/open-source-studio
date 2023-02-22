import {Component, Size} from './Component.js';
import {Tabs} from './Tabs.js';

export class AdvancedMenu extends Component{
  constructor(rootElement, size){
    super(size);
    this._root = rootElement;
    window.addEventListener("resize", ()=>{
      this.resizeAdvancedMenu(this.getSize.width, this.getSize.height);
    });
  }
  initMenu(){
    this.render(this._root, this.getSize);
    document.getElementById("hide-to-menubar").addEventListener("click", this.hideWindow);
    document.getElementById("min-max").addEventListener("click", this.minMaxWindow);
    document.getElementById("close").addEventListener("click", this.closeWindow);
  }

  resizeAdvancedMenu(newMenuWidth, newMenuHeight){
    const resizeObject = super.resize(newMenuWidth, newMenuHeight);
    console.log(resizeObject)
    this.render(this._root, resizeObject);
    document.getElementById("hide-to-menubar").addEventListener("click", this.hideWindow);
    document.getElementById("min-max").addEventListener("click", this.minMaxWindow);
    document.getElementById("close").addEventListener("click", this.closeWindow);
  }

  render(root, size){
    if(document.getElementById("advanced-menu-container")){
      document.getElementById("advanced-menu-container").remove();
    }
    const advancedContainer = document.createElement("div");
    advancedContainer.id = "advanced-menu-container";
    advancedContainer.classList.add("advancedMenuContainer");
    advancedContainer.style["width"] = `${size.width}px`;
    advancedContainer.style["height"] = `${size.height}px`;
    advancedContainer.style["grid-template-columns"] = `${size.width / 1.167}px ${size.width / 7}px`;

    const adv_div_2 = document.createElement("div");
    adv_div_2.id = "card-container";
    adv_div_2.classList.add("tabs-container");
    adv_div_2.style["width"] = `${size.width / 1.167}px`;
    adv_div_2.style["height"] = `${size.height}px`;
    adv_div_2.style["display"] = "grid";
    adv_div_2.style["grid-auto-flow"] = "column";
    adv_div_2.style["grid-auto-columns"] = "265px";
    adv_div_2.style["gap"] = "0px";
    adv_div_2.style["overflow-x"] = "auto";
    adv_div_2.style["overflow-y"] = "hidden";
    adv_div_2.style["overscroll-behavior-inline"] = "contain";

    adv_div_2.append(Tabs.createTab(size.height), Tabs.createTab(size.height),
    Tabs.createTab(size.height), Tabs.createTab(size.height),
    Tabs.createTab(size.height));

    const adv_div_3 = document.createElement("div");
    adv_div_3.style["width"] = "100%";
    adv_div_3.style["background-color"] = "magenta";
    adv_div_3.style["display"] = "flex";
    adv_div_3.style["justify-content"] = "flex-end";

    const buttonsWriper = document.createElement("div");
    buttonsWriper.classList.add("buttonsWriper");

    const buttonHideToMenubar = document.createElement("button");
    buttonHideToMenubar.classList.add("windowButton");
    buttonHideToMenubar.id = "hide-to-menubar";
    buttonHideToMenubar.innerHTML = `<svg width='24' height='19'
     viewBox='-3 1 24 19'>
      <line x1='2' x2='16' y1='13' y2='13' class='icon' stroke-width='1' />
    </svg>`;

    const buttonMinMax = document.createElement("button");
    buttonMinMax.classList.add("windowButton");
    buttonMinMax.id = "min-max";
    buttonMinMax.innerHTML = `<svg width='24' height='17'
     viewBox="-6 -4.5 24 19" style='margin-left: -1px;'>
      <rect width='12' height='11' class='icon' fill='transparent' />
    </svg>`;

    const buttonClose = document.createElement("button");
    buttonClose.classList.add("windowButton");
    buttonClose.id = "close";
    buttonClose.innerHTML = `
      <svg width='24' height='19' viewBox='-2 0.9 24 19'>
        <line x1='4' x2='16' y1='5' y2='16' class='icon' stroke-width='1' />
        <line x1='16' x2='4' y1='5' y2='16' class='icon' stroke-width='1' />
      </svg>`;

    buttonsWriper.append(buttonHideToMenubar, buttonMinMax, buttonClose);

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
