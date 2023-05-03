export class Tabs{
  static createTab(height){
    const tab = document.createElement("div");
    tab.classList.add("tabs");
    tab.style["height"] = `${height}px`;
    tab.innerHTML = `
      <div></div>
      <span style="text-align: center;">New Tab</span>
      <button class="close-tab-button">
        <svg width='17' height='17' viewBox='0 0.9 23 23' style="margin-left: -5px;">
          <line x1='4' x2='16' y1='5' y2='16' class='tab-close' stroke-width='1' />
          <line x1='16' x2='4' y1='5' y2='16' class='tab-close' stroke-width='1' />
        </svg>
      </button>
    `;
    return tab;
  }
}
