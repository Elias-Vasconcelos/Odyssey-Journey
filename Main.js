const carrossel = document.querySelector('.carrosel-display');
const CarouselButton = document.querySelectorAll('.Controlador')
const Movecarrossel = document.querySelector(".carrosel-display").offsetWidth;

CarouselButton.forEach(btn =>{
    btn.addEventListener("click", () =>{
        carrossel.scrollLeft += btn.id === "prev" ? -Movecarrossel : Movecarrossel;
    })
})