class AuthenticationController < ApplicationController
  skip_before_action :authenticate_request
  protect_from_forgery with: :null_session
 
  def authenticate
    byebug
    command = AuthenticateUser.call(params[:email], params[:password])
 
    if command.success?
      render json: { auth_token: command.result }
    else
      render json: { error: command.errors }, status: :unauthorized
    end
  end
 end