


document.addEventListener('DOMContentLoaded', function() {
    const swiperCat = new Swiper('.swiper-employees', {
      // Optional parameters
      direction: 'horizontal',
      loop: true,
      slidesPerView: 4, // Показывать по одному слайду
      spaceBetween: 20,
      breakpoints: {
        0: { // Ширина экрана 640px и больше
          slidesPerView: 1,
          spaceBetween: 20
        },
        526: { // Ширина экрана 640px и больше
            slidesPerView: 2,
            spaceBetween: 20
        },
        768: { // Ширина экрана 768px и больше
            slidesPerView: 3,
            spaceBetween: 30
        },
        1024: { // Ширина экрана 1024px и больше
            slidesPerView: 4,
            spaceBetween: 40
        }
    }
    });
  });











  const mainVideoFrame = document.getElementById('main-video-frame');
  const previews = document.querySelectorAll('.preview');
  const textContentsDesktop = document.querySelectorAll('.text-content-container-desk .text-content'); // Выбираем текст для десктопа
  const textContentsMobile = document.querySelectorAll('.text-content-container-mob .text-content'); // Выбираем текст для мобильных
  const prevButton = document.querySelector('.prev');
  const nextButton = document.querySelector('.next');
  
  // Array of VK video IDs (replace with actual IDs)
  const videoIds = [
    "456242934", // Example VK Video ID.  Replace with YOUR video ID.
    "456242933",
    "456242932",
    "456242931",
    "456242930"
  ];
  
  let currentIndex = 0;
  let isAnimating = false;
  
  function updateContent(direction = '') {
    if (isAnimating) return;
    isAnimating = true;
    
    mainVideoFrame.classList.add(direction === 'next' ? 'swipe-left' : 'swipe-right');
    
    setTimeout(() => {
      mainVideoFrame.src = `https://vk.com/video_ext.php?oid=-177825273&id=${videoIds[currentIndex]}`;
      
      // Update active preview
      previews.forEach(preview => preview.classList.remove('active'));
      previews[currentIndex].classList.add('active');
  
      // Update active text content for desktop
      textContentsDesktop.forEach(content => content.classList.remove('active'));
      textContentsDesktop[currentIndex].classList.add('active');
  
      // Update active text content for mobile
      textContentsMobile.forEach(content => content.classList.remove('active'));
      textContentsMobile[currentIndex].classList.add('active');
  
      mainVideoFrame.classList.remove('swipe-left', 'swipe-right');
      isAnimating = false;
    }, 300);
  }
  
  function nextSlide() {
    currentIndex = (currentIndex + 1) % videoIds.length;
    updateContent('next');
  }
  
  function prevSlide() {
    currentIndex = (currentIndex - 1 + videoIds.length) % videoIds.length;
    updateContent('prev');
  }
  
  previews.forEach((preview, index) => {
    preview.addEventListener('click', () => {
      currentIndex = index;
      updateContent();
    });
  });
  
  nextButton.addEventListener('click', nextSlide);
  prevButton.addEventListener('click', prevSlide);
  
  // Добавляем обработку смахиваний
  let startX = 0;
  let endX = 0;
  
  mainVideoFrame.addEventListener('touchstart', (event) => {
    startX = event.touches[0].clientX;
  });
  
  mainVideoFrame.addEventListener('touchend', (event) => {
    endX = event.changedTouches[0].clientX;
    if (startX - endX > 50) {
      nextSlide(); // Смахивание влево — следующий слайд
    } else if (endX - startX > 50) {
      prevSlide(); // Смахивание вправо — предыдущий слайд
    }
  });
  
  // Добавляем CSS-анимации
  const style = document.createElement('style');
  style.innerHTML = `
    .swipe-left {
      animation: swipeLeft 0.3s ease-in-out;
    }
    .swipe-right {
      animation: swipeRight 0.3s ease-in-out;
    }
    @keyframes swipeLeft {
      from {
        transform: translateX(0);
      }
      to {
        transform: translateX(-100%);
      }
    }
    @keyframes swipeRight {
      from {
        transform: translateX(0);
      }
      to {
        transform: translateX(100%);
      }
    }
  `;
  document.head.appendChild(style);
  
  // Initialize
  updateContent();
  













  document.addEventListener('DOMContentLoaded', function() {
    const swiperCat = new Swiper('.rev-cont-flex', {
      direction: 'horizontal',
      loop: true,
      slidesPerView: 3, // Показывать по одному слайду
      spaceBetween: 20,
      breakpoints: {
        1024: { // Ширина экрана 1024px и больше
          slidesPerView: 3,
          spaceBetween: 20
        },
        0: { // Ширина экрана 640px и больше
          slidesPerView: 2,
          spaceBetween: 10
        }
    }
    });
  });













  document.addEventListener("DOMContentLoaded", function () {
    const burger = document.querySelector(".burger");
    const mobileMenu = document.querySelector(".mobile-menu");
    const closeMenu = document.querySelector(".close-menu");

    // Открытие меню
    burger.addEventListener("click", function () {
        mobileMenu.classList.add("active");
    });

    // Закрытие меню
    closeMenu.addEventListener("click", function () {
        mobileMenu.classList.remove("active");
    });

    // Закрытие при клике вне меню
    mobileMenu.addEventListener("click", function (event) {
        if (!event.target.closest(".menu-content")) {
            mobileMenu.classList.remove("active");
        }
    });
});










