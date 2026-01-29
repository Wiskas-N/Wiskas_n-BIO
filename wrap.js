document.addEventListener("DOMContentLoaded", () => {
    const toggle = document.getElementById("wrapToggle");
    const links = document.querySelector(".links-list");
    const hint = document.querySelector(".links-hint");

    toggle.textContent = "Ссылки ⯈";

    toggle.addEventListener("click", () => {
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
    });
});
