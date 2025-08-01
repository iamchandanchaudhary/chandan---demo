let items = document.querySelectorAll('.slider .list .item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');
let thumbnails = document.querySelectorAll('.thumbnail .item');

// config param
let countItem = items.length;
let itemActive = 0;
// event next click
next.onclick = function(){
    itemActive = itemActive + 1;
    if(itemActive >= countItem){
        itemActive = 0;
    }
    showSlider();
}
//event prev click
prev.onclick = function(){
    itemActive = itemActive - 1;
    if(itemActive < 0){
        itemActive = countItem - 1;
    }
    showSlider();
}
// auto run slider
let refreshInterval = setInterval(() => {
    next.click();
}, 5000)
function showSlider(){
    // remove item active old
    let itemActiveOld = document.querySelector('.slider .list .item.active');
    let thumbnailActiveOld = document.querySelector('.thumbnail .item.active');
    itemActiveOld.classList.remove('active');
    thumbnailActiveOld.classList.remove('active');

    // active new item
    items[itemActive].classList.add('active');
    thumbnails[itemActive].classList.add('active');
    setPositionThumbnail();

    // clear auto time run slider
    clearInterval(refreshInterval);
    refreshInterval = setInterval(() => {
        next.click();
    }, 5000)
}
function setPositionThumbnail () {
    let thumbnailActive = document.querySelector('.thumbnail .item.active');
    let rect = thumbnailActive.getBoundingClientRect();
    if (rect.left < 0 || rect.right > window.innerWidth) {
        thumbnailActive.scrollIntoView({ behavior: 'smooth', inline: 'nearest' });
    }
}

// click thumbnail
thumbnails.forEach((thumbnail, index) => {
    thumbnail.addEventListener('click', () => {
        itemActive = index;
        showSlider();
    })
})

// Scroll Animation
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        // console.log(entry);
        if(entry.isIntersecting) {
            entry.target.classList.add("show");
        } else {
            entry.target.classList.remove("show");
        }
    });
});

const hiddenElementsO = document.querySelectorAll(".not-show-odd");
const hiddenElementsE = document.querySelectorAll(".not-show-even");
const hiddenElementsP = document.querySelectorAll(".not-show-pop");
const hiddenElementsPs = document.querySelectorAll(".not-show-pop-slow");
const hiddenElementsT = document.querySelectorAll(".not-show-top");
const hiddenElementsB = document.querySelectorAll(".not-show-bottom");
const hiddenElementsR = document.querySelectorAll(".not-show-right");
const hiddenElementsL = document.querySelectorAll(".not-show-left");
const hiddenElementsRS = document.querySelectorAll(".not-show-right-special");
const hiddenElementsLS = document.querySelectorAll(".not-show-left-special");
const hiddenElementsRH = document.querySelectorAll(".not-show-right-high");
const hiddenElementsLH = document.querySelectorAll(".not-show-left-high");

hiddenElementsO.forEach((e1) => observer.observe(e1));
hiddenElementsE.forEach((e1) => observer.observe(e1));
hiddenElementsP.forEach((e1) => observer.observe(e1));
hiddenElementsPs.forEach((e1) => observer.observe(e1));
hiddenElementsT.forEach((e1) => observer.observe(e1));
hiddenElementsB.forEach((e1) => observer.observe(e1));
hiddenElementsR.forEach((e1) => observer.observe(e1));
hiddenElementsL.forEach((e1) => observer.observe(e1));
hiddenElementsRS.forEach((e1) => observer.observe(e1));
hiddenElementsLS.forEach((e1) => observer.observe(e1));
hiddenElementsRH.forEach((e1) => observer.observe(e1));
hiddenElementsLH.forEach((e1) => observer.observe(e1));