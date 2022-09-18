// const nameInput = document.querySelector('input[name="name"]');

// nameInput.addEventListener("invalid", () => {
//   nameInput.setCustomValidity("Please enter your name");
// });

document.addEventListener(
  "blur",
  (event) => {
    console.log(event.target.validity);
    const isValid = event.target.validity.valid;
    const message = event.target.validationMessage;
    console.log(event.target);
    const connectedValidationId = event.target.getAttribute("aria-describedby");
    const connectedValidation = connectedValidationId
      ? document.getElementById(connectedValidationId)
      : false;

    if (connectedValidation && message && !isValid) {
      connectedValidation.innerText = message;
    } else {
      connectedValidation.innerText = "";
    }
  },
  true
);
