/* ================================
   BKIN PORTFOLIO — JAVASCRIPT
================================ */

// MOBILE MENU
const menuButton = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuButton) {
    menuButton.addEventListener("click", () => {
        navLinks.classList.toggle("open");
        menuButton.classList.toggle("active");
    });
}

document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("open");
        menuButton.classList.remove("active");
    });
});


// IMAGE MODAL
const modal = document.getElementById("imageModal");
const modalImage = document.getElementById("modalImage");
const modalTitle = document.getElementById("modalTitle");
const modalCategory = document.getElementById("modalCategory");
const modalClose = document.querySelector(".modal-close");

document.querySelectorAll(".open-art").forEach(button => {
    button.addEventListener("click", () => {
        const image = button.dataset.image;
        const title = button.dataset.title;
        const category = button.dataset.category;

        modalImage.src = image;
        modalImage.alt = title;
        modalTitle.textContent = title;
        modalCategory.textContent = category;

        modal.classList.add("show");
        modal.setAttribute("aria-hidden", "false");
        document.body.classList.add("no-scroll");
    });
});

function closeModal() {
    modal.classList.remove("show");
    modal.setAttribute("aria-hidden", "true");
    document.body.classList.remove("no-scroll");

    setTimeout(() => {
        modalImage.src = "";
    }, 250);
}

modalClose.addEventListener("click", closeModal);

modal.addEventListener("click", event => {
    if (event.target === modal) {
        closeModal();
    }
});

document.addEventListener("keydown", event => {
    if (event.key === "Escape" && modal.classList.contains("show")) {
        closeModal();
    }
});


// SCROLL REVEAL
const revealItems = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
    entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target);
            }
        });
    },
    {
        threshold: 0.12
    }
);

revealItems.forEach(item => observer.observe(item));


// CURSOR GLOW — DESKTOP ONLY
const cursorGlow = document.querySelector(".cursor-glow");

if (window.matchMedia("(pointer:fine)").matches && cursorGlow) {
    document.addEventListener("mousemove", event => {
        cursorGlow.style.left = `${event.clientX}px`;
        cursorGlow.style.top = `${event.clientY}px`;
    });
}