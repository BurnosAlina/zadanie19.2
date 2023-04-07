function repeatedPasswordCorrection() {
    let firstTypedPassword = document.getElementById("firstTypedPassword");
    let typedPassword1 = firstTypedPassword.value;
    let repeatedPassword = document.getElementById("repeatedPassword");
    let typedPassword2 = repeatedPassword.value;
    let repeatedPasswordCorrection = document.getElementById("repeatedPasswordCorrection");
    if (typedPassword2 !== typedPassword1){
    repeatedPasswordCorrection.innerHTML = "Hasła różnią się od siebie!";
    } else {
    repeatedPasswordCorrection.innerHTML = "";
    }
}

function firstTypedPasswordCorrection (){
  let firstTypedPassword = document.getElementById("firstTypedPassword");
  let password1correction = document.getElementById("password1correction");
  let typedText = firstTypedPassword.value;
  let errorMessages = [];

  if (typedText.length < 8) {
     errorMessages.push("Za krótkie hasło. Min. 8 znaków.");
  }
  if (!/[A-Z]/.test(typedText)) {
     errorMessages.push("Min. 1 duża litera.");
  }
  if (!/[a-z]/.test(typedText)) {
     errorMessages.push("Min. 1 mała litera.");
  }
  if (!/[\W_]/.test(typedText)){
        errorMessages.push("Min. 1 znak specjalny.");
  }
    password1correction.innerHTML = errorMessages.join("<br>");
}

let firstTypedPassword = document.getElementById("firstTypedPassword");
firstTypedPassword.onkeyup = firstTypedPasswordCorrection;
let repeatedPassword = document.getElementById("repeatedPassword");
repeatedPassword.onkeyup = repeatedPasswordCorrection;
