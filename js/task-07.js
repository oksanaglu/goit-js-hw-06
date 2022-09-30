
const inputRowEl = document.querySelector("#font-size-control");
const inputTextEl = document.querySelector("#text");
  
const handleInput = () => {
  inputTextEl.style.fontSize = `${inputRowEl.value}px`;
};

inputRowEl.addEventListener("input", handleInput);



