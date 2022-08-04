const form = document.getElementById("form");
const phone = document.getElementById("phone");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const repassword = document.getElementById("repassword");

function error(input, message) {
  input.className = "form-control is-invalid";
  const div = input.nextElementSibling;
  div.innerText = message;
  div.className = "invalid-feedback";
}

function success(input) {
  input.className = "form-control is-valid";
}

function validateEmail(email) {
  const re =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  return re.test(String(email).toLowerCase());
}

function checkLength(input, min, max) {
  if (input.value.length < min) {
    error(input, `${input.id} en az ${min} karakter olmalıdır!`);
  } else if (input.value.length > max) {
    error(input, `${input.id} en fazla ${max} karakter olmalıdır!`);
  } else {
    success(input);
  }
}

function checkRequired(inputs) {
  inputs.forEach(function (input) {
    if (input.value === "") {
      error(input, `${input.id} is required`);
    } else {
      success(input);
    }
  });
}

function checkPassword(input1,input2){
    if(input1.value !== input2.value){
        error(repassword,"Parolalar eşleşmiyor!");
        error(password,"Parolalar eşleşmiyor!");
    }
}
form.addEventListener("submit", function (e) {
  e.preventDefault();

  checkRequired([username, email, password, repassword]);
  checkLength(username, 7, 15);
  checkLength(password, 8, 15);
  checkPassword(password,repassword);
});
