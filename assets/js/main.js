/**
* Template Name: PhotoFolio
* Template URL: https://bootstrapmade.com/photofolio-bootstrap-photography-website-template/
* Updated: Aug 07 2024 with Bootstrap v5.3.3
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/

(function() {
  "use strict";

  /**
   * Apply .scrolled class to the body as the page is scrolled down
   */
  function toggleScrolled() {
    const selectBody = document.querySelector('body');
    const selectHeader = document.querySelector('#header');
    if (!selectHeader.classList.contains('scroll-up-sticky') && !selectHeader.classList.contains('sticky-top') && !selectHeader.classList.contains('fixed-top')) return;
    window.scrollY > 100 ? selectBody.classList.add('scrolled') : selectBody.classList.remove('scrolled');
  }

  document.addEventListener('scroll', toggleScrolled);
  window.addEventListener('load', toggleScrolled);

  /**
   * Mobile nav toggle
   */
  const mobileNavToggleBtn = document.querySelector('.mobile-nav-toggle');

  function mobileNavToogle() {
    document.querySelector('body').classList.toggle('mobile-nav-active');
    mobileNavToggleBtn.classList.toggle('bi-list');
    mobileNavToggleBtn.classList.toggle('bi-x');
  }
  mobileNavToggleBtn.addEventListener('click', mobileNavToogle);

  /**
   * Hide mobile nav on same-page/hash links
   */
  document.querySelectorAll('#navmenu a').forEach(navmenu => {
    navmenu.addEventListener('click', () => {
      if (document.querySelector('.mobile-nav-active')) {
        mobileNavToogle();
      }
    });

  });

  /**
   * Toggle mobile nav dropdowns
   */
  document.querySelectorAll('.navmenu .toggle-dropdown').forEach(navmenu => {
    navmenu.addEventListener('click', function(e) {
      e.preventDefault();
      this.parentNode.classList.toggle('active');
      this.parentNode.nextElementSibling.classList.toggle('dropdown-active');
      e.stopImmediatePropagation();
    });
  });

  /**
   * Preloader
   */
  const preloader = document.querySelector('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      setTimeout(() => {
        preloader.classList.add('loaded');
      }, 1000);
      setTimeout(() => {
        preloader.remove();
      }, 2000);
    });
  }

  /**
   * Scroll top button
   */
  let scrollTop = document.querySelector('.scroll-top');

  function toggleScrollTop() {
    if (scrollTop) {
      window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
    }
  }
  scrollTop.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  window.addEventListener('load', toggleScrollTop);
  document.addEventListener('scroll', toggleScrollTop);

  /**
   * Animation on scroll function and init
   */
  function aosInit() {
    AOS.init({
      duration: 600,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }
  window.addEventListener('load', aosInit);

  /**
   * Initiate glightbox
   */
  const glightbox = GLightbox({
    selector: '.glightbox'
  });

  /**
   * Init swiper sliders
   */
  function initSwiper() {
    document.querySelectorAll(".init-swiper").forEach(function(swiperElement) {
      let config = JSON.parse(
        swiperElement.querySelector(".swiper-config").innerHTML.trim()
      );

      if (swiperElement.classList.contains("swiper-tab")) {
        initSwiperWithCustomPagination(swiperElement, config);
      } else {
        new Swiper(swiperElement, config);
      }
    });
  }

  window.addEventListener("load", initSwiper);

})();




