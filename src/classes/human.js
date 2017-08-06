//@flow
import type Individual from './individual';

class Human implements Individual {
  id: number
  x: number
  y: number
  style: string

  constructor({ id }) {
    this.id = id;
    this.x = Math.random() * 500
    this.y = Math.random() * 500
    this.style = "#0000aa"
  }

  behave() {
    console.log("run away")
  }

  runAway() {

  }
}
