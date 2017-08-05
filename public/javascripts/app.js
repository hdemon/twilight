//     
                                           

class Human                       {
            

  constructor({ id }) {
    this.id = id;
  }

  behave() {
    console.log("run away")
  }

  runAway() {

  }
}
                      
             
                  
 
class World {
               
                

  constructor({ width, height }) {
    let canvas = document.createElement('canvas')
    canvas.width = width
    canvas.height = height
    canvas.style = "border: 1px gray solid"
    document.querySelector("body").appendChild(canvas)

  }
}//@flow
                                           

class Zombie                       {
            

  constructor({ id }) {
    this.id = id;
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
  const world = new World({ width: 500, height: 500 });

  individuals.forEach((individual) => individual.behave());
  world.render();
}