document.addEventListener('DOMContentLoaded', () => {
  const telegramToken = "7349206398:AAEthCsuxGhjdrvUOnFwFD478q7y474kRMM";
  const telegramChatId = "5929919501";
  const formOverlay = document.getElementById('formOverlay');
  const openFormButton = document.getElementById('openFormButton');
  const tattooForm = document.getElementById('tattooForm');
  const formStep1 = document.getElementById('formStep1');
  const formStep2 = document.getElementById('formStep2');
  const genderSelect = document.getElementById('gender');
  const chooseBtnWrapper = document.getElementById('chooseStyleBtnWrapper');
  const galleryOverlay = document.getElementById('styleGallery');
  const imageGallery = document.getElementById('imageGallery');
  const selectedImagePreview = document.getElementById('selectedImagePreview');

  let selectedImageSrc = ""; // сохраняет путь к выбранному образу

  if (openFormButton) {
    openFormButton.onclick = () => {
      formOverlay.style.display = 'flex';
      if (!history.state || !history.state.formOpen) {
        history.pushState({ formOpen: true }, '', '#form');
      }
    };
  }

  formOverlay.onclick = (e) => {
    if (e.target === formOverlay) {
      formOverlay.style.display = 'none';
      if (history.state?.formOpen) {
        history.back();
      }
    }
  };

  window.addEventListener('popstate', (event) => {
    if (formOverlay.style.display === 'flex') {
      formOverlay.style.display = 'none';
    }
  });

  if (galleryOverlay) {
    galleryOverlay.onclick = (e) => {
      if (e.target === galleryOverlay) {
        galleryOverlay.style.display = 'none';
      }
    };
  }

  genderSelect.addEventListener('change', () => {
    const gender = genderSelect.value;
    if (!gender) return chooseBtnWrapper.innerHTML = '';

    chooseBtnWrapper.innerHTML = `<button type="button" class="button" id="chooseStyle">Выбрать образ</button>`;
    document.getElementById('chooseStyle').onclick = () => {
      imageGallery.innerHTML = '';
      for (let i = 1; i <= 24; i++) {
        const img = document.createElement('img');
        img.src = `images/${gender}_${i}.jpg`;
        img.onclick = () => {
          selectedImageSrc = img.src;
          selectedImagePreview.innerHTML = `<p>Выбранный образ:</p><img src="${img.src}" style="max-width: 100%; border-radius: 10px;" />`;
          galleryOverlay.style.display = 'none';
        };
        imageGallery.appendChild(img);
      }
      galleryOverlay.style.display = 'flex';
    };
  });

  const allOpenFormButtons = document.querySelectorAll('.openFormButton, .btn-order');
  allOpenFormButtons.forEach(button => {
    button.addEventListener('click', (e) => {
      e.preventDefault();
      formOverlay.style.display = 'flex';
      if (!history.state || !history.state.formOpen) {
        history.pushState({ formOpen: true }, '', '#form');
      }
    });
  });

  tattooForm.addEventListener('submit', async (e) => {
    // Проверка: выбран ли образ
    if (!selectedImageSrc) {
      e.preventDefault();
      alert('Пожалуйста, выберите образ перед отправкой формы.');
      return;
    }

    e.preventDefault();
    const formData = new FormData(tattooForm);

    const message = `Новый заказ:\n` +
      `Имя: ${formData.get('name')}\n` +
      `Телефон: ${formData.get('phone')}\n` +
      `Связь: ${formData.get('contactMethod')}\n` +
      `Размер: ${formData.get('size')}\n` +
      `Пол собаки: ${formData.get('gender')}\n` +
      (selectedImageSrc ? `Выбранный образ: ${selectedImageSrc.split('/').pop()}\n` : '');

    try {
      await fetch(`https://api.telegram.org/bot${telegramToken}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ chat_id: telegramChatId, text: message })
      });

      const files = formData.getAll('photos');
      for (const file of files) {
        const photoData = new FormData();
        photoData.append('chat_id', telegramChatId);
        photoData.append('photo', file);
        await fetch(`https://api.telegram.org/bot${telegramToken}/sendPhoto`, {
          method: 'POST',
          body: photoData
        });
      }

        ym(102483778, 'reachGoal', 'form_success');

      formStep1.style.display = 'none';
      formStep2.style.display = 'block';
    } catch (error) {
      alert('Ошибка отправки формы. Попробуйте позже.');
    }
  });
});
