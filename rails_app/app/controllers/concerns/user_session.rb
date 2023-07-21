module UserSession
  extend ActiveSupport::Concern
  attr_reader :current_user

  def current_user
    AuthorizeApiRequest.call(request.headers).result
  end
end