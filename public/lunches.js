const changeColor = (element) => {
    let active = document.querySelector(".nav-item.active");
    active.classList.remove("active");
    element.classList.add("active");
};
