var portfolioTabs = document.getElementsByClassName('portfolio-tab');
var tabcontents = document.getElementsByClassName('tab-content');

function tabOpen(x){
    for(portfolioTab of portfolioTabs){
        portfolioTab.classList.remove('active');
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove('active-content');
    }
    event.currentTarget.classList.add('active');
    document.getElementById(x).classList.add('active-content')
}

// ======================== SCROLLREVEAL ========================

const sr = ScrollReveal({
    distance:'60px',
    duration: 2500,
    delay: 400,
    reset: false,
})

sr.reveal('.home-container',{delay:200,origin:'bottom',});
sr.reveal('.home-btns',{delay:200, origin: 'top'});
sr.reveal('.about-container .left',{delay:200, origin: 'left'});
sr.reveal('.about-container .right',{delay:200, origin: 'right'});
sr.reveal('.skills-container',{delay:200, origin: 'right'});
sr.reveal('.work-container',{delay:200, origin: 'left'});
sr.reveal('.contact-container aside',{delay:400, origin: 'bottom'});
sr.reveal('.contact-container .contact-form',{delay:200, origin: 'left'});
sr.reveal('.footer-container' ,{delay:200, origin: 'bottom'});

// ======================== NAVLIST ========================

const menuBtn = document.querySelector('.ri-menu-3-fill');
const navList = document.querySelector('.navlist');

menuBtn.onclick = function(){
    menuBtn.classList.toggle('ri-arrow-up-double-line');
    navList.classList.toggle('active');
}