document.addEventListener("DOMContentLoaded", function () {
    // Главный слайдер проектов (основной контейнер)
    var projectSlider = new Swiper(".swiper-projects", {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });

    // Перебираем каждый слайд с проектом и инициализируем его вложенные слайдеры
    document.querySelectorAll(".swiper-slide").forEach((slide, index) => {
        // Получаем вложенные слайдеры в текущем проекте
        var thumbSlider = new Swiper(slide.querySelector(".thumb-slider"), {
            spaceBetween: 10,
            slidesPerView: 3,
            freeMode: true,
            watchSlidesProgress: true,
        });

        var mainSlider = new Swiper(slide.querySelector(".main-slider"), {
            spaceBetween: 21,
            loop: true,
            thumbs: {
                swiper: thumbSlider,
            },
        });
    });
});