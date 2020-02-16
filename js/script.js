
const btn = document.querySelector(".off");

const MACHINE_STATE = {
    0: "Machine is off",
    1: "Machine is on"
};

function toggleButtonText(text) {
    btn.textContent = text;
}

btn.addEventListener('click', function () {
    switch (btn.textContent) {
        case MACHINE_STATE[0]:
            toggleButtonText(MACHINE_STATE[1]);
            btn.classList.replace("off", "on");
            break;
        case MACHINE_STATE[1]:
            toggleButtonText(MACHINE_STATE[0]);
            btn.classList.replace("on", "off");
            break;
    }
});