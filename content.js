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


const modal = document.getElementById("myModal")
const openBtn = document.getElementById("openBtn")
const closeBtn = document.querySelector(".close")

openBtn.onclick = () => {
    modal.style.display = "flex";
};

closeBtn.onclick = () => {
    modal.style.display = "none";
};

window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});



const modal1 = document.getElementById("myModal1")
const openBtn1 = document.getElementById("openBtn1")
const closeBtn1 = document.querySelector(".close1")

openBtn1.onclick = () => {
    modal1.style.display = "flex";
};

closeBtn1.onclick = () => {
    modal1.style.display = "none";
};

window.addEventListener('click', (event) => {
    if (event.target === modal1) {
        modal1.style.display = "none";
    }
});


const modal2 = document.getElementById("myModal2")
const openBtn2 = document.getElementById("openBtn2")
const closeBtn2 = document.querySelector(".close2")

openBtn2.onclick = () => {
    modal2.style.display = "flex";
};

closeBtn2.onclick = () => {
    modal2.style.display = "none";
};

window.addEventListener('click', (event) => {
    if (event.target === modal2) {
        modal2.style.display = "none";
    }
});


const modal3 = document.getElementById("myModal3")
const openBtn3 = document.getElementById("openBtn3")
const closeBtn3 = document.querySelector(".close3")

openBtn3.onclick = () => {
    modal3.style.display = "flex";
};

closeBtn3.onclick = () => {
    modal3.style.display = "none";
};

window.addEventListener('click', (event) => {
    if (event.target === modal3) {
        modal3.style.display = "none";
    }
});


const modal4 = document.getElementById("myModal4")
const openBtn4 = document.getElementById("openBtn4")
const closeBtn4 = document.querySelector(".close4")

openBtn4.onclick = () => {
    modal4.style.display = "flex";
};

closeBtn4.onclick = () => {
    modal4.style.display = "none";
};

window.addEventListener('click', (event) => {
    if (event.target === modal4) {
        modal4.style.display = "none";
    }
});