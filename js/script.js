document.addEventListener("DOMContentLoaded", () => {

    const container = $("#universe-container");
    const btn = document.querySelector(".on");

    const MACHINE_STATE = {
        0: "Machine is off",
        1: "Machine is on"
    };

    const init = function () {
        container.removeClass('opening').addClass("view-3D").delay(2000).queue(function () {
            $(this).addClass("set-speed");
            $(this).dequeue();
        });
    };

    function toggleButtonText(text) {
        btn.textContent = text;
    }

    init();

    btn.addEventListener('click', function () {
        switch (btn.textContent) {
            case MACHINE_STATE[0]:
                toggleButtonText(MACHINE_STATE[1]);
                btn.classList.replace("off", "on");
                container.toggleClass("paused-animation");
                break;
            case MACHINE_STATE[1]:
                toggleButtonText(MACHINE_STATE[0]);
                btn.classList.replace("on", "off");
                container.toggleClass("paused-animation");
                break;
        }
    });
});