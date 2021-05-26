import { CarsController } from "./Controllers/CarsController.js"
import { HousesController } from "./Controllers/HousesController.js";
class App {

  // constructor(){
  //   this.carsController = new CarsController()
  // }

  housesController = new HousesController()
  carsController = new CarsController()

}

const app = new App();

window["app"] = app