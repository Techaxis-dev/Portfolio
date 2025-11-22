const fills = document.querySelectorAll(".fill");

function animateSkills() {
    const triggerPoint = window.innerHeight * 0.85;

    fills.forEach(fill => {
        const box = fill.getBoundingClientRect().top;
        const width = fill.getAttribute("data-width");

        if (box < triggerPoint) {
            fill.classList.add("show");
            fill.style.width = width; 
        }
    });
}

window.addEventListener("scroll", animateSkills);
window.addEventListener("load", animateSkills);
