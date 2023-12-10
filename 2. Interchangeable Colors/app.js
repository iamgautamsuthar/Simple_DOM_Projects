const btns = document.querySelectorAll(".btn");
const body = document.body;


btns.forEach((btn) => {
    btn.addEventListener("click", () => {
        color = btn.value;
        changeBackground(color);
    });
});


const changeBackground = (color) => {
    body.className = "";

    switch (color) {
        case "purple":
            body.classList.add("purple");
            break;
        case "blue":
            body.classList.add("blue");
            break;
        case "red":
            body.classList.add("red");
            break;
        case "green":
            body.classList.add("green");
            break;
        default:
            body.classList.add("yellow");
            break;
    }
};
