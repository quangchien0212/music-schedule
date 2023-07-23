class ApplicationController < ActionController::Base
  include Pundit::Authorization
  include ::UserSession

  def pundit_authorize(record, action)
    authorize record, action
  end

  private

  def ensure_user_session
    render json: { error: 'login-required' }, status: 401 unless current_user
  end
end
