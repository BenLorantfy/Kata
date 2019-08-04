export class Game {
  private rolls: number[] = [];
  private currentRoll: number = 0;

  public roll(numPinsHit: number) {
    this.rolls[this.currentRoll] = numPinsHit;
    this.currentRoll++;
  }

  public calculateScore() {
    let calculatedScore: number = 0;
    let frameIndex = 0;
    for (let frame = 0; frame < 10; frame++) {
      if (this.isStrike(frameIndex)) {
        calculatedScore += 10 + this.calculateStrikeBonus(frameIndex);
        frameIndex += 1;
      } else if (this.isSpare(frameIndex)) {
        calculatedScore += 10 + this.calculateSpareBonus(frameIndex);
        frameIndex += 2;
      } else {
        calculatedScore += this.sumRollsInFrame(frameIndex);
        frameIndex += 2;
      }
    }
    
    return calculatedScore;
  }

  isSpare(frameIndex: number) {
    return (this.rolls[frameIndex] + this.rolls[frameIndex + 1]) === 10;
  }

  isStrike(frameIndex: number) {
    return this.rolls[frameIndex] === 10;
  }

  sumRollsInFrame(frameIndex: number) {
    return this.rolls[frameIndex] + this.rolls[frameIndex + 1];
  }

  calculateSpareBonus(frameIndex: number) {
    const firstRollInNextFrame = this.rolls[frameIndex + 2];
    return firstRollInNextFrame;
  }

  calculateStrikeBonus(frameIndex: number) {
    const firstRollAfterStrike = this.rolls[frameIndex + 1];
    const secondRollAfterStrike = this.rolls[frameIndex + 2];

    return firstRollAfterStrike + secondRollAfterStrike;
  }
}
