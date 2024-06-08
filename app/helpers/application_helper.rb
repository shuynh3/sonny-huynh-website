module ApplicationHelper
  def image_style(path)
    "background-image: url('#{image_path(path)}');"
  end
end
