


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







  const mainImage = document.querySelector('.main-image img');
  const previews = document.querySelectorAll('.preview');
  const textContents = document.querySelectorAll('.text-content');
  const prevButton = document.querySelector('.prev');
  const nextButton = document.querySelector('.next');
  
  const images = [
    "./images/slide-1.png",
    "./images/slide-2.png",
    "./images/slide-1.png",
    "./images/slide-2.png",
    "./images/slide-1.png",
    "./images/slide-1.png",
  ];
  
  let currentIndex = 0;
  
  function updateContent() {
    // Update main image
    mainImage.src = images[currentIndex];
  
    // Update active preview
    previews.forEach(preview => preview.classList.remove('active'));
    previews[currentIndex].classList.add('active');
  
    // Update active text content
    textContents.forEach(content => content.classList.remove('active'));
    textContents[currentIndex].classList.add('active');
  }
  
  function nextSlide() {
    currentIndex = (currentIndex + 1) % images.length;
    updateContent();
  }
  
  function prevSlide() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateContent();
  }
  
  previews.forEach((preview, index) => {
    preview.addEventListener('click', () => {
      currentIndex = index;
      updateContent();
    });
  });
  
  nextButton.addEventListener('click', nextSlide);
  prevButton.addEventListener('click', prevSlide);
  
  // Initialize
  updateContent();






  const mainImage2 = document.querySelector('.main-image2 img');
  const previews2 = document.querySelectorAll('.preview-1');
  const textContents2 = document.querySelectorAll('.text-content2');
  const prevButton2 = document.querySelector('.prev2');
  const nextButton2 = document.querySelector('.next2');
  const mainImageLink = document.querySelector('.main-image2 a'); // Получаем ссылку
  
  const images2 = [
      "./images/slide-1.png",
      "./images/slide-2.png",
      "./images/slide-1.png",
      "./images/slide-2.png",
      "./images/slide-1.png",
      "./images/slide-1.png",
  ];
  
  // Добавьте массив с описаниями для каждого слайда
  const captions = [
      "",
      "",
      "",
      "",
      "",
      "",
  ];
  
  let currentIndex2 = 0;
  
  function updateContent2() {
      // Update main image
      mainImage2.src = images2[currentIndex2];
  
      // Update href для Fancybox
      mainImageLink.href = images2[currentIndex2];
  
      // Update data-caption для Fancybox
      mainImageLink.dataset.caption = captions[currentIndex2];
  
      // Update active preview
      previews2.forEach(preview => preview.classList.remove('active'));
      previews2[currentIndex2].classList.add('active');
  
      // Update active text content
      textContents2.forEach(content => content.classList.remove('active'));
      textContents2[currentIndex2].classList.add('active');
  }
  
  function nextSlide2() {
      currentIndex2 = (currentIndex2 + 1) % images2.length;
      updateContent2();
  }
  
  function prevSlide2() {
      currentIndex2 = (currentIndex2 - 1 + images2.length) % images2.length;
      updateContent2();
  }
  
  previews2.forEach((preview, index) => {
      preview.addEventListener('click', () => {
          currentIndex2 = index;
          updateContent2();
      });
  });
  
  nextButton2.addEventListener('click', nextSlide2);
  prevButton2.addEventListener('click', prevSlide2);
  
  // Initialize
  updateContent2();
  
  // Fancybox Initialization (если требуется кастомизация)
  Fancybox.bind('[data-fancybox]', {
    // Ваши настройки здесь
  });









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