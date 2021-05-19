import { ProxyState } from "../AppState.js"
import { House } from "../Models/House.js"

class HousesService{
    addHouse(formData){
        let newHouse = new House(parseFloat(formData.price).toFixed(2),formData.bedrooms,formData.bathrooms,formData.description,formData.levels,formData.img)
        ProxyState.houses.unshift(newHouse)
        ProxyState.houses=ProxyState.houses
    }
}


export const housesService = new HousesService()