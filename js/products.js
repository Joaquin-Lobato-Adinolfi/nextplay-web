const filterButtons = document.querySelectorAll(".filter-button");
const productCards = document.querySelectorAll(".product-card");

filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        const selectedCategory = button.dataset.filter;

        filterButtons.forEach(btn => {
            btn.classList.remove("active");
        });

        button.classList.add("active");

        productCards.forEach(card => {

            const productCategory = card.dataset.category;

            if (
                selectedCategory === "all" ||
                productCategory === selectedCategory
            ) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }

        });

    });

});

const products = [
    {
        name: "Elo ET2294L",
        category: "touch",
        categoryName: "Monitores Touch",
        image: "assets/images/prodImages/ET2294L Nuevo/front.png",
        description:
            "Monitor táctil profesional diseñado para integraciones comerciales, industriales y de entretenimiento."
    },

    {
        name: "E989314 WallabyPro",
        category: "pos",
        categoryName: "POS",
        image: "assets/images/prodImages/E989314 WallabyPro/front.jpg",
        description:
            "Terminal POS profesional diseñada para aplicaciones comerciales y puntos de atención."
    },

    {
        name: "Monitor Táctil Elo ET1004L",
        category: "touch",
        categoryName: "Monitores Touch",
        image: "assets/images/prodImages/ET1004L/front.png",
        description:
            "Monitor táctil profesional diseñado para integraciones comerciales, industriales y de entretenimiento."
    }
];

const productList = document.querySelector("#product-list");

function renderProducts(productsToShow) {

    productList.innerHTML = productsToShow.map(product => {

        return `
            <article class="product-card">

                <div class="product-image">
                    <img
                        src="${product.image}"
                        alt="${product.name}"
                    >
                </div>

                <div class="product-content">

                    <p class="product-category">
                        ${product.categoryName}
                    </p>

                    <h3>${product.name}</h3>

                    <p class="product-description">
                        ${product.description}
                    </p>

                    <a href="#contacto" class="product-link">
                        Consultar producto
                    </a>

                </div>

            </article>
        `;

    }).join("");

}

renderProducts(products);

filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        const selectedCategory = button.dataset.filter;

        filterButtons.forEach(btn => {
            btn.classList.remove("active");
        });

        button.classList.add("active");

        if (selectedCategory === "all") {

            renderProducts(products);

        } else {

            const filteredProducts = products.filter(product =>
                product.category === selectedCategory
            );

            renderProducts(filteredProducts);

        }

    });

});