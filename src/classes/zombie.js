//@flow
import type Individual from './individual'

class Zombie implements Individual {
  id: number
  x: number
  y: number
  style: string

  constructor({ id }) {
    this.id = id
    this.x = Math.random() * 500
    this.y = Math.random() * 500
    this.style = "#aa0000"
  }

  behave() {
    console.log("chase and eat")
  }
}
