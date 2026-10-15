const featuredTrack = document.querySelector("#featured-track");
const previousButton = document.querySelector("#carousel-prev");
const nextButton = document.querySelector("#carousel-next");
const AUTO_PLAY_DELAY = 5000;

const featuredProducts = [
    {
        name: "Elo ET2294L",
        categoryName: "Monitor Touch",
        image: "assets/images/prodImages/ET2294L Nuevo/front.png",
        description: "Monitor táctil profesional para aplicaciones comerciales."
    },

    {
        name: "E989314 WallabyPro",
        categoryName: "POS",
        image: "assets/images/prodImages/E989314 WallabyPro/front.jpg",
        description: "Solución profesional para puntos de atención y venta."
    },

    {
        name: "WallabyPro E989512 - Stand",
        category: "pos",
        categoryName: "POS",
        image: "assets/images/prodImages/E989512 Wallaby Stand/standWallaby.jpg",
        description:
            "Stand para el terminal POS profesional WallabyPro, diseñado para aplicaciones comerciales y puntos de atención."
    }, 

    {
        name: "Elo ET2202L",
        categoryName: "Monitor Touch",
        image: "assets/images/prodImages/ET2202L/front.jpg",
        description: "Pantalla táctil diseñada para entornos comerciales."
    }
];

const carouselProducts = [
    ...featuredProducts,
    ...featuredProducts,
    ...featuredProducts
];

featuredTrack.innerHTML = carouselProducts.map(product => `
    <article class="product-card">

        <div class="product-image">
            <img src="${product.image}" alt="${product.name}">
        </div>

        <div class="product-content">

            <p class="product-category">
                ${product.categoryName}
            </p>

            <h3>${product.name}</h3>

        </div>

    </article>
`).join("");

function getCarouselStep() {

    const card = featuredTrack.querySelector(".product-card");

    const gap = parseFloat(
        getComputedStyle(featuredTrack).gap
    ) || 0;

    return card.getBoundingClientRect().width + gap;
}

function moveToMiddleCopy() {

    const step = getCarouselStep();

    featuredTrack.scrollLeft =
        featuredProducts.length * step;
}

window.addEventListener("load", moveToMiddleCopy);

nextButton.addEventListener("click", () => {

    featuredTrack.scrollBy({
        left: getCarouselStep(),
        behavior: "smooth"
    });
    startAutoPlay();
});

previousButton.addEventListener("click", () => {

    featuredTrack.scrollBy({
        left: -getCarouselStep(),
        behavior: "smooth"
    });
    startAutoPlay();
});

function normalizeCarousel() {

    const step = getCarouselStep();

    const copyWidth =
        featuredProducts.length * step;

    const currentPosition =
        featuredTrack.scrollLeft;


    if (currentPosition < copyWidth - step / 2) {

        featuredTrack.scrollLeft =
            currentPosition + copyWidth;

    }


    if (currentPosition >= copyWidth * 2 - step / 2) {

        featuredTrack.scrollLeft =
            currentPosition - copyWidth;

    }
}

let scrollTimer;

featuredTrack.addEventListener("scroll", () => {

    clearTimeout(scrollTimer);

    scrollTimer = setTimeout(() => {
        normalizeCarousel();
    }, 100);

});

let autoPlayTimer;

function startAutoPlay() {

    clearInterval(autoPlayTimer);

    autoPlayTimer = setInterval(() => {

        featuredTrack.scrollBy({
            left: getCarouselStep(),
            behavior: "smooth"
        });

    }, AUTO_PLAY_DELAY);
}

startAutoPlay();

