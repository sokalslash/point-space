'use strict';

window.addEventListener('DOMContentLoaded', () => {
    fix100vh();
    findHeight();
    animation();
    window.addEventListener('resize', () => {
        fix100vh();
        findHeight();
    })
})

let promo = document.querySelector('.promo');


function fix100vh() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
}

function findHeight(){
    let fullHeight = document.documentElement.clientHeight,
        fullWidth = document.documentElement.clientWidth;
    if(fullWidth > 768 && fullWidth <= 1024){
        if(fullHeight < 730){
            promo.classList.add('no-full');
        } else {
            if(promo.classList.contains('no-full')){
                promo.classList.remove('no-full');
            }
        }
    } else if(fullWidth > 576 && fullWidth <= 768){
        if(fullHeight < 700){
            promo.classList.add('no-full');
        } else {
            if(promo.classList.contains('no-full')){
                promo.classList.remove('no-full');
            }
        }
    } else if(fullWidth <= 576){
        if(fullHeight < 700){
            promo.classList.add('no-full');
        } else {
            if(promo.classList.contains('no-full')){
                promo.classList.remove('no-full');
            }
        }
    } 
}

function animation() {
    gsap.registerPlugin(ScrollTrigger);

    let mm = gsap.matchMedia();

    mm.add("(min-width: 1025px)", () => {
        
    const tlTitle = gsap.timeline({})
    tlTitle.to('.promo__title span:first-child', {
        x: 0,
        ease: 'back.out(1.1)',
        duration: 1
        })
    .to('.promo__title span:last-child', {
        x: 0,
        ease: 'back.out(1.1)',
        duration: 1
        }, '<')

    const tlPromo = gsap.timeline({
        scrollTrigger: {
            trigger: '.promo',
            start: 'top top',
            end: '+=50%',
            scrub: true,
            pin: true
        }
    })
    tlPromo.to('.promo__bottom', {
        opacity: 1,
        y: 0
    })
    .fromTo('.promo__bottom img', {y: -55}, {
        y: 30
    }, '<')

    const tlLines = gsap.timeline({
        scrollTrigger: {
            trigger: '.choose__wrap',
            start: 'top bottom',
            end: 'bottom top',
            scrub: true
        }
    })
    tlLines.to('.choose__wrap .top', {
        xPercent: -70
    })
    tlLines.to('.choose__wrap .bottom', {
        xPercent: 20
    }, '<')

    gsap.from('.rates__card', {
        opacity: 0,
        yPercent: 100,
        stagger: 0.3,
        scrollTrigger: {
            trigger: '.rates__wrap',
            start: 'top bottom',
            toggleActions: 'play none none reverse'
        }
    })

    let sections = gsap.utils.toArray('.plus-block');

    gsap.to(sections, {
        xPercent: -100 * (sections.length - 1),
        delay: 0.2,
        scrollTrigger: {
            trigger: '.plus',
            start: 'top top',
            end: `+=${sections.length * 1000}`,
            pin: true,
            scrub: true,
        }
    })

    const tlPoint = gsap.timeline({
        scrollTrigger: {
            trigger: '.point',
            start: 'top center',
            end: 'bottom bottom',
            toggleActions: 'play reverse play reverse',
            markers: true
        }
    })
    tlPoint.to('.point', {
        backgroundColor: '#000',
        overwrite: 'auto'
    })
    .to('.point__descr', {
        color: '#fff'
    }, '<')
    .to('.point__title', {
        color: '#fff'
    }, '<')

    const tlImg = gsap.timeline({
        scrollTrigger: {
            trigger: '.point__wrapper',
            start: 'top top',
            pin: true,
            scrub: 1
        }
    })
    tlImg.to('.point__img:first-child img', {
        scale: 1
    }, '<')
    tlImg.to('.point__img:last-child img', {
        scale: 0
    }, '<')

    gsap.to('.footer__point', {
        y: 0,
        scrollTrigger: {
            trigger: '.main',
            start: 'top top',
            end: 'bottom bottom',
            scrub: true
        }
    })

    const tlFooter = gsap.timeline({
        scrollTrigger: {
            trigger: '.footer',
            start: 'top 80%',
            end: 'bottom bottom',
            scrub: true
        }
    })
    tlFooter.to('.footer__point svg path', {
        fill: '#FF0027',
        opacity: 1
    })
    tlFooter.to('footer__point', {
        scale: 1
    }, '<')
    });

    mm.add("(max-width: 1024px)", () => {

    const tlTitle = gsap.timeline({})
    tlTitle.to('.promo__title span:first-child', {
        x: 0,
        ease: 'back.out(1.1)',
        duration: 1
        })
    .to('.promo__title span:last-child', {
        x: 0,
        ease: 'back.out(1.1)',
        duration: 1
        }, '<')

    const tlPromo = gsap.timeline({
        scrollTrigger: {
            trigger: '.promo',
            start: 'top top',
            end: '+=50%',
            scrub: true,
        }
    })
    tlPromo.to('.promo__bottom', {
        opacity: 1,
        y: 0
    })
    .fromTo('.promo__bottom img', {y: -55}, {
        y: 30
    }, '<')

    const tlLines = gsap.timeline({
        scrollTrigger: {
            trigger: '.choose__wrap',
            start: 'top bottom',
            end: 'bottom top',
            scrub: true
        }
    })
    tlLines.to('.choose__wrap .top', {
        xPercent: -70
    })
    tlLines.to('.choose__wrap .bottom', {
        xPercent: 15
    }, '<')

    gsap.from('.rates__card:nth-child(odd), .rates__card:nth-child(even)', {
        opacity: 0,
        yPercent: 100,
        stagger: 0.5,
        scrollTrigger: {
            trigger: '.rates__wrap',
            start: 'top center',
            toggleActions: 'play none none reverse',
        }
    })

    const tlFooter = gsap.timeline({
        scrollTrigger: {
            trigger: '.footer',
            start: 'top 80%',
            end: 'bottom bottom',
            scrub: true
        }
    })
    tlFooter.to('.footer__point svg path', {
        fill: '#FF0027',
        opacity: 1
    })
    tlFooter.to('footer__point', {
        scale: 1
    }, '<')
    });

    gsap.to('.progress-bar', {
        width: '100%',
        scrollTrigger: {
            trigger: '.body',
            start: 'top top',
            end: 'bottom bottom',
            scrub: true
        }
    })
}
