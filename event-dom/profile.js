const profileAvatar = document.querySelector(".profile-avatar-img");
const profileUsername = document.querySelector(".profile-username");
const profileEmail = document.querySelector(".profile-email");

// const renderProfile = (data) => {
//   profileAvatar.setAttribute("src", data.image);
//   profileUsername.innerText = data.username;
//   profileEmail.innerText = data.email;
//   console.log("data", data)
// };

// const user = localStorage.getItem("USER")
// const token = localStorage.getItem("TOKEN")

// renderProfile(JSON.parse(user))
const urlparams = new URLSearchParams(window.location.search);
const userId = urlparams.get("id");
if (!userId) {
  alert(" không tìm thấy dữ liệu của profile này");
} else {
  const fetchProfile = async () => {

    const respon = await fetch(`https://69606493e7aa517cb795f700.mockapi.io/users/${userId}`);
    const data = await respon.json();
    profileAvatar.setAttribute("src", data.avatar);
    profileUsername.innerText = data.name;
    profileEmail.innerText = data.createdAt;
    console.log("data", data);
  };
  fetchProfile();
}

