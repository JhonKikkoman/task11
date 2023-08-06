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

  [Symbol.iterator]() {
    let index = -1;
    const counter = [...this.members];
    return {
      next() {
        index += 1;
        if (index < counter.length) {
          return {
            value: counter[index],
            done: false,
          };
        }
        return {
          value: undefined,
          done: true,
        };
      },
    };
  }
}
