export default class Team {
  constructor() {
    this.members = [];
  }

  addAll(players) {
    this.members.push(players);
  }

  [Symbol.iterator]() {
    let index = -1;
    const counter = [...this.members];
    return {
      next() {
        index += 1;
        if (index === counter.length) {
          return {
            value: undefined,
            done: true,
          };
        }
        return {
          value: counter[index],
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
const dayn = members[Symbol.iterator]();
console.log(dayn.next());
console.log(dayn.next());
console.log(dayn.next());
