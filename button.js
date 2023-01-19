'use strict';


var button = querySelector("button-menu");
var nav = querySelector("ul-navbar-menu")
var bool= 

 verMenu = () => {
   
    nav.style.top = "30rem";
       
   }

/* Set the width of the side navigation to 250px */
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }
  
  /* Set the width of the side navigation to 0 */
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }




button.addEventListener('click', verMenu);