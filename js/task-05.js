

const textInput = document.querySelector("#name-input");
const output = document.querySelector("#name-output");
const defaultValue = "Anonymous";
textInput.addEventListener("input", (event) => {
    if (event.target.value != "") {
        output.textContent = event.currentTarget.value;
    } else {
       output.textContent = defaultValue;
  }
});



