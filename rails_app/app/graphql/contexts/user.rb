module Contexts
  module User
    def ensure_user_session
      raise ::RailsAppSchema::UserSessionRequiredError unless context[:current_user]
    end
  end
end