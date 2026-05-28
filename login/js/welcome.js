document.addEventListener("DOMContentLoaded", function () {

    const user = localStorage.getItem("username");

    const userInfo = document.getElementById("userInfo");
    const authBtn = document.getElementById("authBtn");

    function goLogin() {
        window.location.href = "login/index.html";
    }

    function logout() {
        console.log("logout jalan");
        localStorage.removeItem("username");
        location.reload();
    }

    if (user) {
        userInfo.innerText = "Halo, " + user;
        authBtn.innerText = "Logout";
        authBtn.addEventListener("click", logout);
    } else {
        userInfo.innerText = "Belum login";
        authBtn.innerText = "Login";
        authBtn.addEventListener("click", goLogin);
    }

});