import Team from '../team';
import TeamSecond from '../teamSecond';

describe('testing class Team methods', () => {
  test('check in iterator', () => {
    const team = new Team();
    const one = team[Symbol.iterator]();
    const receiver = one.next();
    const result = {
      done: false,
      value: {
        health: 100,
        level: 1,
        name: 'Jhon',
        type: 'Swordsman',
      },
    };
    expect(receiver).toEqual(result);
  });
  test('check in iterator, value undefined', () => {
    const team = new Team();
    const one = team[Symbol.iterator]();
    one.next();
    one.next();
    const receiver = one.next();
    const result = {
      done: true,
      value: undefined,
    };
    expect(receiver).toEqual(result);
  });
});

describe('testing class teamSecond methods', () => {
  test('check in generator', () => {
    const team = new TeamSecond();
    const one = team[Symbol.iterator]();
    const receiver = one.next();
    const result = {
      done: false,
      value: {
        health: 100,
        level: 1,
        name: 'Jhon',
        type: 'Swordsman',
      },
    };
    expect(receiver).toEqual(result);
  });
});
