var removeCartItemButtons = document.getElementsByClassName("button1");
for (var i = 0; i < removeCartItemButtons.length; i++) {
    var button = removeCartItemButtons[i]
    button.addEventListener('click', function(event) {
        var buttonClicked = event.target
        buttonClicked.parentElement.remove()
        updateCartTotal()
    } )
}

function updateCartTotal() {
    var cartItemContainer = document.getElementsByClassName('container')[0]
    var cartRows = cartItemContainer.getElementsByClassName('row')
    var total = 0
    for (var i = 0; i < cartRows.length; i++) {
        var cartRow = cartRows[i]
        var priceElement = cartRow.getElementsByClassName('price')[0]
        var price = parseFloat(priceElement.innerText.replace('$', ''))
        total = total + price 
    }
    document.getElementsByClassName('total')[0].innerText = total

}