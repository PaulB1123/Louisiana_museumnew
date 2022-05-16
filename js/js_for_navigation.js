///////////////////////////////////////////////////////////////
//here starts the functions for the navigation bar
const navSlide = () => {
    //here I give the constant for all the elements that I will use
    const burger = document.querySelector(".burger_menu");
    const nav = document.querySelector(".nav-desktop_main");
    const navLinks = document.querySelectorAll(".nav-desktop_main li");
  
    //This is the function for the toggle burger menu
    burger.addEventListener("click", () => {
      nav.classList.toggle("active");
      console.log("the burger works");
    });
  
    //Animate links
    navLinks.forEach((link, index) => {
      link.getElementsByClassName.animation = `navLinkFade 0.5s ease forwards  ${
        index / 7 + 2
      }s`;
      console.log(index);
    });
  };
  
  ///////////////////////////////////////////////////////////////
  //here starts the functions for the top slider
  navSlide();
  
  const navSlide_top = () => {
    //here I give the constant for all the elements that I will use
    const arrow = document.querySelector(".arrowdown");
    const topNav = document.querySelector(".all_calendar_information");
    const body = document.querySelector("body");
  
    arrow.addEventListener("click", () => {
      topNav.classList.toggle("information_active");
      console.log("it toggles for top navigation");
    });
  };
  
  navSlide_top();
  
  const navSlide_top_reverse = () => {
    //here I give the constant for all the elements that I will use
    const arrow2 = document.querySelector(".arrowdown_v2 ");
    const topNav2 = document.querySelector(".all_calendar_information");
    const body2 = document.querySelector("body");
  
    arrow2.addEventListener("click", () => {
      topNav2.classList.remove("information_active");
      console.log("it toggles for top navigation");
    });
  };
  
  navSlide_top_reverse();
  
  ///////////////////////////////////////////////////////////////
  //here starts the functions which hides all the screens
  function hideScreens() {
    // Adding the "hidden" class to all screens and thereby making them invisible
    document.querySelector(".doors").classList.add("hidden");
  
    console.log("all the classes have been added");
  }
  