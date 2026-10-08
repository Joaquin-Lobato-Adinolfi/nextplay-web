const filterButtons = document.querySelectorAll(".filter-button");
const productCards = document.querySelectorAll(".product-card");
const productList = document.querySelector("#product-list");


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
        name: "Monitor Táctil Elo ET1004L",
        category: "touch",
        categoryName: "Monitores Touch",
        image: "assets/images/prodImages/ET1004L/front.png",
        description:
            "Monitor táctil profesional diseñado para integraciones comerciales, industriales y de entretenimiento."
    },  

    {
        name: "Elo ET1509L",
        category: "touch",
        categoryName: "Monitores Touch",
        image: "assets/images/prodImages/ET1509L/front.png",
        description:
            "Monitor táctil profesional diseñado para integraciones comerciales, industriales y de entretenimiento."
    }, 
    
    { 
        name: "Elo ET2202L",
        category: "touch",
        categoryName: "Monitores Touch",
        image: "assets/images/prodImages/ET2202L/front.jpg",
        description:
            "Monitor táctil profesional diseñado para integraciones comerciales, industriales y de entretenimiento."
    },

    {
        name: "WallabyPro E989314",
        category: "pos",
        categoryName: "POS",
        image: "assets/images/prodImages/E989314 WallabyPro/front.jpg",
        description:
            "Terminal POS profesional diseñada para aplicaciones comerciales y puntos de atención.(Stand no incluido)"
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
        name: "E-POS TP88E",
        category: "printer",
        categoryName: "Impresoras",
        image: "assets/images/prodImages/EPOS_TP88E/front.png",
        description:
            "Impresora fiscal profesional diseñada para aplicaciones comerciales y puntos de atención."
    }
];

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

                    <div class="product-actions">

                        <a href="contacto.html" class="product-link">
                            Consultar precios
                        </a>

                        <a href="#productoInfo" class="product-link">
                            Más información
                        </a>

                    </div>
                </div>

            </article>
        `;

    }).join("");

}

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

renderProducts(products);