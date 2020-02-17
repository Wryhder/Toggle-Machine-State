$(window).load(function () {

    var container = $("#universe-container"),
        universe = $("#universe"),
        solarsys = $("#solar-system");

    var init = function () {
        container.removeClass('opening').addClass("view-3D").delay(2000).queue(function () {
            $(this).addClass("set-speed");
            $(this).dequeue();
        });
    };

    // var setView = function (view) { universe.removeClass().addClass(view); };

    // $(".set-view").click(function () { body.toggleClass("view-3D view-2D"); });
    // $(".set-zoom").click(function () { body.toggleClass("zoom-large zoom-close"); });
    // $(".set-speed").click(function () { setView("scale-stretched set-speed"); });
    // $(".set-size").click(function () { setView("scale-s set-size"); });
    // $(".set-distance").click(function () { setView("scale-d set-distance"); });

    init();


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
});