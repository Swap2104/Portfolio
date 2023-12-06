const body = document.getElementsByTagName('body')
const sections = document.querySelectorAll('section')
const langs = document.querySelectorAll(".right, .left ,.about-me ,.github-card")
// const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// let interval = null;


//? intersection observer-- used to change background color on scroll
const observer = new IntersectionObserver(e => {
    let color = {
        index: "rgb(40, 40, 40)",
        about: "rgb(35, 35, 35)",
        info: "rgb(30, 30, 30)",
        Projects: "rgb(25, 25, 25)",
        Hobbies: "rgb(20, 20, 20)"
    }
    e.forEach(el => {
        if (el.isIntersecting) {
            body[0].style.backgroundColor = color[el.target.id]
        } else {

        }
    })
})

sections.forEach(e => observer.observe(e))

// ? intersection observer-- used for on scroll animation
const animation = new IntersectionObserver(e => {
    e.forEach(el => {
        if (el.isIntersecting) {
            console.log(el.target)
            el.target.classList.remove("hide")
            el.target.classList.add("show")
        } else {
            el.target.classList.remove("show")
            el.target.classList.add("hide")
        }
    })
})

langs.forEach(e => {
    e.classList.add("hide")
    animation.observe(e)
})

const home_animation = new IntersectionObserver(e => {
    e.forEach(el => {
        if (el.isIntersecting) {
            el.target.classList.add("h1-animation")
        } else {
            el.target.classList.remove("h1-animation")
        }
    })
})

document.querySelectorAll(".hello").forEach(e => home_animation.observe(e))

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

let interval = null;

document.querySelector(".h1-animation").onmouseover = event => {
    let iteration = 0;

    clearInterval(interval);

    interval = setInterval(() => {
        event.target.innerText = event.target.innerText
            .split("")
            .map((letter, index) => {
                if (index < iteration) {
                    return event.target.dataset.value[index];
                }

                return letters[Math.floor(Math.random() * 26)]
            })
            .join("");

        if (iteration >= event.target.dataset.value.length) {
            clearInterval(interval);
        }

        iteration += 1 / 3;
    }, 40);
}