class ApplicationController < ActionController::Base
  include ::UserSession
  attr_reader :current_user

  private

  def ensure_user_session
    render json: { error: 'login-required' }, status: 401 unless current_user
  end
end
