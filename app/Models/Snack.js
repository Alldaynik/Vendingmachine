



export class Snack{
  constructor(name, price, img){
    this.name = name
    this.price = price
    this.img = img
  }
  get Template(){
    return `
    <div class=" col-md-4 item border border-dark rounded my-2 p-3 shadow">
              <h3>${this.name}</h3>
              <p><span>$ ${this.price}</span></p>
              <img class="img-fluid" src="${this.img}" alt="">
              <button class="bnt btn-warning" onclick="app.SnacksController.addMoney()">Buy</button>
            </div>
          </div> 
    `
  }
}