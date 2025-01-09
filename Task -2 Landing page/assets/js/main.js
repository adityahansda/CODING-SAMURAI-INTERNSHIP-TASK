/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

      /* Menu Show */
      if(navToggle){
          navToggle.addEventListener('click', () =>{
              navMenu.classList.add('show-menu')
          })
      }

      /* Menu hide  */
      if(navToggle){
          navClose.addEventListener('click', () =>{
              navMenu.classList.remove('show-menu')
          })
      }

/*=============== REMOVE MENU MOBILE ===============*/

const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    // when we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))
/*=============== ADD BLUR HEADER ===============*/
const scrolHeader = ()=>{
    const header = document.getElementById('header')
    this.scrollY >=50 ? header.classList.add('blur-header')
    : header.classList.remove('blur-header')
}
window.addEventListener('scroll', scrolHeader)

/*=============== SHOW SCROLL UP ===============*/ 

const scrollup =() =>{
    const scrollup = document.getElementById('scroll-up')
//When the scroll is higher than 200 viewport height, add the show-scroll class to the a tag with the scroll-top <class></class>
this.scrollY >= 350 ? scrollup.classList.add('show-scroll') 
                     : scrollup.classList.remove('show-scroll')
                    }
                     window.addEventListener('scroll', scrollup)
/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

const setActiveLink = () => {
    const scrollDown = window.scrollY;

    sections.forEach(current =>{
        const  sectionHeight = current.offsetHeight,
               sectionTop = current.offsetTop - 50,
               sectionId = current.getAttribute('id'),
                 sectionsClass = document.querySelector(`.nav__menu a[href*='${sectionId}']`)

        if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
            sectionsClass.classList.add('active-link');
        } else {
            sectionsClass.classList.remove('active-link');
        }
    });
}
window.addEventListener('scroll', setActiveLink);

/*=============== SCROLL REVEAL ANIMATION ===============*/

const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2500,
    delay:300,
    // reset:true,
})

sr.reveal('.home__img , .new__data, .care_img, .contact__content')
sr.reveal('.home__data, .care__lis, .contact__img',{delay:500})
sr.reveal('.new__card ',{delay:400, interval:100})
sr.reveal('.shop__card ',{ interval:100})




