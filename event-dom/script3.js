// const search = document.querySelector(".search");
// const iconSearch = document.querySelector(".icon-search");
// const gameName = document.querySelector(".game-name");
// const count = document.querySelector(".count")

// // search.addEventListener("input", (e)=>{
// //   const key = e.target.value.trim()
// //   fetchCharacters(key)
// // })

// iconSearch.addEventListener("click", (e) => {
//   const text = search.value.trim();
//   fetchCharacters(text);
// });

// const fetchCharacters = async (searchName) => {
//   const count = 10
//   const res = await fetch(
//     `https://zelda.fanapis.com/api/games${searchName ? `?name=${searchName}` : ""}${searchName? '&' : '?'}limit=${count}`
//   );

//   res.json().then((data) => {
//     console.log(data);

//     data.data.forEach((item) => {
//       if (searchName === undefined) {
//         return (gameName.innerText = "");
//       }
//       gameName.innerText += item.name;
//     });
//   });
// };

// fetchCharacters();

// api method http post

const btn = document.querySelector(".btn");
const userName = document.querySelector(".userName");
const password = document.querySelector(".password");

const urlLogin = "https://dummyjson.com/auth/login";
const key_token = "TOKEN";
const key_user = "USER";
const token = localStorage.getItem("TOKEN")

const setLocalStoreage = (key, value) => {
  localStorage.setItem(key, value);
};

const getLocalStoreage = (key) => {
  localStorage.getItem(key);
};


const fetchLogin = async (user) => {
  const res = await fetch(urlLogin, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username: user.userName, password: user.password }),
  });

  res.json().then((data) => {
    if (data.accessToken) {
      setLocalStoreage(key_token, data.accessToken);
      setLocalStoreage(key_user, JSON.stringify({
        username: data.username,
        email: data.email,
        image: data.image,
      }));
      alert(`Hi ${data.username} bạn đã đăng nhập thành công`);
      window.location.href = "/event-dom/profile.html";
    }
  });
};

btn.addEventListener("click", (e) => {
  e.preventDefault();
  const user = {
    userName: userName.value,
    password: password.value,
  };
  fetchLogin(user);
});

if(token && window.location.pathname === "/event-dom/index.html"){
    window.location.href= "/event-dom/profile.html"
}