const burgerMenu = document.querySelector('.burger-menu')
const headerNav = document.querySelector(".header-nav")
const  burgerItem = document.querySelectorAll('.burger-item')
burgerMenu.addEventListener('click',()=>{
    if(! burgerMenu.classList.contains('active')){
        burgerMenu.classList.add('active')
        headerNav.style.transform = 'translateX(0)'

        burgerItem[0].style.transform = 'rotate(45deg) translateY(17px)'
        burgerItem[2].style.transform = 'rotate(-45deg) translateY(-17px)'
        burgerItem[1].style.transform = 'translateX(5px)'
        burgerItem[1].style.opacity = '0'

    }else {
        burgerMenu.classList.remove('active')
        headerNav.style.transform = ''



        burgerItem[0].style.transform = ''
        burgerItem[2].style.transform = ''
        burgerItem[1].style.transform = ''
        burgerItem[1].style.opacity = ''

    }
})


const modal = document.querySelector('.modal-window'),
    btn = document.querySelector('.open-btn'),
    closeModal = document.querySelector('.close-modal')
blurWindow = document.querySelector('.blur-window')


function  closeModalFn(){
    btn.classList.remove('active')
    modal.style.transform = ""
    btn.innerHTML = "open"
    blurWindow.style.display = "none"

}
btn.addEventListener('click',()=>{
    if (btn.classList.contains('active')){
        closeModalFn()
    } else {
        btn.classList.add('active')
        modal.style.transform = "scale(1)"
        btn.innerHTML = "close"
        blurWindow.style.display ="block"
    }
})
closeModal.addEventListener('click',()=>{
    closeModalFn()
})
blurWindow.addEventListener('click',()=>{
    closeModalFn()

})


//////Promise

console.log('Request date...')

setTimeout(()=>{


})