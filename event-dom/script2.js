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
const hiddenPassword = document.querySelector(".hidden-password")
const formField = document.querySelector(".formfiead")
const profile = document.querySelector(".profile")
const pUsername = document.querySelector(".p-username")
const pAddress = document.querySelector(".p-address")
const profileName = document.querySelector(".profile-name")
const logout = document.querySelector(".logout")
const display = document.querySelector(".display")

const userName = sessionStorage.getItem("User_Name");
const addressProfile = sessionStorage.getItem("ADDRESS");

const showInfomation = () => {
  profileName.innerText = userName;
  pUsername.innerText = userName;
  pAddress.innerText = addressProfile;
};

const validate = (input, err) => {
  input.addEventListener("input", () => {
    err.style.display = input.value.trim() === "" ? "block" : "none";
  })
}

logout.addEventListener("click", ()=>{
  sessionStorage.removeItem("User_Name")
  sessionStorage.removeItem("ADDRESS")
  window.location.reload()
})

checkboxshow.addEventListener("click", () => {
  password.type = "text"
  checkboxshow.style.display = "none"
  hiddenPassword.style.display = "block"
})

if(userName){
  formField.style.display = "none"
  showInfomation()
}else{
  formField.style.display = "block"
  profile.style.display = "none"
}

hiddenPassword.addEventListener("click", () => {
  password.type = "password"
  hiddenPassword.style.display = "none"
  checkboxshow.style.display = "block"
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
    sumbit.disabled = false;
  } else {
    sumbit.disabled = true;
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
  errnamekytu.style.display = "none";
  errpassworrk.style.display = "none";

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
    checksumbit()
    formField.style.display = "none"
    profile.classList.add("show")

    sessionStorage.setItem("User_Name", username.value)
    sessionStorage.setItem("ADDRESS", address.value)
    window.location.reload()
    showInfomation()
  }else{
    profile.classList.add("hidden")
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
  errnamekytu.style.display = "none"
  errpassworrk.style.display = "none"
  clear.style.display = "none";
  checksumbit();
})


//  toán tử 3 ngôi
// a !== 5 ? a =1 : a=7
// ?? 
// ?

// session storage
// lưu trữ dữ liệu 
// độc lập mỗi 1 phiên làm việc ko liên quan đến phiên khác

// cookie
// lưu dữ liệu

cookieStore.set({ name: "USERNAME", value: "TONY", expires:  5*1000})

const getCokkit = async()=>{
  cookieStore.get("USERNAME").then((data)=>{
    // console.log(data);
  })
}
getCokkit()
// const queue = [1,2,3,4];
// queue[0]

// const stack = [5,4,3,2,1]
// stack[0]
// // thêm vào cuối hàng
// queue.push(1);
// queue.push(2);
// queue.push(3);
// queue.push(4);
// queue.push(5);

// // lấy ra đầu hàng
// const first = queue.shift();


// // bất đồng bộ

// console.log(("A"));

// setTimeout(()=>{
//   console.log("B");
  
// }, 0)

// setTimeout(()=>{
//   console.log("C");
  
// }, 0)

// // (()=>{
// //   console.log("D");
// // })()


// setTimeout(()=>{
//   b =30
  
// }, 1000)

// setTimeout(()=>{
  // a = 20
// }, 500)

// console.log thông tin người dùng);

// setTimeout(()=>{
//   console.log("G");
  
// }, 200)

// console.log("j");

// // duc: A - D - H - J - B - C - G - F - E
// // dung: A - D - H - J - B - c - G - F - E
// // khanh: A - D - H - J - B - c - G - F - E

// promise - async - await // lời hứa
const count = 20
let myPromise = new Promise((resolve, reject) => {
  fetch(`https://zelda.fanapis.com/api/games?limit=${count}`)
    .then((response) => {
      console.log(response);
      
      if (!response.ok) {
        reject(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      resolve(data);
    })
    .catch((err) => {
      reject(err);
    });
});

myPromise
  .then((data) => {
    console.log(data);
    data.data.map((item) => {
      const h1 = document.createElement("h1");
      const p = document.createElement("p");
      h1.innerText = item.name;
      h1.style.color = "red"
      p.innerText = item.description
      display.appendChild(p);
      display.appendChild(h1);
    });
  })
  .catch((err) => {
    console.error(err);
  });


// const API_USER = async ()=>{
//   const data = await fetch("/https: server.com")
// }