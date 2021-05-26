import { ProxyState } from "../AppState.js";
import { Car } from "../Models/Car.js";

let url = "https://bcw-sandbox.herokuapp.com/api/cars/"

class CarsService{

    async getAllCars(){
        let res = await axios.get(url)
        ProxyState.cars = res.data.map(c => new Car(c))
    }
    


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