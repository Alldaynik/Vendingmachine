import { ProxyState } from "../AppState.js";






class SnacksService{
  addMoney(){
     
   ProxyState.money += .26
   console.log(ProxyState.money);

  }
  
}

export const snacksService = new SnacksService()