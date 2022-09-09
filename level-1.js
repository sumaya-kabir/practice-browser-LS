const setInputValue = (id) => {
    const inputField = document.getElementById(id);
    const inputValue = inputField.value;
    return inputValue;
}

const addToCart = () => {
    const product = setInputValue('product-field');
    const quantity = setInputValue('quantity-field');
    // console.log(product, quantity);
    saveItemToLocalStorage(product, quantity);
}

const getShoppingCartFromLocalStorage = () => {
    let savedCart = localStorage.getItem('cart');
    let cart = {};
    if(savedCart){
        cart = JSON.parse(savedCart); // for getting as an object
    } return cart;
}

const saveItemToLocalStorage = (product, quantity) => {
    const cart = getShoppingCartFromLocalStorage();
    cart[product] = quantity;
    const cartStringified = JSON.stringify(cart);

    // set to localStorage
    localStorage.setItem('cart', cartStringified);

}