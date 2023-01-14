const burgerBtn = document.querySelector('.nav__burger')
const Xicon = document.querySelector('.nav__Xicon')
const navLinksBox = document.querySelector('.nav__links')
const navLinks = document.querySelectorAll('.nav__links-link')

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
}

burgerBtn.addEventListener('click', toggleNav)
Xicon.addEventListener('click', toggleNav)
