document.addEventListener('DOMContentLoaded', (event) => {
    const chat1 = document.getElementById("chat1");

    chat1.addEventListener('animationend', () => {
        document.getElementById("choose_point").classList.remove("d-none")
    });
});