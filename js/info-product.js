const params = new URLSearchParams(window.location.search);

const productId = params.get("id");

const product = products.find(product => {
    return product.id === productId;
});


if (product) {
    renderProduct(product);
} else {
    showProductNotFound();
}


function renderProduct(product) {

    const categoryElement =
        document.querySelector("#product-category");

    const nameElement =
        document.querySelector("#product-name");

    const descriptionElement =
        document.querySelector("#product-description");

    const mainImage =
        document.querySelector("#main-product-image");

    const thumbnailsContainer =
        document.querySelector("#product-thumbnails");

    const featuresContainer =
        document.querySelector("#product-features");


    /* PRODUCT INFORMATION */

    categoryElement.textContent =
        product.categoryName.toUpperCase();

    nameElement.textContent =
        product.name;

    descriptionElement.textContent =
        product.description;


    /* MAIN IMAGE */

    mainImage.src = product.images[0];
    mainImage.alt = product.name;


    /* PRODUCT FEATURES */

    featuresContainer.innerHTML =
        product.features
            .map(feature => `
                <li>${feature}</li>
            `)
            .join("");


    /* PRODUCT THUMBNAILS */

    thumbnailsContainer.innerHTML =
        product.images
            .map((image, index) => `
                <button
                    class="product-thumbnail ${index === 0 ? "active" : ""}"
                    data-image="${image}"
                >
                    <img
                        src="${image}"
                        alt="${product.name}"
                    >
                </button>
            `)
            .join("");


    /* PAGE TITLE */

    document.title =
        `${product.name} | Nextplay`;


    setupGallery();
}


function setupGallery() {

    const mainImage =
        document.querySelector("#main-product-image");

    const thumbnails =
        document.querySelectorAll(".product-thumbnail");


    thumbnails.forEach(thumbnail => {

        thumbnail.addEventListener("click", () => {

            mainImage.src =
                thumbnail.dataset.image;


            thumbnails.forEach(item => {
                item.classList.remove("active");
            });


            thumbnail.classList.add("active");

        });

    });

}


function showProductNotFound() {

    const productDetail =
        document.querySelector(".product-detail");


    productDetail.innerHTML = `
        <div class="product-not-found">

            <h1>Producto no encontrado</h1>

            <p>
                El producto que estás buscando no está disponible.
            </p>

            <a
                href="productos.html"
                class="button primary-button"
            >
                Volver a productos
            </a>

        </div>
    `;
}