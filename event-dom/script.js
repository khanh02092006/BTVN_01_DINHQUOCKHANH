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

const validate = (input, err) => {
    input.addEventListener("input", () => {
        err.style.display = input.value.trim() === "" ? "block" : "none";
    })
}
validate(username, rowmessname);
validate(address, rowmessadrees);
validate(password, rowmesspassword);


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
    if (check) {
        rName.textContent = username.value;
        rAddress.textContent = address.value
        rPassword.textContent = password.value
        resultBox.style.display = "block"
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
})





