const hamburger =
document.getElementById('hamburger');
const navMenu =
document.getElementById('nav-menu');

hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('show');
});


function offers() {
const offers= document.getElementById("ourOffers")
offers.innerHTML =  "Every day is a new beginning! Don't let the opportunities pass you by! <br>go out, meet new people, and enjoy life!"
}

 function handleResize() {
    const links = document.querySelectorAll(".page__link");

    if (window.innerWidth <= 480) {
      links.forEach(link => {
        link.onclick = (e) => e.preventDefault();
      });
    } else {
      links.forEach(link => {
        link.onclick = null;
      });
    }
  }

  window.addEventListener("resize", handleResize);
  handleResize();