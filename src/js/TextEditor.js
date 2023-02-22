export function initEditor(){
  let editorContainerCount = 0;
  const root = document.getElementById("app");
  const editorContainer = document.createElement("div");
  editorContainer.classList.add("editorContainer");
  editorContainer.append(Editor());
  root.append(editorContainer);
  editorContainerCount = document.querySelector(".editorContainer").offsetHeight - 2 - 2;
  document.querySelector(".countContainer").style.height = `${editorContainerCount}px`;
  window.addEventListener("resize", ()=>{
    editorContainerCount = document.querySelector(".editorContainer").offsetHeight - 2 - 2;
    document.querySelector(".countContainer").style.height = `${editorContainerCount}px`;
  })
}

//651 - 2 - 2

function Editor(){
  const editor = document.createElement("div");
  editor.classList.add("editor");
  editor.append(CountLine());
  return editor;
}

function CountLine(){
  const countContainer = document.createElement("div");
  countContainer.classList.add("countContainer");
  countContainer.append(AddCount(), AddCount(2));
  return countContainer;
}

function AddCount(text = 1){
  let count = document.createElement("span");
  count.classList.add("count");
  count.textContent = `${text}`;
  return count;
}
