export class Tabs{
  static createTab(height){
    const tab = document.createElement("div");
    tab.classList.add("tabs");
    tab.style["height"] = `${height}px`;

    const iconDiv = document.createElement("div");

    const tabText = document.createElement("span");
    tabText.textContent = "New Tab";
    tabText.style["text-align"] = "center";

    const closeTabButton = document.createElement("button");
    closeTabButton.style["width"] = "20px";
    closeTabButton.style["height"] = "20px";
    closeTabButton.style["margin-right"] = "-40px";
    closeTabButton.innerHTML = `
    <svg width='17' height='17' viewBox='0 0.9 23 23' style="margin-left: -5px;">
      <line x1='4' x2='16' y1='5' y2='16' class='tab-close' stroke-width='1' />
      <line x1='16' x2='4' y1='5' y2='16' class='tab-close' stroke-width='1' />
    </svg>
    `;

    tab.append(iconDiv, tabText, closeTabButton);

    return tab;
  }
}
