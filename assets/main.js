
//Menu Mobile
const meuIcon = document.querySelector(".nav-bar");
const mobileMenu = document.querySelector(".mobile-menu");

const bar1 = document.querySelector(".bar1");
const bar2 = document.querySelector(".bar2");
const bar3 = document.querySelector(".bar3");

function showAndHideMenu() {
    mobileMenu.classList.toggle("appear");
    
    bar1.classList.toggle("bar1-changed");
    bar2.classList.toggle("bar2-changed");
    bar3.classList.toggle("bar3-changed");

}
meuIcon.addEventListener("click", showAndHideMenu);

//Abre Conteúdo dos cards
const projectCards = document.querySelectorAll(".project-card");
const projectContent = document.querySelectorAll(".project-content");
const closeBtns = document.querySelectorAll(".close-content");

projectCards.forEach((card, index)=>{
    card.addEventListener("click",()=>{
        projectContent[index].classList.add("active");
        projectContent[index].scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
});
//Fecha Conteúdo dos cards
closeBtns.forEach((button, index) => {
    button.addEventListener('click',()=>{
        projectContent[index].classList.remove('active');
    })
})

