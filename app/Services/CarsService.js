import { ProxyState } from "../AppState.js";
import { Car } from "../Models/Car.js";

let url = "https://bcw-sandbox.herokuapp.com/api/cars/"

class CarsService{

    async getAllCars(){
        let res = await axios.get(url)
        ProxyState.cars = res.data.map(c => new Car(c))
    }
    
    async deleteCar(id){
        await axios.delete(url + id)
        ProxyState.cars = ProxyState.cars.filter(c => c.id != id)
    }

    async addCar(formData){
        let res = await axios.post(url, formData)
        let newCar = new Car(res.data)
        ProxyState.cars = [...ProxyState.cars, newCar]
    }
}

// NOTE singleton
export const carsService = new CarsService()