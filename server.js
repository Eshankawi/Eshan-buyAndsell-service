// Handle Signup Form Submission
document.getElementById("signupForm").addEventListener("submit", async function (event) {
    event.preventDefault();

    const email = document.getElementById("signupEmail").value;
    const password = document.getElementById("signupPassword").value;

    try {
        const response = await fetch("http://localhost:5000/signup", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, password }),
        });
        const data = await response.json();
        if (response.ok) {
            alert("User created successfully!");
        } else {
            alert(data.message);
        }
    } catch (error) {
        console.error("Error:", error);
    }
});

// Handle Login Form Submission
document.getElementById("loginForm").addEventListener("submit", async function (event) {
    event.preventDefault();

    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;

    try {
        const response = await fetch("http://localhost:5000/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, password }),
        });
        const data = await response.json();
        if (response.ok) {
            alert("Login successful!");
            localStorage.setItem("token", data.token); // Save JWT token in localStorage
        } else {
            alert(data.message);
        }
    } catch (error) {
        console.error("Error:", error);
    }
});

// Handle Product Display (example data)
const productList = document.getElementById("product-list");
const products = [
    {
        name: "Laptop",
        price: 1000,
        description: "A high-performance laptop.",
        category: "electronics",
        image: "https://via.placeholder.com/200"
    },
    {
        name: "T-Shirt",
        price: 20,
        description: "Comfortable cotton T-shirt.",
        category: "clothing",
        image: "https://via.placeholder.com/200"
    },
    {
        name: "Sofa",
        price: 500,
        description: "Luxurious leather sofa.",
        category: "furniture",
        image: "https://via.placeholder.com/200"
    }
];

// Function to display products
function displayProducts() {
    productList.innerHTML = "";
    products.forEach(product => {
        const productDiv = document.createElement("div");
        productDiv.classList.add("product");

        productDiv.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <p><strong>Price:</strong> $${product.price}</p>
        `;

        productList.appendChild(productDiv);
}

// Function to filter products by category
function filterByCategory(category) {
    const filteredProducts = products.filter(product => product.category === category);
    displayFilteredProducts(filteredProducts);
}

// Function to display filtered products
function displayFilteredProducts(filteredProducts) {
    productList.innerHTML = "";
    filteredProducts.forEach(product => {
        const productDiv = document.createElement("div");
        productDiv.classList.add("product");

        productDiv.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <p><strong>Price:</strong> $${product.price}</p>
        `;

        productList.appendChild(productDiv);
}

displayProducts(); // Show all products initially
