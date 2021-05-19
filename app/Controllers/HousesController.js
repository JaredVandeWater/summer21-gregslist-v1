import { ProxyState } from "../AppState.js";

export class HousesController{
    constructor(){
        ProxyState.on('houses', this.drawHouses)
    }

    drawHouses(){
        ProxyState.activePage='houses'
        let template=''
        ProxyState.houses.forEach(house =>{
            template += /*html*/ `
            <div class="col-lg-4 listing mt-4">
                <div class="card my-card shadow">
                    <div class="mx-auto mt-3"> 
                        <img src="${house.img}" height="200" /> 
                    </div>
                    <div class="card-body">
                        <h3 class="text-center">
                            <b>${house.bedrooms} Bed | ${house.bathrooms} Bath</b>
                        </h3>
                        <p>${house.description}</p>
                        <div class="d-flex justify-content-between">
                            <a class="btn btn-primary text-light">Buy</a>
                            <h4 class=>
                                <em>$${house.price}</em>
                            </h4>
                        </div>
                    </div>
                </div>
            </div>
            `
        })

        document.getElementById('listings').innerHTML = template
    }

    addHouse(event){
        event.preventDefault();
        
    }

    toggleForm(){
        if(ProxyState.activePage ==='houses'){
            document.getElementById('house-form').classList.toggle('d-none')
        }
    }

    removeForm(){
        document.getElementById('house-form').classList.add('d-none')
    }

}