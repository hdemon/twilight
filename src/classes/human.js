//@flow
import type Individual from './individual';

class Human implements Individual {
  id: number

  constructor({ id }) {
    this.id = id;
  }

  behave() {
    console.log("run away")
  }

  runAway() {

  }
}
