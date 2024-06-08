module HomeHelper
  def selected?(selected, value)
    selected.to_s == value.to_s
  end
end
