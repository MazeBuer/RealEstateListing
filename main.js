//HAMBURGER MENU
// For toggling and finding number of children and other stuff is done here!

const navigation = document.getElementById("nav");
const menu = document.getElementById("menu");

menu.addEventListener("click", () => {
  // The navigation.children.length means the following :-
  // The children inside a parent are basically an array of elements; So, here I'm finding the length of the array aka how many children are inside the nav bar.
  //   Yup That's all.
  navigation.style.setProperty("--childenNumber", navigation.children.length);

  //    Casually Toggling Classes to make them animate on click
  //   Regular stuff ;)
  navigation.classList.toggle("active");
  menu.classList.toggle("active");
});

//SCROLL DOWN FROM MENU

//Get all sections that have an ID defined
const sections = document.querySelectorAll('section[id');

//add event listener listening for scroll
window.addEventListener('scroll', navHighlighter);

function navHighlighter() {
    //get current scroll position
  let scrollY = window.pageYOffset;

    //now we loop thru sections to get height, top and ID values for each
  sections.forEach(current => {
    const sectionHeight = current.offsetHeight;

    const sectionTop = (current.getBoundingClientRect().top + window.pageYOffset) - 50;
      sectionId = current.getAttribute('id');

    if (axeollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document.querySelector(".navigation a[href*=" + sectionId + "]").classList.add("active");
    }else {
      document.querySelector(".navigation a[href*=" + sectionId + "]").classList.remove("active");
    }
  });
}
