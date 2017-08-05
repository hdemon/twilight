//@flow
import type Individual from './individual';

class Zombie implements Individual {
  id: number

  constructor({ id }) {
    this.id = id;
  }

  behave() {
    console.log("chase and eat")
  }
}
