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
