let stars = document.getElementById('stars')
let moon = document.getElementById('moon')
let mountains3 = document.getElementById('mountains3')
let mountains4 = document.getElementById('mountains4')
let river = document.getElementById('river')
let boat = document.getElementById('boat')
let youssef = document.querySelector('.youssef')
window.onscroll = function(){
    let value = scrollY;
    stars.style.left = value + 'px'
    moon.style.top = value * 4+ 'px'
    mountains3.style.top = value * 2 + 'px'
    mountains4.style.top = value * 1.5 + 'px'
    river.style.top = value + 'px'
    boat.style.top = value + 'px'
    boat.style.left = value * 3 + 'px'
    youssef.style.fontSize = value + 'px'
    if(scrollY >= 77){
        youssef.style.fontSize = 77 + 'px'
        youssef.style.position = 'fixed'
        if(scrollY >= 510){
            youssef.style.display = 'none'
        }else{
            youssef.style.display = 'block'
        }
        if(scrollY >= 147){
            document.querySelector('.landing').style.background = 'linear-gradient(#3e88a3, #42275a)'
        }else{
            document.querySelector('.landing').style.background = 'linear-gradient(to top, #734b6d, #42275a)'
        }

    }
}
