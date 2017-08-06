//@flow
import type Individual from './individual'

class World {
  width: number
  height: number
  individuals: Individual[]
  context: any

  constructor({ width, height }) {
    let canvas = document.createElement('canvas')
    const body = document.querySelector("body")
    this.context = canvas.getContext("2d")

    canvas.width = width
    canvas.height = height
    canvas.style.cssText = "border: 1px gray solid"
    if (body) {
      body.appendChild(canvas)
    }
  }

  set(individuals) {
    this.individuals = individuals 
  }

  render() {
    this.individuals.forEach((i) => {
      // i.x, i.y
      this.context.strokeStyle = i.style;
      this.context.strokeRect(i.x, i.y, 5, 5);
    })
  }
}