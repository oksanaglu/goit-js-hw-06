// const inputRowEl = document.querySelector("#font-size-control");
// const inputTextEl = document.querySelector("#text");
  
// const handleInput = () => {
//   inputTextEl.style.fontSize = `${inputRowEl.value}px`;
// };

// inputRowEl.addEventListener("input", handleInput);




const refs = {
  input: document.querySelector("#font-size-control"),
  nameLabel: document.querySelector("#text"),
}

refs.input.addEventListener("input", onInputChange);

function onInputChange(event) {
  console.log(event.currentTarget.value)
  refs.nameLabel.textContent = event.currentTarget.value;
}