document.addEventListener("DOMContentLoaded", function () {
  const button = document.querySelector(".thank-you");
  const popup = document.querySelector(".thank-you-popup");
  const closeBtn = document.querySelector(".close-popup");

  // Открываем окно "Спасибо"
  button.addEventListener("click", function () {
      popup.classList.add("active");
  });

  // Закрываем окно "Спасибо"
  closeBtn.addEventListener("click", function () {
      popup.classList.remove("active");
  });

  // Закрываем при клике вне окна
  popup.addEventListener("click", function (event) {
      if (!event.target.closest(".popup-content")) {
          popup.classList.remove("active");
      }
  });
});







document.addEventListener("DOMContentLoaded", function () {
  const popup = document.getElementById("callback-popup");
  const btn = document.querySelector(".tel-popup");
  const close = document.querySelector(".close-tel-popup");

  // Открытие попапа
  btn.addEventListener("click", function () {
      popup.style.display = "flex";
  });

  // Закрытие по кнопке ×
  close.addEventListener("click", function () {
      popup.style.display = "none";
  });

  // Закрытие при клике вне окна
  window.addEventListener("click", function (e) {
      if (e.target === popup) {
          popup.style.display = "none";
      }
  });
});












document.addEventListener('DOMContentLoaded', function() {
  const swiperCat = new Swiper('.swiper-tel-cont', {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 3, // Всегда 3 слайда в видимой области
    spaceBetween: 16, // Отступы между слайдами
    centeredSlides: true,
    initialSlide: 1,
    navigation: {
      nextEl: '.next3', // Кнопка для следующего слайда
      prevEl: '.prev3', // Кнопка для предыдущего слайда
    },
    effect: "coverflow",
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 150, // Глубина эффекта
      modifier: 1.5, // Интенсивность эффекта
      slideShadows: false,
    },
  });
});






document.addEventListener("DOMContentLoaded", function () {
  const priceButtons = document.querySelectorAll(".price"); // Выбираем все кнопки
  const popup = document.getElementById("popup2");
  const closeBtn = document.querySelector(".close2");

  // Добавляем обработчик события ко всем кнопкам
  priceButtons.forEach(button => {
    button.addEventListener("click", function () {
      popup.style.display = "flex";
    });
  });

  // Закрываем попап при клике на "крестик"
  closeBtn.addEventListener("click", function () {
    popup.style.display = "none";
  });

  // Закрываем попап при клике вне его области
  popup.addEventListener("click", function (event) {
    if (event.target === popup) {
      popup.style.display = "none";
    }
  });
});









document.addEventListener("DOMContentLoaded", function () {
  const images = document.querySelectorAll(".rev-popup"); // Все изображения
  const popup = document.getElementById("popup3");
  const closeBtn = document.querySelector(".close3");

  // Открытие попапа при клике на любую картинку
  images.forEach(img => {
    img.addEventListener("click", function () {
      popup.style.display = "flex";
    });
  });

  // Закрытие попапа по кнопке-крестику
  closeBtn.addEventListener("click", function () {
    popup.style.display = "none";
  });

  // Закрытие попапа при клике вне его содержимого
  popup.addEventListener("click", function (event) {
    if (event.target === popup) {
      popup.style.display = "none";
    }
  });
});








