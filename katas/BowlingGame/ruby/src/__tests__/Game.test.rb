require_relative "../Game"
require "test/unit"
 
class TestGame < Test::Unit::TestCase
 
  def test_gutter_game
    game = Game.new()
    roll_many(game, 20, 0)

    assert_equal(0, game.score())
  end

  def test_all_ones
    game = Game.new()
    roll_many(game, 20, 1)

    assert_equal(20, game.score())
  end

  def test_one_spare
    game = Game.new()
    roll_spare(game)
    game.roll(3)
    roll_many(game, 17, 0)
    assert_equal(16, game.score())
  end

  def test_one_strike
    game = Game.new()
    roll_strike(game)
    game.roll(3)
    game.roll(4)
    roll_many(game, 17, 0)
    assert_equal(24, game.score())
  end

  def test_perfect_game
    game = Game.new()
    roll_many(game, 12, 10)
    assert_equal(300, game.score())
  end

  def roll_many(game, num_rolls, score_for_rolls)
    for i in 1..num_rolls do
      game.roll(score_for_rolls)
    end
  end

  def roll_spare(game)
    game.roll(5)
    game.roll(5)
  end

  def roll_strike(game)
    game.roll(10)
  end
 
end
