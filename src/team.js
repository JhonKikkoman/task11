export default class Team {
  constructor() {
    this.memebers = [];
  }

  addAll(players) {
    this.memebers.push(players);
  }

  [Symbol.iterator]() {
    const counter = 0;
    const counterEnding = this.members.length;
    return {
      next() {
        if (counterEnding === counter) {
          return {
            value: undefined,
            done: true,
          };
        }
        return {
          value: counter,
          done: false,
        };
      },
    };
  }
}

const obj1 = {
  health: 100,
  level: 1,
  name: 'Jhon',
  type: 'Swordsman',
};
const obj2 = {
  health: 60,
  level: 1,
  name: 'Kira',
  type: 'Undead',
};
const members = new Team();
members.addAll(obj1);
members.addAll(obj2);
console.log(members);
console.log(members.iterator().next());
