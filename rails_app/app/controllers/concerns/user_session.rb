module UserSession
  extend ActiveSupport::Concern

  def current_user
    AuthorizeApiRequest.call(request.headers).result
  end
end