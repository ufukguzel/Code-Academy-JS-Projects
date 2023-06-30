function main() {
    var prodID = "P123";
    var price = 100;
    var discount = 20;

    var prod1 = new Product(prodID, price);
    console.log(prod1.prodID + " price: " + prod1.price);

    prod1.changePrice(discount);
    console.log(prod1.prodID + " new price: " + prod1.price);
}

function Product(prodID, price) {
    this.prodID = prodID;
    this.price = price;

    this.changePrice = function(discount) {
        this.price = price - ((discount / 100) * price);
    }
}

main();
