const body = document.getElementsByTagName('body')
const sections = document.querySelectorAll('section')

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
            console.log(el.target.id)
            body[0].style.backgroundColor = color[el.target.id]
        } else {

        }
    })
})

sections.forEach(e => {
    observer.observe(e)
})