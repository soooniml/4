const show = document.querySelector('.show')

const side = document.querySelector('.sidebar')

show.addEventListener('click' , e=>{
    e.preventDefault()

    side.classList.toggle('active')

    show.classList.toggle('rotateBurger')
})