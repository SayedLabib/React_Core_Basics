

// Add Product to Cart

const addToCart =  () => {
    const productName = document.getElementById('product-name');
    const productQuantity = document.getElementById('product-quantity');

    const product = productName.value;
    const quantity = productQuantity.value;
    
    productName.value = '';
    productQuantity.value = '';

    console.log(product, quantity);
    displayProduct(product, quantity);
    saveProductToLocalStorage(product, quantity);
}


// Display Product in UI

const displayProduct = (product, quantity) => {
    const cartContainer = document.getElementById('cart-items');
    
    const li = document.createElement('li');
    li.innerHTML = `${product}: ${quantity}`;

    cartContainer.appendChild(li);
}


// Get Stored Product from Local Storage

const getStoredProduct = () => {
    
    let cart = {};

    const storedCart = localStorage.getItem('cart');

    if(storedCart) {
        const cartItems = JSON.parse(storedCart);
        cart = cartItems;
    }
    return cart;
}

// Save Products to Local Storage

const saveProductToLocalStorage = (product,quantity) => {

  const cartItems = getStoredProduct();

  cartItems[product] = quantity;

  cartItemsStringified = JSON.stringify(cartItems);

  localStorage.setItem('cart', cartItemsStringified);  

}

// Display Stored Product in UI from Local Storage

const displayStoredProductFromLocalStorage = () => {

    const storedProducts = getStoredProduct();
    
    console.log(storedProducts);

    for(const product in storedProducts)
    {
      const quantity = storedProducts[product];
      displayProduct(product, quantity);
    //   console.log(product, quantity); 

    }
}

displayStoredProductFromLocalStorage();