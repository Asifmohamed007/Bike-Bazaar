// <!-- I am Asif Mohamed Mohideen, a recent graduate from Jerusalem College of Engineering in Chennai, where I completed my Bachelor's Degree in Information Technology (B.Tech) in 2024. Throughout my academic journey, I have developed a strong foundation in various aspects of IT, with a particular interest in front-end development.

// As a fresher, I have focused my learning and projects on front-end technologies, where I’ve gained hands-on experience in HTML, CSS, and JavaScript. I am passionate about creating intuitive and engaging user interfaces that enhance user experience and contribute to the overall success of web applications.

// During my studies, I completed several projects that allowed me to apply my skills in practical scenarios, such as developing responsive web designs and interactive websites. These projects not only solidified my technical abilities but also taught me the importance of collaboration, problem-solving, and continuous learning.

// I am eager to bring my enthusiasm for front-end development to a dynamic team where I can contribute, grow, and continue to build on my knowledge and skills. I am particularly interested in opportunities that allow me to work on innovative projects and leverage my creativity to solve real-world problems.

// Portfolio link: https://asifmohamed-portfolio.netlify.app/ -->



// <!-- DONT USE THIS CODE WITHOUT PERMISSION FOR DETAILS CONTACT VIA --https://asifmohamed-portfolio.netlify.app/  -->

let hero_slide = document.querySelector('#hero-slide')

let hero_slide_items = hero_slide.querySelectorAll('.slide')

let hero_slide_index = 0

let hero_slide_play = true

let hero_slide_control_items = hero_slide.querySelectorAll('.slide-control-item')

let slide_next = hero_slide.querySelector('.slide-next')

let slide_prev = hero_slide.querySelector('.slide-prev')

let header = document.querySelector('header')

showSlide = (index) => {
    hero_slide.querySelector('.slide.active').classList.remove('active')
    hero_slide.querySelector('.slide-control-item.active').classList.remove('active')
    hero_slide_control_items[index].classList.add('active')
    hero_slide_items[index].classList.add('active')
}

nextSlide = () => {
    hero_slide_index = hero_slide_index + 1 === hero_slide_items.length ? 0 : hero_slide_index + 1
    showSlide(hero_slide_index)
}

prevSlide = () => {
    hero_slide_index = hero_slide_index - 1 < 0 ? hero_slide_items.length - 1 : hero_slide_index - 1
    showSlide(hero_slide_index)
}

slide_next.addEventListener('click', () => nextSlide())

slide_prev.addEventListener('click', () => prevSlide())

// add event to slide select
hero_slide_control_items.forEach((item, index) => {
    item.addEventListener('click', () => showSlide(index))
})

// pause slide when mouse come in slider
hero_slide.addEventListener('mouseover', () => hero_slide_play = false)

// resume slide when mouse leave out slider
hero_slide.addEventListener('mouseleave', () => hero_slide_play = true)

setTimeout(() => hero_slide_items[0].classList.add('active'), 200);

// auto slide
// setInterval(() => {
//     if (!hero_slide_play) return
//     nextSlide()
// }, 5000);

// change header style when scroll
window.addEventListener('scroll', () => {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        header.classList.add('shrink')
    } else {
        header.classList.remove('shrink')
    }
})

// element show on scroll

let scroll = window.requestAnimationFrame || function(callback) {window.setTimeout(callback, 1000/60)}

let el_to_show = document.querySelectorAll('.show-on-scroll')

isElInViewPort = (el) => {
    let rect = el.getBoundingClientRect()

    let distance = 200

    return (rect.top <= (window.innerHeight - distance || document.documentElement.clientHeight - distance))
}

loop = () => {
    el_to_show.forEach(el => {
        if (isElInViewPort(el)) el.classList.add('show')
    })

    scroll(loop)
}

loop()