import { ProxyState } from "../AppState.js";
import { Car } from "../Models/Car.js";

class CarsService{
    addCar(formData){
        let newCar = new Car(formData.make, formData.model, formData.miles, formData.color, parseFloat(formData.price).toFixed(2), formData.img)
        // ProxyState.cars.unshift(newCar)
        // TODO research the spread ... operator
        console.log(newCar.id);
        ProxyState.cars = [newCar, ...ProxyState.cars]
    }
}

// NOTE singleton
export const carsService = new CarsService()