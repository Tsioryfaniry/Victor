// import gsap from "gsap";
let moreICon = document.querySelectorAll(".more-icon");
let overlayContainer = document.querySelector(".overlay-container");
let card = document.querySelectorAll(".card");
let notifMark = document.querySelector(".notif-content");
let overlay = document.querySelector(".overlay-wrap");
let crossIcon = document.querySelector(".cross-icon");
let btnAlert = document.querySelector(".btn-alert");
//the animation of the translate of the text in the card
for (let i = 0; i < moreICon.length; i++) {
    moreICon[i].addEventListener("click", function(e) {
        overlay.classList.add("visible");
        overlayContainer.classList.add("active");
        gsap.fromTo(
            overlayContainer,
            0.2, { y: "100vh" }, { y: "auto", opacity: 1 }
        );
        gsap.fromTo(".overlay-wrap", 0.2, { opacity: 0 }, { opacity: 1 });
    });
}
//the overlay section
overlay.addEventListener("click", () => {
    overlayContainer.classList.remove("active");
    overlay.classList.remove("visible");
    gsap.fromTo(".overlay-wrap", 0.2, { opacity: 1 }, { opacity: 0 });
    gsap.fromTo(overlayContainer, 0.2, { y: "auto" }, { y: "100vh", opacity: 1 });
});
// Btn cross who close the overlay and the modal
crossIcon.addEventListener("click", function() {
    overlay.classList.remove("visible");
    gsap.to(overlayContainer, 0.2, { y: "100vh", opacity: 0 });
});
//the animation of the text in the card
for (let i = 0; i < card.length; i++) {
    const cardEl = card[i];
    let notif = cardEl.querySelector(".rond");
    let close = cardEl.querySelector(".close");
    let checkIcon = cardEl.querySelector(".check");
    let cardInfo = cardEl.querySelector(".card-info");
    close.addEventListener("click", function() {
        cardInfo.classList.toggle("translate");
    });

    //The notif icon who block the alert container
    notif.addEventListener("click", function() {
        notif.classList.add("active");
        setTimeout(() => {
            notifMark.classList.add("visible");
        }, 700);
        setTimeout(() => {
            notifMark.classList.remove("visible");
        }, 6000);
    });
}
//the overlay alert btn 
btnAlert.addEventListener("click", () => {
    btnAlert.innerHTML = "Inscrit";
    setTimeout(() => {
        notifMark.classList.add("visible");
    }, 700);
    setTimeout(() => {
        notifMark.classList.remove("visible");
    }, 6000);
});