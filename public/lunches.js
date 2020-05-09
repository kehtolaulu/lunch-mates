const changeColor = (element) => {
    let active = document.querySelector(".nav-item.active");
    active.classList.remove("active");
    element.classList.add("active");
};

const openMenu = () => {
    let item = document.querySelector(".menu-items");
    if (item.classList.contains("mobile-hidden")) {
        item.classList.remove("mobile-hidden");
    } else {
        item.classList.add("mobile-hidden");
    }
};

const openParticipants = (element) => {
    let participants = document.querySelector();
    if (participants.classList.contains("hidden")) {
        participants.classList.remove("hidden");
    } else {
        participants.classList.add("hidden");
    }
};
