const profileAvatar = document.querySelector(".profile-avatar-img");
const profileUsername = document.querySelector(".profile-username");
const profileEmail = document.querySelector(".profile-email");

const renderProfile = (data) => {
  profileAvatar.setAttribute("src", data.image);
  profileUsername.innerText = data.username;
  profileEmail.innerText = data.email;
};

const user = localStorage.getItem("USER")

renderProfile(JSON.parse(user))


