class HomeController < ApplicationController
  before_action :render_content, only: %i[about career skills projects contact]

  def about; end

  def career; end

  def skills; end

  def projects; end

  def contact; end

  def render_content
    respond_to do |format|
      format.html
      format.turbo_stream do
        render turbo_stream: [
          turbo_stream.update(:content, partial: "home/#{action_name}/content"),
          turbo_stream.update(:navigation,
                              partial: 'shared/navigation',
                              locals: { selected: action_name }),
        ]
      end
    end
  end
end
