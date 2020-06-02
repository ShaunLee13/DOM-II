// Your code goes here

const logo = document.querySelector('.logo-heading')
const navs = document.querySelectorAll('.nav-link')
const imgs = document.querySelectorAll('img')
const contentTxt = document.querySelectorAll('p')
const headings = document.querySelectorAll('h2')
const vacationBox = document.querySelector('.content-pick')
const secondButton = document.querySelectorAll('.btn')[1]
const footer = document.querySelector('footer')


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
    nav.addEventListener('click', () => {
        nav.style.color = 'red';
        setTimeout(function() {
            nav.style.color = "firebrick";
        }, 250)
        setTimeout(function() {
            nav.style.color = "";
        }, 250)
        event.preventDefault()
    })
})
//End of Nav effects