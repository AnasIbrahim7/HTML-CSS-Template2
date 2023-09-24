let menuIcon = document.getElementsByClassName("icon")[0];
let nav = document.getElementsByTagName("nav")[0];
let links = document.getElementsByTagName("ul")[0];
let span = document.getElementsByTagName("span")[2];
let rightArrow1 = document.getElementsByClassName("right")[0];
let leftArrow2 = document.getElementsByClassName("left")[0];
let rightArrow2 = document.getElementsByClassName("right")[1];
let leftArrow3 = document.getElementsByClassName("left")[1];
let pageIcon1 = document.getElementsByClassName("page-one")[0];
let pageIcon2 = document.getElementsByClassName("page-two")[0];
let pageIcon3 = document.getElementsByClassName("page-three")[0];
let introsContainer = document.getElementsByClassName("intros-container")[0];
let showMoreBtn = document.getElementById("overflow");
let gallery = document.getElementById("gallery");
let x = document.getElementsByClassName("numbers")[0];
const y = document.getElementById("pricing");
console.log(y.scrollHeight)
console.log(window.scrollY)

document.addEventListener("click", function (e) {
    if (e.target === menuIcon || e.target.className === "bar-icon") {
        if (getComputedStyle(nav).left !== "0px") {
            console.log(e.target)
            nav.style = "left: 0px;"
            span.style = "width: 100%"
        } else {
            nav.style = "left: -100%;"
            span.style = "width: 75%"
        } 
    }
})

pageIcon1.style = "background-color: var(--font-color);"
document.addEventListener("click", function (e) {
    if (e.target === rightArrow1 || e.target === leftArrow3 || e.target === pageIcon2) {
        introsContainer.style = `left: -100%`;
        pageIcon2.style = "background-color: var(--font-color);"
        pageIcon1.style = "background-color: none;"
        pageIcon3.style = "background-color: none;"
    } else if (e.target === rightArrow2 || e.target === pageIcon3) {
        introsContainer.style = `left: -200%`;
        pageIcon3.style = "background-color: var(--font-color);"
        pageIcon1.style = "background-color: none;"
        pageIcon2.style = "background-color: none;"
    } else if (e.target === leftArrow2 || e.target === pageIcon1) {
        introsContainer.style = `left: 0%`;
        pageIcon1.style = "background-color: var(--font-color);"
        pageIcon2.style = "background-color: none;"
        pageIcon3.style = "background-color: none;"
    }
});

showMoreBtn.onclick = function () {
    if (getComputedStyle(gallery).height === "570px") {
        showMoreBtn.innerHTML = "less";
        gallery.style = "height: 100%";
        showMoreBtn.style = "background-color: var(----font-color)"
    } else {
        showMoreBtn.innerHTML = "more";
        gallery.style = "height: 570px";
    }
}