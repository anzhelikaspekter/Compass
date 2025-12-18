document.addEventListener("DOMContentLoaded", () => {
    /* ===============================
        PRELOADER
    =============================== */
    const onReady = () => {
        document.body.classList.add("loaded");
        document.body.removeAttribute("aria-busy");
    };

    if (document.readyState === "complete") {
        onReady();
    } else {
        window.addEventListener("load", onReady, { once: true });
    }

    setTimeout(onReady, 3000);


    /* ===============================
        SMOOTH SCROLL
    =============================== */
    const smoothScrollTo = (selector) => {
        const target = document.querySelector(selector);
        if (!target) return;

        window.scrollTo({
            top: target.offsetTop,
            behavior: "smooth"
        });
    };

    document.querySelectorAll('a[href="#footer"]').forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            smoothScrollTo("#footer");
        });
    });

    document.querySelectorAll('a[href="#header"]').forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            smoothScrollTo("#header");
        });
    });

    /* ===============================
        PROCESS NAVIGATION
    =============================== */
    const navItems = document.querySelectorAll(".process__nav-item");
    const stepsList = document.querySelector(".process__step");

    if (navItems.length && stepsList) {
        navItems.forEach(item => {
            item.addEventListener("click", () => {
                const stepId = `${item.id}_show`;
                const step = document.getElementById(stepId);

                if (!step) return;

                const offset =
                    step.getBoundingClientRect().left -
                    stepsList.getBoundingClientRect().left;

                stepsList.style.transform = `translateX(-${offset}px)`;

                navItems.forEach(i => i.classList.remove("active"));
                item.classList.add("active");
            });
        });
    }

    /* ===============================
        LAZY VIDEO
    =============================== */
    const video = document.querySelector('.hire__video video');

    if (video) {
        video.play().catch(() => { });
    }
});
