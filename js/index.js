// Your code goes here

const body = document.querySelector('body')
const logo = document.querySelector('.logo-heading')
const navs = document.querySelectorAll('.nav-link')
const imgs = document.querySelectorAll('img')
const homeImg = document.querySelector('#home-img')
const contentTxt = document.querySelectorAll('p')
const headings = document.querySelectorAll('h2')
const secondButton = document.querySelectorAll('.btn')[1]
const footer = document.querySelector('footer')
const copyright = document.querySelector('footer>p')

//Page Effects
const nope = function(event){
    if(event.key === 'Escape'){
        body.style.backgroundColor = 'red'
        alert(`Hey! You can't do that!`)
    }
    setTimeout(function(){
        body.style.backgroundColor = ''
    }, 500)
}
document.addEventListener('keydown', nope)
//End of Page effects


//Functions for Logo effects
function logoWheel(event){
    logo.style.color = 'pink'
    setTimeout(function() {
        logo.style.color = "";
      }, 250);
}
document.addEventListener('wheel', logoWheel)
//End of Logo effects

//Nav Effects
navs.forEach((nav) => {
    nav.addEventListener('click', event => {
        nav.style.color = 'red';

        setTimeout(function() {
            nav.style.color = "";
        }, 250)
        event.preventDefault()
    })
})
//End of Nav effects

//Img Effects
imgs.forEach((img) => {
    img.addEventListener('mouseover', event => {
        img.style.opacity = '0.5'
    })
    img.addEventListener('mouseout', event => {
        img.style.opacity = '0'
        setTimeout(function() {
            img.style.opacity = '1'
        }, 250)
    })
})
homeImg.addEventListener('drag', event => {
    homeImg.style.display = 'none'
    setTimeout(function() {
        homeImg.style.display = ''
    }, 4000)
})
//End of Img effects


//Text Effects
//p to go to 1.4rem on m/o
contentTxt.forEach((p) => {
    p.addEventListener('mouseover', event => {
        p.style['font-size'] = '1.4rem'
    })
    p.addEventListener('mouseout', event => {
        p.style['font-size'] = '1.6rem'
    })
})

headings.forEach((h) => {
    h.addEventListener('dblclick', event => {
        h.classList.toggle('toggle')
    })
})
//End of Text effects


//2nd Button Effects
secondButton.addEventListener('click', event => {
    secondButton.style.backgroundColor = 'hotpink'
    setTimeout(function() {
        secondButton.style.backgroundColor = ''
    }, 250)
})
//End of 2nd Button effects


//Footer Effects
footer.addEventListener('mouseover', event => {
    footer.style.backgroundColor = 'skyblue'
    setTimeout(function() {
        footer.style.backgroundColor = ''
    }, 250)
})
copyright.addEventListener('mouseover', event => {
    copyright.style.color = 'yellow'
    setTimeout(function() {
        copyright.style.color = ''
    }, 250)
    event.stopPropagation()
})
