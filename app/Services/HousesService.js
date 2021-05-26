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
    
    async addHouse(formData){
        let res = await axios.post(url, formData)
        let newHouse = new House(res.data)
        ProxyState.houses = [...ProxyState.houses, newHouse]
    }
}


export const housesService = new HousesService()