const iconMenu  = document.getElementById("icon-menu")
const navLink = document.getElementById("nav-links")



iconMenu.addEventListener('click',() => {
    if(navLink.style.height === '0px'){
        navLink.style.height = '300px'
    }
    else{
        navLink.style.height = '0px'
    }
})
