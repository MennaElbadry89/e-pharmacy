


const menu = document.querySelector('nav ul')
const menuToggler = document.querySelector('.fa-bars')
const toTop = document.querySelector('.fa-arrow-up')

 window.addEventListener('scroll', function(){
    if(this.scrollY >180){
        menu.style.position = 'fixed'
        menu.style.top = 0
    }else{
         menu.style.position = 'static'
        menu.style.top = 'unset'
    }
    if( this.scrollY > 600 ){
      toTop.style.visibility = 'visible'
      toTop.style.opacity = '1'
    }else{
       toTop.style.visibility = 'hidden'
      toTop.style.opacity = '0'
    }
  })
  
  
  toTop.onclick = function(){
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }


  menuToggler.addEventListener('click', function(){
  this.classList.toggle('open')
  menu.classList.toggle('open')
})

