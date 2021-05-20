export class Car {
    constructor(make, model, miles, color, price, img = '//placehold.it/500x500'){
        this.make = make
        this.model = model
        this.miles = miles
        this.color = color
        this.price = price
        this.img = img
        this.id = Date.now()
    }
}