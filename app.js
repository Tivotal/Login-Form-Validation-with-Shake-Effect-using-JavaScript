/* Created by Tivotal */

let form = document.querySelector("form");
let eField = document.querySelector(".email");
let eInput = eField.querySelector("input");
let pField = document.querySelector(".password");
let pInput = pField.querySelector("input");

function validateEmail() {
  //pattern for email to match with
  let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

  //if email do not match with pattern
  if (!eInput.value.match(pattern)) {
    //adding error class to field
    eField.classList.add("error");

    //removing valid class
    eField.classList.remove("valid");

    //changing error text
    let errorText = eField.querySelector(".error-text");

    eInput.value == ""
      ? (errorText.innerText = "Email can't be empty")
      : (errorText.innerText = "Email is invalid");
  } else {
    //remove error class to field
    eField.classList.remove("error");

    //adding valid class
    eField.classList.add("valid");
  }
}

function validatePass() {
  //if password length is less than 6
  if (pInput.value.length < 6) {
    //adding error class to field
    pField.classList.add("error");

    //removing valid class
    pField.classList.remove("valid");

    //changing error text
    let errorText = pField.querySelector(".error-text");

    errorText.innerText = "Password is short";
  } else {
    //remove error class to field
    pField.classList.remove("error");

    //adding valid class
    pField.classList.add("valid");
  }
}

form.onsubmit = (e) => {
  //prevent default behaviuor
  e.preventDefault();

  //if the email or password values is empty,
  //adding shake class to fields
  //if value is not empty validating the values
  if (eInput.value == "") {
    eField.classList.add("shake");
  } else {
    validateEmail();
  }

  if (pInput.value == "") {
    pField.classList.add("shake");
  } else {
    validatePass();
  }

  //removing shake class after 500ms
  setInterval(() => {
    eField.classList.remove("shake");
    pField.classList.remove("shake");
  }, 500);

  //if user entered value are valid
  if (
    eField.classList.contains("valid") &&
    pField.classList.contains("valid")
  ) {
    //if both values are valid
    //redirecting user to url where we need to submit the form
    window.location.href = form.getAttribute("action");
  }
};

//when user entered the values
eInput.onkeyup = () => {
  validateEmail();
};

pInput.onkeyup = () => {
  validatePass();
};