document.addEventListener("DOMContentLoaded", function() {
  const selects = document.querySelectorAll(".custom-select");

  selects.forEach(select => {
      const selectBox = select.querySelector(".select-box");
      const options = select.querySelectorAll(".option");

      // Открытие и закрытие списка
      selectBox.addEventListener("click", (e) => {
          e.stopPropagation(); // Чтобы клик внутри не закрывал список сразу
          closeAllSelects(); // Закрываем все перед открытием нового
          select.classList.toggle("open");
      });

      // Выбор элемента
      options.forEach(option => {
          option.addEventListener("click", () => {
              selectBox.textContent = option.textContent;
              select.classList.remove("open");
          });
      });
  });

  // Закрытие всех дропдаунов при клике вне
  document.addEventListener("click", () => {
      closeAllSelects();
  });

  function closeAllSelects() {
      selects.forEach(select => select.classList.remove("open"));
  }
});













function toggleDropdownSecond() {
  document.querySelector(".second-multi-select").classList.toggle("second-open");
  document.querySelector(".second-dropdown").style.display = 
      document.querySelector(".second-dropdown").style.display === "block" ? "none" : "block";
}

document.addEventListener("click", function (event) {
  const multiSelect = document.querySelector(".second-multi-select");
  if (!multiSelect.contains(event.target)) {
      document.querySelector(".second-dropdown").style.display = "none";
  }
});

// Обновление выбранных элементов
document.querySelectorAll(".second-dropdown input[type=checkbox]").forEach(input => {
  input.addEventListener("change", function () {
      const selectedContainer = document.querySelector(".second-selected-options");
      selectedContainer.innerHTML = ""; // Очищаем перед обновлением

      document.querySelectorAll(".second-dropdown input:checked").forEach(checked => {
          const tag = document.createElement("div");
          tag.classList.add("second-tag");
          tag.innerHTML = `${checked.value} <span onclick="removeTagSecond('${checked.value}')">×</span>`;
          selectedContainer.appendChild(tag);
      });
  });
});

// Функция удаления тега
function removeTagSecond(value) {
  document.querySelectorAll(".second-dropdown input[type=checkbox]").forEach(input => {
      if (input.value === value) input.checked = false;
  });

  document.querySelectorAll(".second-tag").forEach(tag => {
      if (tag.textContent.includes(value)) tag.remove();
  });
}

























document.addEventListener('DOMContentLoaded', function() {
  // Проверяем наличие контейнера родительского слайдера
  const projectsSwiperContainer = document.querySelector('.swiper-projects-cont');
  if (!projectsSwiperContainer) return;

  // Инициализация родительского слайдера (основного)
  const projectsSwiper = new Swiper(projectsSwiperContainer, {
      slidesPerView: 1,  // Или 'auto', если слайды должны быть по ширине контента
      spaceBetween: 20,
      loop: true,
      navigation: {
          nextEl: '.next12',
          prevEl: '.prev12',
      },
  });

  // Ищем все слайды родительского слайдера
  const projectSlides = projectsSwiperContainer.querySelectorAll('.swiper-slide');

  projectSlides.forEach((slide) => {
      // Проверяем наличие слайда перед инициализацией
      if (!slide) return;

      // Находим контейнеры основных слайдов и превью
      const mainSwiperContainer = slide.querySelector('.swiper-container-main');
      const thumbsSwiperContainer = slide.querySelector('.swiper-container-thumbs');

      // Проверяем, что контейнеры найдены
      if (!mainSwiperContainer || !thumbsSwiperContainer) return;

      // Инициализация слайдера превьюшек (Thumbs)
      const thumbsSwiper = new Swiper(thumbsSwiperContainer, {
          spaceBetween: 20,
          slidesPerView: 3,  // Количество видимых превьюшек
          loop: true,
          watchSlidesProgress: true,
          slideToClickedSlide: true,
          breakpoints: {
            962: { // Ширина экрана 1024px и больше
              spaceBetween: 20
            },
            0: { // Ширина экрана 640px и больше
              spaceBetween: 15
            }
        }
      });

      // Инициализация основного слайдера
      const mainSwiper = new Swiper(mainSwiperContainer, {
          spaceBetween: 20,
          loop: true,
          thumbs: {
              swiper: thumbsSwiper,
          },
      });
  });
});
