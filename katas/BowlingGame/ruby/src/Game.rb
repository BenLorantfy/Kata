class Game

  def initialize
    @current_roll = 0
    @rolls = []
  end

  def roll(pins)
    @rolls[@current_roll] = pins
    @current_roll += 1
  end

  def score
    result = 0
    frame_index = 0

    for frame in 0 ... 10
      if is_strike?(frame_index)
        result += 10 + calculate_strike_bonus(frame_index)
        frame_index += 1
      elsif is_spare?(frame_index)
        result += 10 + calculate_spare_bonus(frame_index)
        frame_index += 2
      else
        result += sum_rolls_in_frame(frame_index)
        frame_index += 2
      end
    end

    result
  end

  def calculate_strike_bonus(frame_index)
    @rolls[frame_index + 1] + @rolls[frame_index + 2]
  end

  def calculate_spare_bonus(frame_index)
    @rolls[frame_index + 2]
  end

  def sum_rolls_in_frame(frame_index)
    @rolls[frame_index] + @rolls[frame_index + 1]
  end

  def is_strike?(frame_index)
    @rolls[frame_index] == 10
  end

  def is_spare?(frame_index)
    @rolls[frame_index] + @rolls[frame_index + 1] == 10
  end
end
