
const loginModal = document.querySelector(".modal-overlay");
const registerModal = document.querySelector(".register-modal-overlay");
const loginCloseBtn = document.querySelector(".modal-close");
const registerCloseBtn = document.querySelector(".register-modal-close");
const openLoginBtn = document.querySelector(".btn-login-open");
const openRegisterBtn = document.querySelector(".btn-register-open");

const loginEmail = document.querySelector("#emailInput");
const loginPassword = document.querySelector("#passwordInput");
const loginMsgEmail = document.querySelector(".msg1");
const loginMsgPassword = document.querySelector(".msg2");
const loginSubmitBtn = document.querySelector(".btn-login");
const registerName = document.querySelector("#registerName");
const registerEmail = document.querySelector("#registerEmail");
const registerPassword = document.querySelector("#registerPassword");
const registerConfirmPassword = document.querySelector("#registerConfirmPassword");
const registerMsgName = document.querySelector(".register-msg-name");
const registerMsgEmail = document.querySelector(".register-msg-email");
const registerMsgPassword = document.querySelector(".register-msg-password");
const registerMsgConfirm = document.querySelector(".register-msg-confirm");
const registerSubmitBtn = document.querySelector(".btn-register");


openLoginBtn.addEventListener("click", () => {
    loginModal.style.display = "block";
    registerModal.style.display = "none";
});

openRegisterBtn.addEventListener("click", () => {
    registerModal.style.display = "block";
    loginModal.style.display = "none";
});

loginCloseBtn.addEventListener("click", () => {
    loginModal.style.display = "none";
});

registerCloseBtn.addEventListener("click", () => {
    registerModal.style.display = "none";
});


loginModal.addEventListener("click", (e) => {
    if (e.target === loginModal) {
        loginModal.style.display = "none";
    }
});

registerModal.addEventListener("click", (e) => {
    if (e.target === registerModal) {
        registerModal.style.display = "none";
    }
});


registerSubmitBtn.addEventListener("click", (e) => {
    e.preventDefault();


    const name = registerName.value.trim();
    const email = registerEmail.value.trim();
    const password = registerPassword.value.trim();
    const confirmPassword = registerConfirmPassword.value.trim();


    registerMsgName.style.display = "none";
    registerMsgEmail.style.display = "none";
    registerMsgPassword.style.display = "none";
    registerMsgConfirm.style.display = "none";


    let isValid = true;

    if (name === "") {
        registerMsgName.textContent = "Tên không được để trống";
        registerMsgName.style.display = "block";
        isValid = false;
    }

    if (email === "") {
        registerMsgEmail.textContent = "Email không được để trống";
        registerMsgEmail.style.display = "block";
        isValid = false;
    } else if (!validateEmail(email)) {
        registerMsgEmail.textContent = "Email không hợp lệ";
        registerMsgEmail.style.display = "block";
        isValid = false;
    }

    if (password === "") {
        registerMsgPassword.textContent = "Mật khẩu không được để trống";
        registerMsgPassword.style.display = "block";
        isValid = false;
    } else if (password.length < 6) {
        registerMsgPassword.textContent = "Mật khẩu phải có ít nhất 6 ký tự";
        registerMsgPassword.style.display = "block";
        isValid = false;
    }

    if (confirmPassword === "") {
        registerMsgConfirm.textContent = "Vui lòng xác nhận mật khẩu";
        registerMsgConfirm.style.display = "block";
        isValid = false;
    } else if (password !== confirmPassword) {
        registerMsgConfirm.textContent = "Mật khẩu không khớp";
        registerMsgConfirm.style.display = "block";
        isValid = false;
    }

    if (!isValid) return;


    const users = JSON.parse(localStorage.getItem("users") || "[]");
    const existingUser = users.find(u => u.email === email);

    if (existingUser) {
        registerMsgEmail.textContent = "Email đã được đăng ký";
        registerMsgEmail.style.display = "block";
        return;
    }


    const newUser = {
        name: name,
        email: email,
        password: password,
        createdAt: new Date().toISOString()
    };

    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));


    alert("Đăng ký thành công! Bạn có thể đăng nhập ngay bây giờ.");


    registerName.value = "";
    registerEmail.value = "";
    registerPassword.value = "";
    registerConfirmPassword.value = "";


    registerModal.style.display = "none";
    loginModal.style.display = "block";
});


loginSubmitBtn.addEventListener("click", (e) => {
    e.preventDefault();

    const email = loginEmail.value.trim();
    const password = loginPassword.value.trim();


    loginMsgEmail.style.display = "none";
    loginMsgPassword.style.display = "none";

    // Validation
    if (email === "") {
        loginMsgEmail.style.display = "block";
        return;
    }

    if (password === "") {
        loginMsgPassword.style.display = "block";
        return;
    }


    const users = JSON.parse(localStorage.getItem("users") || "[]");
    const user = users.find(u => u.email === email && u.password === password);

    if (user) {
        alert(`Đăng nhập thành công! Chào mừng ${user.name}`);


        localStorage.setItem("currentUser", JSON.stringify(user));


        loginEmail.value = "";
        loginPassword.value = "";


        loginModal.style.display = "none";


        updateUIForLoggedInUser(user);
    } else {
        loginMsgPassword.textContent = "Email hoặc mật khẩu không đúng";
        loginMsgPassword.style.display = "block";
    }
});


function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function updateUIForLoggedInUser(user) {
    openLoginBtn.style.display = "none";
    openRegisterBtn.style.display = "none";


    const navbar = document.querySelector(".navbar-header");
    const welcomeMsg = document.createElement("div");
    welcomeMsg.className = "welcome-user";
    welcomeMsg.innerHTML = `<span style="color: var(--btncontact); font-weight: 600;">Xin chào, ${user.name}!</span>`;
    navbar.appendChild(welcomeMsg);
}


window.addEventListener("DOMContentLoaded", () => {
    const currentUser = localStorage.getItem("currentUser");
    if (currentUser) {
        const user = JSON.parse(currentUser);
        updateUIForLoggedInUser(user);
    }
});