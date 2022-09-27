

const form = document.querySelector(".login-form");
const inputs = document.querySelectorAll(".input");



form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  alert("Please, fill in all the fields!");

  const formData = new FormData(event.currentTarget);

  console.log(formData);

  formData.forEach((name, value) => {
    console.log("onFormSubmit -> name", name);
    console.log("onFormSubmit -> value", value);
    

    event.currentTarget.reset();
    
  }); 
  
}






