const productContainer = document.getElementById("productContainer")
const selectCategory = document.getElementById("selectCategory")
let allProducts = []

function renderProducts(products) {
  productContainer.innerHTML = ""
  products.forEach(product => {
    const col = document.createElement("div")
    col.className = "col-12 col-sm-6 col-md-4 col-lg-3 mb-4"
    col.innerHTML = `
      <div class="card h-100">
        <img src="${product.image}" class="card-img-top p-3" style="height: 250px; object-fit: contain;" alt="${product.title}">
        <div class="card-body d-flex flex-column">
          <h5 class="card-title">${product.title}</h5>
          <p class="card-text text-truncate">${product.description}</p>
          <p class="fw-bold">$${product.price}</p>
          <a href="#" class="btn btn-primary mt-auto">Add to Cart</a>
        </div>
      </div>
    `
    productContainer.appendChild(col)
  })
}

function populateCategories(products) {
  const categories = Array.from(new Set(products.map(p => p.category)))
  categories.forEach(category => {
    const option = document.createElement("option")
    option.value = category
    option.textContent = category
    selectCategory.appendChild(option)
  })
}

selectCategory.addEventListener("change", () => {
  const selected = selectCategory.value
  if (selected === "all") {
    renderProducts(allProducts)
  } else {
    renderProducts(allProducts.filter(p => p.category === selected))
  }
})

fetch("/api/products")
  .then(res => res.json())
  .then(data => {
    allProducts = data
    populateCategories(data)
    renderProducts(data)
  })
  .catch(err => console.error("Error fetching products:", err))
