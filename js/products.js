const filterButtons = document.querySelectorAll(".filter-button");
const productList = document.querySelector("#product-list");

const urlParams = new URLSearchParams(window.location.search);
const categoryFromUrl = urlParams.get("category") || "all";

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

                        <a href="informacion-producto.html?id=${product.id}" class="product-link">
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


function applyFilter(category) {

    const productsToShow =
        category === "all"
            ? products
            : products.filter(product =>
                product.category === category
            );

    renderProducts(productsToShow);

    filterButtons.forEach(button => {
        button.classList.toggle(
            "active",
            button.dataset.filter === category
        );
    });
}


applyFilter(categoryFromUrl);

