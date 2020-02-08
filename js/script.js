
const btn = document.querySelector('.off');

const MACHINE_STATE = {
    0: "Machine is off",
    1: "Machine is on"
};

function toggleButtonText(text) {
    btn.textContent = text;
}

btn.addEventListener('click', function () {
    btn.textContent === MACHINE_STATE[0] ? toggleButtonText(MACHINE_STATE[1]) : toggleButtonText(MACHINE_STATE[0]);
});