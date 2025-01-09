const obj1 = {
    name: "Caneta",
    price: 2.50,
    quantity: 10,
    sold
}

function sold(qt){
    this.quantity = this.quantity - qt
}

obj1.sold(3)

console.log(obj1)