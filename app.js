const hamburgerMenu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navigationBar__menu')
const navLogo = document.querySelector('#navigationBar__logo');

// Mobile Menu Disp
const mobileMenu = () => {
    hamburgerMenu.classList.toggle('is-active')
    menuLinks.classList.toggle('active')
}

hamburgerMenu.addEventListener('click', mobileMenu);


// active menu

const highlightMenu = () => {
    const element = document.querySelector('.highlight')
    const homeMenu = document.querySelector('#home-page')
    const aboutMenu = document.querySelector('#about-page')
    const resumeMenu = document.querySelector('#resume-page')
    const projectsMenu = document.querySelector('#projects-page')   
    
    let scrollPos = window.scrollY

    // applies highlight to menu items
    if(window.innerWidth > 960 && scrollPos < 450) {
        homeMenu.classList.add('highlight')
        aboutMenu.classList.remove('highlight')
        return
    } else if (window.innerWidth > 960 && scrollPos < 1760) {
        aboutMenu.classList.add('highlight')
        homeMenu.classList.remove('highlight')
        resumeMenu.classList.remove('highlight')
        return
    } else if (window.innerWidth > 960 && scrollPos < 3350) {
        resumeMenu.classList.add('highlight')
        aboutMenu.classList.remove('highlight')
        projectsMenu.classList.remove('highlight')
        return
    }
    else if (window.innerWidth > 960 && scrollPos < 4250) {
        projectsMenu.classList.add('highlight')
        resumeMenu.classList.remove('highlight')
        return
    }
    
    if((element && window.innerWidth < 960 && scrollPos < 450) || element){
        element.classList.remove('highlight')
    }
}


window.addEventListener('scroll', highlightMenu);
window.addEventListener('click', highlightMenu);

// when clicked, close menu item

const mobileMenuExit = () => {
    const menuBars = document.querySelector('.is-active')
    if (window.innerWidth <= 960 && menuBars) {
        hamburgerMenu.classList.toggle('is-active')
        menuLinks.classList.remove('active')
    }
}

menuLinks.addEventListener('click', mobileMenuExit);
navLogo.addEventListener('click', mobileMenuExit);