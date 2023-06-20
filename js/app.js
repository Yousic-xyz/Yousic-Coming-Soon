// CHANGE BACKGROUND HEADER
function scrollHeader() {
    const header = document.getElementById('navbar')
    const button = document.getElementById('btn')
    // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
    if (this.scrollY >= 50) {
        header.classList.add('scroll-header');
        button.classList.add('scroll-remove');
    } else {
        header.classList.remove('scroll-header');
        button.classList.remove('scroll-remove');
    }
}

window.addEventListener('scroll', scrollHeader)


// SHOW MENU
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close');

// MENU SHOW
/* Validate if constant exists */
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    })
}

// MENU HIDDEN
/* Validate if constant exists */
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    })
}

// Email JS
const contactForm = document.getElementById('contact-form'),
    contactMessage = document.getElementById('contact-message')
const sendEmail = (e) => {
    e.preventDefault()

    emailjs.sendForm('service_gbwjkad','template_f1fzreb', '#contact-form','Jvm3rUHTtGo3Sy5Oh').then(()=>{
        contactMessage.innerText = 'Successfully Submitted!'
        setTimeout(()=>{
            contactMessage.innerText = ''
        }, 5000)
        contactForm.reset()
    }, ()=>{
        contactMessage.innerText = 'Submission Failed (service error)'
    })
}

contactForm.addEventListener('submit', sendEmail)

