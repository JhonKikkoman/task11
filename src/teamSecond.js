export default class Team {
  constructor() {
    this.members = [];
  }

  * [Symbol.iterator]() {
    for (const index of this.members) {
      yield index;
    }
  }
}
const team = new Team();
console.log(team.iterator);
