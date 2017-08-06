//     
                                           

class Human                       {
            
           
           
               

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
                      
             
            
            

                     
 
//@flow
                                          

class World {
               
                
                           
              

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
}//@flow
                                          

class Zombie                       {
            
           
           
               

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
let id = 0;

const livings = new Array(10).fill().map(() =>
  new Human({ id: id++ }))
const dead = new Array(10).fill().map(() =>
  new Zombie({ id: id++ }))
const individuals = [...livings, ...dead]

window.onload = () => {
  const world = new World({ width: 500, height: 500 })
  world.set(individuals)

  individuals.forEach((individual) => individual.behave())
  world.render()
}
