const swiper1 = new Swiper('.s1', {
  direction: 'horizontal',
  slidesPerView: 1,
  slidesPerGroup: 1,
  spaceBetween: 0,
  centeredSlides: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },

  breakpoints: {
    1440: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      centeredSlides: false
    }
  }
})

const swiper2 = new Swiper('.s2', {
  direction: 'horizontal',
  slidesPerView: 1,
  slidesPerGroup: 1,
  spaceBetween: 0,
  centeredSlides: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  }
})

var side_menu = document.querySelector('.side_menu')
var button_start = document.querySelector('.backup_button')

function show_menu() {
  side_menu.classList.toggle('menu_active')
}

function close_menu() {
  side_menu.classList.remove('menu_active')
}

window.addEventListener('scroll', () => {
  if (window.scrollY <= 64) {
    button_start.classList.remove('animate__fadeInDown')
    button_start.classList.add('animate__fadeOutUp')
  } else {
    button_start.classList.remove('animate__fadeOutUp')
    button_start.classList.add('animate__fadeInDown')
  }
})

function scroll_to_start() {
  window.scrollTo({ top: 0 })
}
