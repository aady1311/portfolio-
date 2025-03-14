/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () =>{
    const scrollDown = window.scrollY

  sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id'),
              sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')
        
        if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
            sectionsClass.classList.add('active-link')
        }else{
            sectionsClass.classList.remove('active-link')
        }                                                    
    })
}
window.addEventListener('scroll', scrollActive)

/*===== SCROLL REVEAL ANIMATION =====*/
// Existing ScrollReveal calls
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,
    // reset: true // Uncomment if you want the animation to repeat on scroll
  });

  sr.reveal('.home__data, .about__img, .skills__subtitle, .skills__text', {}); 
  sr.reveal('.home__img, .about__subtitle, .about__text, .skills__img', { delay: 400 }); 
  sr.reveal('.home__social-icon', { interval: 200 });
  sr.reveal('.work__img', { interval: 200 });
  
  // Explicitly target Certificate section items
  sr.reveal('#Certificate .work__img', { interval: 200 });

  sr.reveal('.sr-element', { interval: 200 });
  
  // Target Contact section inputs and buttons
  sr.reveal('#contact .contact__input, #contact .contact__button', { interval: 200 });  

  const srr = ScrollReveal({
    origin: 'bottom', // from the bottom
    distance: '50px',
    duration: 1000,
    delay: 200,
    // reset: true, // Uncomment if you want repeated animations on scroll
  });

  // Reveal each certificate card with a slight interval
  srr.reveal('.certificate-card', {
    interval: 200
  });

const submitBtn = getElementById('contact__button button');

function reset(submitBtn) {
    onclick.remove;
    
}

