import { ProxyState } from "../AppState.js";
import { carsService } from "../Services/CarsService.js";
import { housesService } from "../Services/HousesService.js";

export class CarsController {
    constructor(){
        ProxyState.on('cars', this.drawCars)
        carsService.getAllCars()
    }


    async getAllHouses(){
        try {
            housesService.getAllHouses()
            
        } catch (error) {
            
        }
    }

    async deleteCar(id){
        try {
           await carsService.deleteCar(id)
            
        } catch (error) {
            
        }
    }


    drawCars(){
        ProxyState.activePage='cars'
        let template = ''
        ProxyState.cars.forEach(car =>{
            template += /*html */`
            <div class="col-lg-4 col-md-6 listing mt-4">
                <div class="card my-card shadow">
                    <div class="mx-auto mt-3"> 
                        <img src="${car.imgUrl}" height="200" /> 
                    </div>
                    <div class="card-body">
                        <h3 class="text-center">
                            <b>${car.make} ${car.model}</b>
                        </h3>
                        <div class="d-flex justify-content-between">
                            <button onclick="app.carsController.deleteCar('${car.id}')" class="btn btn-danger text-light">Delete</button>
                            <h4 class=>
                                <em>$${car.price}</em>
                            </h4>
                        </div>
                    </div>
                </div>
            </div>
            `
        })
        document.getElementById('listings').innerHTML = template
    }

    addCar(event){
        event.preventDefault()
        let form = event.target
        let formData = {
            make: form.make.value,
            model: form.model.value,
            price: form.price.value,
            color: form.color.value,
            img: form.img.value,
            miles: form.miles.value,
        }
        carsService.addCar(formData)
        form.reset()
        this.removeForm()
    }

    toggleForm(){
        if (ProxyState.activePage==='cars'){
        document.getElementById('car-form').classList.toggle('d-none')
        }
    }
    removeForm(){
        document.getElementById('car-form').classList.add('d-none')
    }


}