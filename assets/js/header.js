document.addEventListener("DOMContentLoaded", () => {
    const header = document.querySelector(".header");
    const logoImg = document.querySelector(".logo__img");

    const DARK_LOGO = 'assets/img/logos/logo_dark.svg';
    const LIGHT_LOGO = 'assets/img/logos/logo_light.svg';

    logoImg.src = LIGHT_LOGO;
    header.classList.remove("header--blog", "shadow", "active");

    window.addEventListener("scroll", () => {
        const scrolled = window.scrollY > 0;
        const deepScrolled = window.scrollY > 100;

        header.classList.toggle("header--blog", scrolled);
        header.classList.toggle("shadow", scrolled);
        header.classList.toggle("active", deepScrolled);

        logoImg.src = scrolled ? DARK_LOGO : LIGHT_LOGO;
    });
});
