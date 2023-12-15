document.addEventListener("DOMContentLoaded", function () {
    const passwordInput = document.getElementById("newPassword");
    const togglePasswordButton = document.getElementById("togglePassword");

    togglePasswordButton.addEventListener("click", function () {
        const type =
            passwordInput.getAttribute("type") === "password" ? "text" : "password";
        passwordInput.setAttribute("type", type);

        if (type === "password") {
            togglePasswordButton.className = "fa-solid fa-eye";
        } else {
            togglePasswordButton.className = "fa-solid fa-eye-slash";
        }
    });
});
