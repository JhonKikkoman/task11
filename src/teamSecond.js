export default class Team {
  constructor() {
    this.members = [
      {
        health: 100,
        level: 1,
        name: 'Jhon',
        type: 'Swordsman',
      },
      {
        health: 60,
        level: 1,
        name: 'Kira',
        type: 'Undead',
      },
    ];
  }

  * [Symbol.iterator]() {
    for (const index of this.members) {
      yield index;
    }
  }
}
