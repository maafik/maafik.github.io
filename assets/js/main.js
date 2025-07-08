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

      const startBtn = document.getElementById('startOrderBtn');
      const productOverlay = document.getElementById('productOverlay');
      const formOverlay = document.getElementById('formOverlay');
      const productOptions = document.querySelectorAll('.product-option');
      const selectedProductInput = document.getElementById('selectedProduct');
      const formStep1 = document.getElementById('formStep1');
      const formStep2 = document.getElementById('formStep2');
      const orderForm = document.getElementById('orderForm');

      startBtn.addEventListener('click', () => {
        productOverlay.style.display = 'flex';
      });

      productOptions.forEach(option => {
        option.addEventListener('click', () => {
          const selectedProduct = option.dataset.product;
          selectedProductInput.value = selectedProduct;
          productOverlay.style.display = 'none';
          formOverlay.style.display = 'flex';
        });
      });

      productOverlay.onclick = (e) => {
        if (e.target === productOverlay) {
          productOverlay.style.display = 'none';
        }
      };

      formOverlay.onclick = (e) => {
        if (e.target === formOverlay) {
          formOverlay.style.display = 'none';
        }
      };

      orderForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const formData = new FormData(orderForm);
const message = `Новый заказ:\n` +
  `Товар: ${formData.get('product')}\n` +
  `Имя: ${formData.get('name')}\n` +
  `Телефон: ${formData.get('phone')}\n` +
  `Связь: ${formData.get('contactMethod')}\n` +
  `Размер: ${formData.get('size')}\n` +
  `Описание принта: ${formData.get('description') || 'Не указано'}`;

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

          formStep1.style.display = 'none';
          formStep2.style.display = 'block';
        } catch (error) {
          alert('Ошибка отправки формы. Попробуйте позже.');
        }
      });
    });
