if(document.readyState == 'loading') {
    document.addEventListener('DOMContentloaded', ready)
} else {
    ready()
}

function ready() {
    var removeCartItemButtons = document.getElementsByClassName("button1");
for (var i = 0; i < removeCartItemButtons.length; i++) {
    var button = removeCartItemButtons[i]
    button.addEventListener('click', removeCartItem) 
    } 

    var addToCartButtons = document.getElementsByClassName('cartbtn')
    for (var i = 0; i < addToCartButtons.length; i++) {
        var button = addToCartButtons[i]
        button.addEventListener('click', addToCartClicked)
    }
}


function removeCartItem(event) {
    var buttonClicked = event.target
        buttonClicked.parentElement.remove()
        updateCartTotal()
}

function addToCartClicked(event) {
    var button = event.target
    var shopItem = button.parentElement.parentElement
    var title = shopItem.getElementsByClassName('title')[0].innertext
    var price1 = shopItem.getElementsByClassName('price1')[0].innertext
    var imageSrc = shopItem.getElementsByClassName('image')[0].src
    console.log(title, price1, imageSrc)
    addItemToCart(title, price1, imageSrc)
}

function updateCartTotal() {
    var cartItemContainer = document.getElementsByClassName('container1')[0]
    var cartRows = cartItemContainer.getElementsByClassName('rows')
    var total = 0
    for (var i = 0; i < cartRows.length; i++) {
        var cartRow = cartRows[i]
        var priceElement = cartRow.getElementsByClassName('price')[0]
        var price = parseFloat(priceElement.innerText.replace('$', ''))
        total = total + price 
    }
    document.getElementsByClassName('total')[0].innerText = '$' + total

}

function addItemToCart(title, price, imageSrc) {
    var cartRow = document.createElement(div)
    cartRow.innertext = title
    var cartItems = document.getElementsByClassName(container1)
    cartItems.append(cartRow)
}




