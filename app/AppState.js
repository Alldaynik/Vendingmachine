import { Snack } from "./Models/Snack.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"

class AppState extends EventEmitter {
  /** @type {import('./Models/Value').Value[]} */
  values = []

  money = 0

  snacks = [
    new Snack('M & M', 1.25, './assets/img/M-ms.jpeg'),
    new Snack('Hot Cheetos', 2.50, './assets/img/hot-cheetos.webp'),
    new Snack('hersheys', 1.50, './assets/img/hersheys.webp'),
    new Snack('sprite', 2.00, './assets/img/sprite-can.jpeg'),
    new Snack('Sweet Tea', 1.25, './assets/img/sweet-tea.png'),
    new Snack('Lemonade', 1.25, './assets/img/calypso.jpeg')
  ]
}

export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
