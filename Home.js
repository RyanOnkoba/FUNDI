document.addEventListener("DOMContentLoaded", function() {
    const loginButton = document.querySelector(".button");

    loginButton.addEventListener("mouseover", function() {
        loginButton.classList.add("circular");
    });

    loginButton.addEventListener("mouseout", function() {
        loginButton.classList.remove("circular");
    });
});
