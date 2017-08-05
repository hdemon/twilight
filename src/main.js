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
