const addusser = document.querySelector('.btn-primary');
const userGrid = document.querySelector('.user-grid');
const modal = document.getElementById("addModal");
const addForm = document.getElementById("addForm");
const closeModal = document.getElementById("closeModal");
const nameinput = document.getElementById("name");
const username = document.getElementById("username");
const ip1 = document.getElementById("ip1");
const ip2 = document.getElementById("ip2");
const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const staticData = document.getElementById("staticData");
const key_username = "USERNAMEUSER";
const featchUser = async () => {
    const res = await fetch("https://69606493e7aa517cb795f700.mockapi.io/users?limit=12");
    res.json().then((data) => {

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
let editUserId = null;

userGrid.addEventListener("click", async (e) => {
    const card = e.target.closest(".card");
    if (!card) return;
    const id = card.id;


    if (e.target.closest(".btn-danger")) {
        await featchdelete(id, card);
        return;
    }




    window.location.href = `profile.html?id=${id}`;
});

const featchdelete = async (id, card) => {
    await fetch(`https://69606493e7aa517cb795f700.mockapi.io/users/${id}`, {
        method: "DELETE",
    });

    card.remove();

};

featchUser();



addusser.addEventListener("click", () => {
    modal.style.display = "block";
    addForm.reset();
});


closeModal.addEventListener("click", () => {
    modal.style.display = "none";
});





const setLocalStoreage = (key, value) => {
    localStorage.setItem(key, value);
};

const getLocalStoreage = (key) => {
    localStorage.getItem(key);
};
addForm.addEventListener("submit", async (e) => {
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

    await featchAddUser(payload);
    alert(" Thêm user thành công!");

    modal.style.display = "none";
    featchUser();
});
const featchAddUser = async (data) => {
    await fetch("https://69606493e7aa517cb795f700.mockapi.io/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
    });

};

const featchUpdateUser = async (id, data) => {
    const res = await fetch(
        `https://69606493e7aa517cb795f700.mockapi.io/users/${id}`,
        {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        }
    );

    return res.json();
};

