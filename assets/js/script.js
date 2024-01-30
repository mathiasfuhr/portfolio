document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll(".section");

    function checkVisibility() {
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const isVisible = rect.top <= window.innerHeight / 1;

        // Adiciona ou remove a classe "visible" conforme a visibilidade
        if (isVisible) {
          section.classList.add("visible");
        } else {
          section.classList.remove("visible");
        }
      });
    }

    window.addEventListener("scroll", checkVisibility);
    window.addEventListener("resize", checkVisibility);
    document.addEventListener("DOMContentLoaded", checkVisibility);
  });




const trilho = document.getElementById('trilho');
const body = document.querySelector('body');
trilho.addEventListener('click', ()=>{
  trilho.classList.toggle('dark');
  body.classList.toggle('dark');
})