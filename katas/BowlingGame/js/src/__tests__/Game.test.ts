import { Game } from "../Game";

let game: Game;
beforeEach(() => {
  game = new Game();
});

test("gutter game should return 0 score", () => {
  rollMany(20, 0);
  expect(game.calculateScore()).toEqual(0);
});

test("all 1s should return 20", () => {
  rollMany(20, 1);
  expect(game.calculateScore()).toEqual(20);
});

test("spare adds bonus of next roll", () => {
  rollSpare();

  // Next roll after spare
  game.roll(3);

  // For rest of game, roll 0s
  rollMany(17, 0);

  // Score without bonus is 13.
  // Add bonus of 3 to 13 to get 16
  expect(game.calculateScore()).toEqual(16);
});

test("strike adds bonus of next two rolls", () => {
  rollStrike();
  game.roll(3);
  game.roll(4);
  rollMany(17, 0);

  // Score without bonus is 17
  // Score with bonus of 3 + 4 is 24
  expect(game.calculateScore()).toEqual(24);
})

test("perfect game", () => {
  rollMany(12, 10);
  expect(game.calculateScore()).toEqual(300);
})

function rollMany(numRolls: number, scorePerRoll: number) {
  for (let i = 0; i < numRolls; i++) {
    game.roll(scorePerRoll);
  }
}

function rollSpare() {
  game.roll(5);
  game.roll(5);
}

function rollStrike() {
  game.roll(10);
}