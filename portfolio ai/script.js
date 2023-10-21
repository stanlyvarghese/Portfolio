const form = document.getElementById("interactive-form");
const formContainer = document.querySelector(".form-container");

form.addEventListener("mousemove", (e) => {
    const xPos = (e.pageX - formContainer.getBoundingClientRect().left) / formContainer.clientWidth;
    const colorValue = Math.floor(xPos * 255);
    formContainer.style.backgroundColor = `rgb(${colorValue}, 255, 255)`;
});
