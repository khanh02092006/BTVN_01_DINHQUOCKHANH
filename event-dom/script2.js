const username = document.querySelector(".usernameinput")
const address = document.querySelector(".addressinput")
const password = document.querySelector(".passwordinput")
const rowmessname = document.querySelector(".msg1");
const rowmessadrees = document.querySelector(".msg2");
const rowmesspassword = document.querySelector(".msg3");
const sumbit = document.querySelector(".Submit");

const clear = document.querySelector(".clear")
const resultBox = document.querySelector(".result");
const rName = document.querySelector(".r-name");
const rAddress = document.querySelector(".r-address");
const rPassword = document.querySelector(".r-password");
const errpassworrk = document.querySelector(".check_passwor")
const errnamekytu = document.querySelector(".check_ten")
const checkboxshow = document.querySelector(".show-password")
const validate = (input, err) => {
  input.addEventListener("input", () => {
    err.style.display = input.value.trim() === "" ? "block" : "none";
  })
}
checkboxshow.addEventListener("change", () => {
  if (checkboxshow.checked) {
    password.type = "text"

  } else {
    password.type = "password"
  }
})
validate(username, rowmessname);
validate(address, rowmessadrees);
validate(password, rowmesspassword);
const checksumbit = () => {
  const ten = username.value
  const matkhau = password.value;
  const diachi = address.value

  const namevalidate = ten.trim() !== "" && ten.length >= 4 && ten.length < 20
  const passwordvalide = matkhau.trim() !== "" && matkhau.length >= 6
  const addressvalide = diachi.trim() !== ""
  if (namevalidate && passwordvalide && addressvalide) {
    sumbit.style.display = "block"
  } else {
    sumbit.style.display = "none"
  }

}

password.addEventListener("input", () => {
  if (password.value.length < 6) {
    errpassworrk.style.display = "block"
  } else {
    errpassworrk.style.display = "none"
  }
  if (password.value.trim() === "") {
    errpassworrk.style.display = "none"
  }
  checksumbit()
})
username.addEventListener("input", () => {
  if (username.value.length < 4 || username.value.length > 20) {
    errnamekytu.style.display = "block"

  } else {
    errnamekytu.style.display = "none"
  }
  if (username.value.trim() === "") {
    errnamekytu.style.display = "none"
  }
  checksumbit();
})
sumbit.addEventListener("click", (e) => {
  e.preventDefault();
  let check = true
  const ten = username.value
  const matkhau = password.value
  const diachi = address.value
  rowmessname.style.display = "none";
  rowmessadrees.style.display = "none";
  rowmesspassword.style.display = "none";
  if (ten.trim() === "") {
    rowmessname.style.display = "block";
    errnamekytu.style.display = "none"
    check = false
  }
  if (matkhau === "") {
    rowmesspassword.style.display = "block";
    check = false
  }
  if (diachi.trim() === "") {
    rowmessadrees.style.display = "block";
    check = false
  }
  if (matkhau.length < 6) {
    errpassworrk.style.display = "block";
    check = false
  }

  if (check) {
    rName.textContent = username.value;
    rAddress.textContent = address.value
    rPassword.textContent = password.value
    resultBox.style.display = "block"


    username.value = ""
    password.value = ""
    address.value = ""
  }
  if (ten.length < 4 || ten.length > 20) {
    errnamekytu.style.display = "block"
    check = false

  }


})
const btnclear = () => {
  const have = username.value.trim() !== "" ||
    address.value.trim() !== "" ||
    password.value.trim() !== "";
  clear.style.display = have ? "block" : "none";

}

[username, address, password].forEach((input) => {
  input.addEventListener("input", btnclear)
})
clear.addEventListener("click", () => {
  username.value = "";
  address.value = "";
  password.value = ""
  rowmessadrees.style.display = "none"
  rowmessname.style.display = "none"
  rowmesspassword.style.display = "none"
  clear.style.display = "none";
  checksumbit();
})





