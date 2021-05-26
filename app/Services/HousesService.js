import { ProxyState } from "../AppState.js"
import { House } from "../Models/House.js"

let url = 'https://bcw-sandbox.herokuapp.com/api/houses/'

class HousesService{
    
    async getAllHouses(){
        let res = await axios.get(url)
        ProxyState.houses = res.data.map(h => new House(h))
    }
    
    addHouse(formData){
        let newHouse = new House(parseFloat(formData.price).toFixed(2),formData.bedrooms,formData.bathrooms,formData.description,formData.levels,formData.img)
        ProxyState.houses.unshift(newHouse)
        ProxyState.houses=ProxyState.houses
    }
    buyHouse(id){
        let selectedHouse = ProxyState.houses.find(house => house.id === id )
        console.log(parseFloat(selectedHouse.price));
        if (ProxyState.cash>=parseFloat(selectedHouse.price)){
        ProxyState.houses=ProxyState.houses.filter(house => house.id != id )
        }else Swal.fire('Not Enough Money')
    }
}


export const housesService = new HousesService()