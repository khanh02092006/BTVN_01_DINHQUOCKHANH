const addusser = document.querySelector('.btn-primary');
const userGrid = document.querySelector('.user-grid');

const featchUser = async () => {
    const res = await fetch("https://69606493e7aa517cb795f700.mockapi.io/users?limit=12");
    res.json().then((data) => {
        console.log("data11111", data);
        console.log(data.length)

        userGrid.innerHTML = "";

        data.forEach((item) => {
            userGrid.innerHTML += `
            <div class=" card" id="${item.id}">
          <img src="${item.avatar}" alt="${item.name}">
          <h3>${item.name}</h3>
          <p>${item.createdAt} </p>
          <div class="actions">
            <button class="btn-success">
              <span><i class="fa-solid fa-pen"></i></span> Update
            </button>
            <button class="btn-danger">
              <span><i class="fa-solid fa-trash-can"></i></span> Delete
            </button>
          </div>
        </div>`



        });
    });
};
userGrid.addEventListener("click", (e) => {
    const card = e.target.closest(".card");
    if (!card) {
        return
    };
    if (e.target.closest(".btn-danger") || e.target.closest(".btn-success")) return;

    const cardId = card.id;
    if (!cardId) return;

    window.location.href = `profile.html?id=${cardId}`;
});
userGrid.addEventListener("click", (e) => {
    const deletebtn = e.target.closest(".btn-danger");
    if (!deletebtn) return;


    const card = deletebtn.closest(".card");
    if (!card) return;

    const cardId = card.id;
    if (!cardId) return;

    const featchdelete = async (id) => {
        await fetch(`https://69606493e7aa517cb795f700.mockapi.io/users/:${id}`, {
            method: "DELETE",
        });

        card.remove();
        console.log("card", card)
    };

    featchdelete(cardId);
});


featchUser();
const modal = document.getElementById("addModal");
const addForm = document.getElementById("addForm");
const closeModal = document.getElementById("closeModal");


addusser.addEventListener("click", () => {
    modal.style.display = "block";
    addForm.reset();
});


closeModal.addEventListener("click", () => {
    modal.style.display = "none";
});


// addForm.addEventListener("submit", async (e) => {
//   e.preventDefault();

//   const payload = {
//     name: document.getElementById("name").value,
//     username: document.getElementById("username").value,
//     knownIps: [
//       document.getElementById("ip1").value,
//       document.getElementById("ip2").value,
//     ],
//     profile: {
//       firstName: document.getElementById("firstName").value,
//       lastName: document.getElementById("lastName").value,
//       staticData: document
//         .getElementById("staticData")
//         .value
//         .split(",")
//         .map(Number),
//     },
//   };

//   await fetch("https://69606493e7aa517cb795f700.mockapi.io/users", {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify(payload),
//   });

//   modal.style.display = "none";
//   featchUser(); // load lại list
// });
const nameinput = document.getElementById("name");
const username = document.getElementById("username");
const ip1 = document.getElementById("ip1");
const ip2 = document.getElementById("ip2");
const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const staticData = document.getElementById("staticData");
const key_username = "USERNAMEUSER";

const setLocalStoreage = (key, value) => {
    localStorage.setItem(key, value);
};

const getLocalStoreage = (key) => {
    localStorage.getItem(key);
};
addForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const payload = {
        name: nameinput.value,
        username: username.value,
        knownIps: [
            ip1.value,
            ip2.value,
        ],
        profile: {
            firstName: firstName.value,
            lastName: lastName.value,
            staticData: staticData.value.split(",").map(Number),
        },
    };
    const featchAddUser = async (data) => {
        await fetch("https://69606493e7aa517cb795f700.mockapi.io/users", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        });

    };
    featchAddUser(payload);
});
