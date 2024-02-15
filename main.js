const productDictionary = {
    'pipe-tube-pro': [{
            name: 'Product 1',
            imageUrl: './Images/Products/product1.jpg',
            buttonText: 'Details',
            buttonUrl: '/product1-page.html'
        }, {
            name: 'Product 2',
            imageUrl: './Images/Products/SS Flange.jpg',
            buttonText: 'Read More',
            buttonUrl: 'index.html'
        },
        // Add more products as needed
    ],
    'Flanges-pro': [{
            name: 'Product A',
            imageUrl: './Images/Products/DISH END.jpg',
            buttonText: 'Details',
            buttonUrl: '/productA-page.html'
        }, {
            name: 'Product B',
            imageUrl: './Images/Products/productB.jpg',
            buttonText: 'Details',
            buttonUrl: '/productB-page.html'
        },
        // Add more products as needed
    ],
    // Repeat for other product categories
};
// Function to display product details when clicked
function displayProductDetails(categoryId, productId) {
    const productDetailsContainer = document.getElementById('product-details');
    const productTitle = document.getElementById('product-title');
    const productImage = document.querySelector('.product-image');
    const selectedProduct = productDictionary[categoryId][productId];
    productTitle.textContent = selectedProduct.name;
    productImage.src = selectedProduct.imageUrl;
    productDetailsContainer.style.display = 'block';
}
// Function to show products for a specific category
function showCategory(categoryId) {
    const allProductContainer = document.getElementById('all-product-list');
    const productDetailsContainer = document.getElementById('product-details');
    // Hide the product details container
    productDetailsContainer.style.display = 'none';
    // Clear existing products
    allProductContainer.innerHTML = '';
    // Show products for the selected category
    const products = (categoryId === 'all') ? Object.values(productDictionary).flat() : productDictionary[categoryId];
    // Populate products for the selected category
    products.forEach((product, index) => {
        const productItem = document.createElement('div');
        productItem.classList.add('product-item', 'product-card');
        productItem.innerHTML = `
                    <div class="product-card-header" onclick="displayProductDetails('${categoryId}', ${index})">
        ${product.name}
    </div>
    <div class="product-card-body">
        <img src="${product.imageUrl}" alt="${product.name}" class="product-image">
        <a href="#" class="btn" onclick="redirectToProductPage('${product.buttonUrl}')">${product.buttonText}</a>
    </div>
                `;
        allProductContainer.appendChild(productItem);
    });
    // Show the selected product container
    allProductContainer.style.display = 'block';
}
// Function to redirect to the product page
function redirectToProductPage(url) {
    window.location.href = url;
}
// Trigger the initial display of all categories
showCategory('all');