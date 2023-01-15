const burgerBtn = document.querySelector('.nav__burger')
const Xicon = document.querySelector('.nav__Xicon')
const navLinksBox = document.querySelector('.nav__links')
const navLinks = document.querySelectorAll('.nav__links-link')
const header = document.querySelector('.header')

const toggleNav = () => {
    burgerBtn.classList.toggle('active')
    Xicon.classList.toggle('hide')
    navLinksBox.classList.toggle('active-nav')
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navLinksBox.classList.remove('active-nav')
            Xicon.classList.add('hide')
        })
    })

    if(navLinksBox.classList.contains('active-nav')) {
        header.style.opacity = '20%'
    } else {
        header.style.opacity = '1'
    }


}

burgerBtn.addEventListener('click', toggleNav)
Xicon.addEventListener('click', toggleNav)
