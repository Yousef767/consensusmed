

let nav = document.querySelector('nav');
let menu = document.querySelector('.menu');

menu.addEventListener('click',()=>{
  nav.classList.toggle('activeMenu');
})


let dropContainers = document.querySelectorAll('.dropList');
let dropListMenu = document.querySelectorAll('.dropListMenu');
let subListMenu = document.querySelectorAll('.subListMenu');
let subList = document.querySelectorAll('.subList');

dropContainers.forEach((e,i)=>{
  e.addEventListener('click',()=>{
  if(window.innerWidth >= 901){
    if(e.classList.contains('showMenu')){
      dropListMenu.forEach((e)=>{e.style.display="none"})
      subListMenu.forEach((e)=>{e.classList.remove('active')})
      subList.forEach((e)=>{e.style.display="none"})
      e.classList.toggle('showMenu');
      }else{
        dropListMenu[i].style.display='flex';
        e.classList.toggle('showMenu');
    }
  }else{
    e.classList.add('showMenu');
  }
  })
})
subListMenu.forEach((e,i)=>{
  e.addEventListener('mouseover',()=>{
    subListMenu.forEach((e)=>{e.classList.remove('active')})
    e.classList.add('active');
    subList.forEach((e)=>{e.style.display="none"})
    subList[i].style.display='flex';
  })
})

