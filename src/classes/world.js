class World {
  width: number
  height: number

  constructor({ width, height }) {
    let canvas = document.createElement('canvas')
    canvas.width = width
    canvas.height = height
    canvas.style = "border: 1px gray solid"
    document.querySelector("body").appendChild(canvas)
  }
}