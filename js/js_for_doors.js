const functionTransitionDoor = () => {
    const leftDoor = document.querySelector(".leftDoor");
    const rightDoor = document.querySelector(".rightDoor");
    const arrowDoor = document.querySelector(".arrow_doors");
    const arrowDoorAll = document.querySelector(".all_text");
    const allDoors = document.querySelector(".doors");
    const allText = document.querySelector(".entire_element");

    // arrowDoor.addEventListener("click", () => {
    //     leftDoor.classList.add("leftDoor_active");
    //     rightDoor.classList.add("rightDoor_active");
    //     arrowDoorAll.classList.add("arrow_active");
    // });


    // var hiddenAll = function () {
    //     allDoors.classList.add("hidden");
    //     allText.classList.add("all_text_after")
    //     console.log("it worked")
    // };

    var AddElements = function () {
        leftDoor.classList.add("leftDoor_active");
        rightDoor.classList.add("rightDoor_active");
        arrowDoorAll.classList.add("arrow_active");
        setTimeout(function () {
            allDoors.classList.add("hidden");
            allText.classList.add("all_text_after")
            console.log("it worked")

        }, 2000);
    }


    arrowDoor.addEventListener("click", AddElements);
    console.log("function is working")


}

functionTransitionDoor();

// function endDoors () {
//     const allDoors = document.querySelector(".doors");
//     const allText = document.querySelector(".all_text");

//     arrowDoor.addEventListener("transitionend", () => {
//         allDoors.classList.add("hidden");
//         allText.classList.add("all_text_after")
//     });


//     console.log("now everthing is hidden");
// }

// endDoors();

// window.addEventListener("load", openPage);

// hideScreens();

// function openPage() {
//   document.querySelector(".doors").classList.remove("hidden");
// }

// ///////////////////////////////////////////////////////////////
// //here starts the functions for opening the doors
// const functionLeftDoor = () => {
//   const leftDoor = document.querySelector(".leftDoor");
//   const arrowDoor = document.querySelector(".arrow_doors");

//   arrowDoor.addEventListener("click", () => {
//     leftDoor.classList.add("leftDoor_active");
//     // leftDoor.classList.add("hidden");

//     // console.log("it toggles for top navigation");
//   });
// };

// functionLeftDoor();

// const functionRightDoor = () => {
//   const rightDoor = document.querySelector(".rightDoor");
//   const arrowDoor = document.querySelector(".arrow_doors");

//   arrowDoor.addEventListener("click", () => {
//     rightDoor.classList.add("rightDoor_active");
//     // leftDoor.classList.add("hidden");

//     // console.log("it toggles for top navigation");
//   });
// };

// functionRightDoor();


// // const functionWritingDoor = () => {
// //   const textDoor = document.querySelectorAll("h3");
// //   const arrowDoor = document.querySelector(".arrow_doors");

// //   arrowDoor.addEventListener("click", () => {
// //     textDoor.classList.add("text_active");
// //     console.log("the entire element is working");
// //     // leftDoor.classList.add("hidden");

// //   });
// // };

// // functionWritingDoor();

// const functionarrowDoor = () => {
//   const arrowDoor = document.querySelector(".all_text");

//   arrowDoor.addEventListener("click", () => {
//     arrowDoor.classList.add("arrow_active");
//     console.log("arrow");

//     // leftDoor.classList.add("hidden");

//   });
// };

// functionarrowDoor ();



// function endDoors () {
//     const allDoors = document.querySelector(".doors");
//     allDoors.classList.add("hidden");
//     console.log("now everthing is hidden");
// }

// ///////////////////////////////////////////////////////////////
// //here starts the functions which hides all the screens
// function hideScreens() {
//     // Adding the "hidden" class to all screens and thereby making them invisible
//     document.querySelector(".doors").classList.add("hidden");

//     console.log("all the classes have been added");
//   }