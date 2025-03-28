document.addEventListener("DOMContentLoaded", () => {
    const products = [
        { name: "Smartphone", category: "electronics", price: "$500", image: "https://via.placeholder.com/150" },
        { name: "Laptop", category: "electronics", price: "$800", image: "https://via.placeholder.com/150" },
        { name: "Headphones", category: "electronics", price: "$100", image: "https://via.placeholder.com/150" },
        { name: "T-shirt", category: "fashion", price: "$20", image: "https://via.placeholder.com/150" },
        { name: "Jeans", category: "fashion", price: "$40", image: "https://via.placeholder.com/150" },
        { name: "Sofa", category: "home", price: "$300", image: "https://via.placeholder.com/150" },
        { name: "Table", category: "home", price: "$150", image: "https://via.placeholder.com/150" },
        { name: "Car", category: "automobiles", price: "$10,000", image: "https://via.placeholder.com/150" },
        { name: "Motorbike", category: "automobiles", price: "$5,000", image: "https://via.placeholder.com/150" },
        { name: "Football", category: "sports", price: "$25", image: "https://via.placeholder.com/150" },
        { name: "Tennis Racket", category: "sports", price: "$80", image: "https://via.placeholder.com/150" }
    ];

    const productList = document.getElementById("product-list");
    const categoryFilter = document.getElementById("category");
    const searchBar = document.getElementById("search-bar");

    function displayProducts(filteredProducts) {
        productList.innerHTML = "";
        filteredProducts.forEach(product => {
            const productCard = document.createElement("div");
            productCard.classList.add("product-card");
            productCard.innerHTML = `
                <img src="${product.image}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p>${product.price}</p>
                <button>Contact Seller</button>
            `;
            productList.appendChild(productCard);
        });
    }

    categoryFilter.addEventListener("change", () => {
        const selectedCategory = categoryFilter.value;
        const filtered = selectedCategory === "all" ? products : products.filter(p => p.category === selectedCategory);
        displayProducts(filtered);
    });

    searchBar.addEventListener("input", () => {
        const searchText = searchBar.value.toLowerCase();
        const filtered = products.filter(p => p.name.toLowerCase().includes(searchText));
        displayProducts(filtered);
    });

    displayProducts(products);
});
