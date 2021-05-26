import { ProxyState } from "../AppState.js"
import { House } from "../Models/House.js"

let url = 'https://bcw-sandbox.herokuapp.com/api/houses/'

class HousesService{
    
    async getAllHouses(){
        try {
            let res = await axios.get(url)
            ProxyState.houses = res.data.map(h => new House(h))
            
        } catch (error) {
            
        }
    }

    async deleteHouse(id){
        try {
            console.log(url + id);
           await axios.delete(url + id)
           ProxyState.houses = ProxyState.houses.filter(h => h.id != id)
            
        } catch (error) {
            
        }
    }
    
    addHouse(formData){
        let newHouse = new House(parseFloat(formData.price).toFixed(2),formData.bedrooms,formData.bathrooms,formData.description,formData.levels,formData.img)
        ProxyState.houses.unshift(newHouse)
        ProxyState.houses=ProxyState.houses
    }
}


export const housesService = new HousesService()