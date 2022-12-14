let elNav = document.querySelector(".js-nav")
let elBtn = document.querySelector(".btn-js")
let elBody = document.querySelector("body")
let elOverlay = document.querySelector(".overlay")

elBtn.addEventListener("click", function(){
    elNav.classList.toggle("js-nav-show")
    elBtn.classList.toggle("burgerbtn-show")
    elBody.classList.toggle("bodyshow")
    elOverlay.classList.toggle("overlay-show")
})
elOverlay.addEventListener("click", function(){
    elNav.classList.toggle("js-nav-show")
    elOverlay.classList.remove("overlay-show")
    elBody.classList.remove("bodyshow")
    elBtn.classList.remove("burgerbtn-show")
})

$(".sleder").slick({
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 2,
    arrows:false,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
        {
            breakpoint: 2220,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '0',
                slidesToShow:3
            }
        },
        {
            breakpoint: 1000,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '0',
                slidesToShow: 2
            }
        },
        {
            breakpoint: 620,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '0',
                slidesToShow:1
            }
        }
    ]
});
