new Glide('.glide').mount()
new Glide('.glide2').mount()

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
