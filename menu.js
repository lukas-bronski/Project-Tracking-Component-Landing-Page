

 
    function displayMenu (e) {

        const hamburger=document.querySelector(".menu-mobile")
        hamburger.classList.toggle("menu-mobile-active")

        const image=document.querySelector(".hamburger_close")
        image.classList.toggle("hamburger_close_active")
       
        const hamburgerClosed=document.querySelector(".hamburger")
        hamburgerClosed.classList.toggle("hamburger_none")

     
        
    }


    function closeMenu (e) {

    document.querySelector(".menu-mobile").classList.remove("menu-mobile-active")
    document.querySelector(".hamburger_close").classList.remove("hamburger_close_active")
document.querySelector(".hamburger").classList.remove("hamburger_none")


    }

