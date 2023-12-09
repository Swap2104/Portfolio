const body = document.getElementsByTagName('body')
const sections = document.querySelectorAll('section')
const langs = document.querySelectorAll(".right, .left ,.about-me ,.github-card ,.pixel-art ,.blender, .drawing")
// ! To add card animation add it's class / id here 


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

//? intersection observer for home text animation
const homeAnimationObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            handleMouseOverAnimation();
        }
    });
});

document.querySelectorAll(".hello").forEach(element => homeAnimationObserver.observe(element));

//? function for text animation
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let interval = null

function handleMouseOverAnimation() {
    let iteration = 0;

    clearInterval(interval);

    interval = setInterval(() => {
        document.querySelector(".hello").innerText = document.querySelector(".hello").innerText
            .split("")
            .map((letter, index) => {
                if (index < iteration) {
                    return document.querySelector(".hello").dataset.value[index];
                }
                return letters[Math.floor(Math.random() * 26)];
            })
            .join("");

        if (iteration >= document.querySelector(".hello").dataset.value.length) {
            clearInterval(interval);
        }

        iteration += 1 / 3;
    }, 40); //!<-- animation speed
}


// ! cursor
const cursor = document.querySelector(".cursor")
document.addEventListener("mousemove", e => cursor.setAttribute("style", "top:" + (e.pageY - 10) + "px;" + " " + "left:" + (e.pageX - 10) + "px;"))

document.addEventListener('click', () => {
    cursor.classList.add("click")
    setTimeout(() => cursor.classList.remove("click"), 1000);
})