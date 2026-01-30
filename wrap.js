document.addEventListener("DOMContentLoaded", () => {
    const toggle = document.getElementById("wrapToggle");
    const links = document.querySelector(".links-list");
    const hint = document.querySelector(".links-hint");
    const box = document.querySelector(".links-box");

    toggle.textContent = "Ссылки ⯈";

    function switchLinks() {
        const opened = !links.classList.contains("collapsed");

        if (opened) {
            links.classList.add("collapsed");
            toggle.textContent = "Ссылки ⯈";
            hint.textContent = "нажмите чтобы открыть";
        } else {
            links.classList.remove("collapsed");
            toggle.textContent = "Ссылки ⯆";
            hint.textContent = "нажмите чтобы закрыть";
        }
    }

    function openWrap() {
        links.classList.remove("collapsed");
        toggle.textContent = "Ссылки ⯆";
        hint.textContent = "нажмите чтобы закрыть";
    }

    window.openWrap = openWrap;

    toggle.addEventListener("click", (e) => {
        e.stopPropagation();
        switchLinks();
    });

    box.addEventListener("click", (e) => {
        if (e.target.closest(".link-item")) return;
        switchLinks();
    });
});
