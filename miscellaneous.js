var checker = document.querySelector('.menu-toggle');

checker.addEventListener('click', function() {
    if (checker.classList.contains('active')) {
        console.log("Animasi nutup")
    }
    console.log("animasi buka")
})